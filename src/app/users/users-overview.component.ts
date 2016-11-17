import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';
import { UserComponent } from './user.component';

@Component({
	selector: 'users-overview',
	templateUrl: 'users-overview.component.html',
	styleUrls: ["users-overview.css"]
})

export class UsersOverviewComponent implements OnInit {

	users: User[];
	usersLoading = false;

	constructor(private _service: UserService, private _router: Router) { }

	ngOnInit() {
		this.usersLoading = true;
		this.fetchUsers();
	}

	fetchUsers = () => {
		this._service.getUsers()
			.subscribe(users => {
				this.users = users;
				this.usersLoading = false;
			},
			response => {
				console.log(response);
				if (response.status == 404 || response.status == 0) {
					this._router.navigate(['NotFound']);
				}
			});
	}

	deleteUser(user) {
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			this._service.deleteUser(user.id)
				.subscribe(this.fetchUsers);
		}
	}
}