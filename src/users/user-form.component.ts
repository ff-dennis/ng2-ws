import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
import { Address } from './address';

@Component({
    templateUrl: 'user-form.component.html'
})
export class UserFormComponent {
    userAddressForm: FormGroup;
    title: string;
    user = new User();

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _userService: UserService
    ) {
       
    }

    addAdress():void {
        this.user.address = new Address();
        this.userAddressForm = this._fb.group({
                //formControlName: [ formControlConfig initialisation like {value: 'n/a', disabled: true}, sync validator, async validator]
                street: ['', Validators.required],
                streetnumber: ['', Validators.compose([Validators.required, Validators.pattern("[0-9a-z]+")])],
                city: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-ZüÜöÖäÄ ]*")])],
                zipcode: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{5}")])]
        });
    }
}