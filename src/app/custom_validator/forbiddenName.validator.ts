import { AbstractControl, ValidatorFn } from '@angular/forms';


export function forbiddenNameValidator(forbiddenName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value === forbiddenName) {
            return { validName: true };
        }
        return null;
    };
}
