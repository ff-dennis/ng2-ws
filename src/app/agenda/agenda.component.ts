import { Component } from '@angular/core';

@Component({
	selector: 'agenda',
	templateUrl: 'agenda.component.html',
	styles: [`
	.list-group-item {
    	display: list-item;
	}
	`]
})

export class AgendaComponent {

	agenda = [
		"Einführung in Angular 2",
		"Einrichten des Projekts",
		"Unsere erste Component",
		"Routing",
		"Templates, Direktiven & Pipes",
		"Server Kommunikation, Observables & Lambda Expressions",
		"Forms und Validierung",
		"Module",
		"Zusammenfassung/Ausblick"
	]

}