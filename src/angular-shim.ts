declare var angular: any;

import { IModule, IComponentOptions, IController } from "angular";

interface IModuleExt extends IModule {
    moduleName: string;
}

interface IComponentOptionsExt extends IComponentOptions {
    selector: string;
}

interface INgModuleOptions {
    imports?: string[];
    declarations?: any[];
    providers: Function[]
}

function kebabToCamelCase(input: string): string {
    return input.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

function Component(options: IComponentOptionsExt): Function {
    return function (target: (...args: any[]) => IController): IComponentOptionsExt {
        var component: IComponentOptionsExt = { ...options };
        component.controller = target;
        component.selector = kebabToCamelCase(component.selector);
        return component;
    };
}

function Injectable() {
    return function(target) {
        return target;
    }
}

function instanceOfIComponentOptons(object: any): object is IComponentOptions {
    return (<IComponentOptions>object).controller !== undefined;
}

function Inject(...args: any[]): Function {
    return function (target:
        (...args: any[]) => (IComponentOptions | any)): void {
        var newArgs: string[] = args.map(a => {
            if (typeof a === "function") { return a.name; }
            return "" + a;
        });
        if (instanceOfIComponentOptons(target)) {
            let controller = (<IComponentOptions>target).controller;
            console.log(`[DependencyInjection] Injecting into controller ${(<any>controller).name} ${JSON.stringify(newArgs)}`);
            (<any>controller).$inject = newArgs;
        } else {
            console.log(`[DependencyInjection] Injecting into service ${(<any>target).name} ${JSON.stringify(newArgs)}`);
            target.$inject = newArgs;
        }
    };
}
    
function NgModule(options: INgModuleOptions): Function {
    return function (target: any): any {
        var moduleName: string = target.name;
        var imports: any[] = options.imports || [];
        var app: IModule = angular.module(moduleName, imports);

        if (options.declarations.length > 0) {
            for (let component of options.declarations) {
                console.log(`[ComponentRegistration] ${(<any>component.controller).name} selector: ${component.selector}`);
                app.component(component.selector, component);
            }
        }

        if (options.providers.length > 0) {
            for (let service of options.providers) {
                let serviceName = (<any>service).name;
                console.log(`[ServiceRegistration] ${serviceName}`);
                app.service(serviceName, service);
            }
        }

        return target;
    };
}

export { Component, Inject, Injectable, NgModule };
