import { IModule, IComponentOptions } from "angular";

interface IComponentOptionsExt extends IComponentOptions {
    selector: string
}

interface IModuleExt extends IModule {
    moduleName: string
}

export { IComponentOptionsExt, IModuleExt }