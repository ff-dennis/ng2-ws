import { Component } from '@angular/core'


@Component({

    selector: 'agenda',
    templateUrl: 'agenda.component.html'

}


)
export class AgendaComponent {

    agenda = [
        "Einführung Angular",
        "Einrichten des Projekts",
        "Unsere erste Component"       
    ]

}