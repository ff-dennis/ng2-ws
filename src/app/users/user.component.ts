import { Component, Output, Input, EventEmitter } from "@angular/core"
import { User } from "./user"

@Component({
	selector: '[user]',
	templateUrl: 'user.component.html',
	styles: ['i.fa.fa-trash-o { cursor: pointer; cursor: hand; }']
})

export class UserComponent {

	@Input('user') user: User;
	@Output() userDeleted = new EventEmitter();


	constructor() {
	}

	deleteUser() {
		this.userDeleted.emit(this.user);
	}
}