import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PaginationComponent', () => {
  let fixture: ComponentFixture<PaginationComponent>;
  let debugElement: DebugElement;

  let component: PaginationComponent;
  let prev: HTMLButtonElement;
  let next: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    prev = debugElement
      .query(By.css('.pagination__prev'))
      .nativeElement;

    next = debugElement
      .query(By.css('.pagination__next'))
      .nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be disabled the button prev and next', () => {
    expect(prev.disabled).toBeTruthy();
    expect(next.disabled).toBeTruthy();
  });

  it('should only be disabled the button prev', () => {
    component.nextUrl = 'https://swapi.co/api/people/?page=2';

    fixture.detectChanges();

    expect(prev.disabled).toBeTruthy();
    expect(next.disabled).toBeFalsy();
  });

  it('should only be disabled the button next', () => {
    component.prevUrl = 'https://swapi.co/api/people/?page=1';

    fixture.detectChanges();

    expect(prev.disabled).toBeFalsy();
    expect(next.disabled).toBeTruthy();
  });

  it('should emit the event("changedPage") when click on the button prev', () => {
    component.prevUrl = 'https://swapi.co/api/people/?page=1';

    fixture.detectChanges();

    spyOn(component.changedPage, 'emit');

    prev.click();

    expect(component.changedPage.emit).toHaveBeenCalledWith('https://swapi.co/api/people/?page=1');
  });

  it('should emit the event("changedPage") when click on the button next', () => {
    component.nextUrl = 'https://swapi.co/api/people/?page=2';

    fixture.detectChanges();

    spyOn(component.changedPage, 'emit');

    next.click();

    expect(component.changedPage.emit).toHaveBeenCalledWith('https://swapi.co/api/people/?page=2');
  });
});
