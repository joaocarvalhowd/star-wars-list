import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Loading } from '../_models/loading';
import { AppState } from '../app.state';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.styl']
})
export class LoadingComponent {

  isActive: boolean;

  constructor(private store: Store<AppState>) {
    store
      .pipe(
        select('loading')
      )
      .subscribe((data: Loading) => this.isActive = data.isActive);
  }

}
