import { ComponentCanDeactivate } from "../component-can-deactivate";

export abstract class FormCanDeactivate extends ComponentCanDeactivate {
    abstract get isUnsavedChanges(): boolean;

    canDeactivate(): boolean {
        return !this.isUnsavedChanges;
    }
}
