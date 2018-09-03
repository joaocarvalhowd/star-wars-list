import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.styl']
})
export class PaginationComponent {
  @Input() nextUrl: string;
  @Input() prevUrl: string;

  @Output() changedPage = new EventEmitter<string>();

  constructor() { }

  changePage(page: string) {
    this.changedPage.emit(page);
  }

}
