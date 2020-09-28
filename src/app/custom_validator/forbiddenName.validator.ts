import { AbstractControl } from '@angular/forms';


export function forbiddenNameValidator(control: AbstractControl):{ [key: string]: boolean} | null {
    if (control.value == 'Marseille') {
        return { validName: true };
    }
    return null;
}