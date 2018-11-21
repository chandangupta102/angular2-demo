import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       const password = AC.get('password').value;
        if (!(password && password.match(/^(?=.*[a-z, A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/))) {
            AC.get('password').setErrors( {MatchPassword: true});
        } else {
            return null;
        }
    }
  }
