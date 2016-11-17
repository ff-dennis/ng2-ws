import { FormControl } from '@angular/forms';

export class CustomValidators {

    static email(control: FormControl) {

        let regEx = /^[_A-Za-z0-9-]+(?:\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*(?:\.[A-Za-z]{2,})$/;
        let valid = regEx.test(control.value);
        if (control.value && !valid) {
            return { invalidEmail: !valid };
        }

        // Null means valid, believe it or not
        return null;
    }
}