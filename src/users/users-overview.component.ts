import { Component, OnInit } from '@angular/core'
import { User } from './user'
import { UserService} from './user.service'

@Component({
    selector: 'users-overview',
    templateUrl: 'users-overview.component.html'
})
export class UsersOverviewComponent implements OnInit {
    users: User[];

    constructor(private userService:UserService) {

    }

    ngOnInit(): void {
        this.users = this.userService.getUsers();
    }

}