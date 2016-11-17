import { Component, Output, EventEmitter }   from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styles: ['li.page-item { cursor: pointer; cursor: hand; }']
})

export class PaginationComponent {
    @Output('page-changed') pageChanged = new EventEmitter();
    currentPage = 1;

    previous() {
        if (this.currentPage == 1)
            return;

        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    }

    next() {
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }
}