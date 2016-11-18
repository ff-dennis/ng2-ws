import { Component, OnInit, Input } from '@angular/core'
import { User } from './user'

@Component({
    selector: '[user]',
    templateUrl: 'user.component.html'
})
export class UserComponent {

    @Input('user')
    user:User;
    

}