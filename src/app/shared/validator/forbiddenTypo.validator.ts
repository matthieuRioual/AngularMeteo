import { AbstractControl, ValidatorFn } from '@angular/forms';
//a commenter
export function forbiddenTypo(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (regex.test(control.value)) {
            return { forbiddenTypo: { value: control.value } };
        }
        return null;
    };
}