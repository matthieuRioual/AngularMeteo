import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenName(forbiddenName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (control.value.toUpperCase() == forbiddenName.toUpperCase()) {
            return { forbiddenName: { value: control.value } };
        }
        return null;
    };
}
