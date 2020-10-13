import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenTypo(REGEX: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (REGEX.test(control.value)) {
            return { forbiddenTypo: { value: control.value } };
        }
        return null;
    };
}