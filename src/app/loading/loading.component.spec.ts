import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../_reducers/loading.reducer';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [
        StoreModule.forRoot({
          loading: reducer
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the loading', () => {
    component.isActive = true;

    fixture.detectChanges();

    const div = debugElement
      .query(By.css('.loading'));

    expect(div).toBeTruthy();
  });

  it('should not show the loading', () => {
    const div = debugElement
      .query(By.css('.loading'));

    expect(div).toBeNull();
  });
});
