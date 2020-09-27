import { AbstractControl } from '@angular/forms';


export function nameValidator(control: AbstractControl) {
    if (control.value == 'Marseille') {
        return { validName: true };
    }
    return null;
}