/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoffeeComponent } from './coffee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CafesService } from '../services/cafes.service';
import { Cafe } from '../models/cafe.model';
import faker from '@faker-js/faker';


describe('CoffeeComponent', () => {
  let component: CoffeeComponent;
  let fixture: ComponentFixture<CoffeeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeeComponent ],
      providers: [CafesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeComponent);
    component = fixture.componentInstance;

    component.coffees = [
      new Cafe(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.words(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word()
      ),
      new Cafe(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.words(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word()
      ),
      new Cafe(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.words(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word()
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an thead element ', () => {
    expect(debug.query(By.css('thead')).attributes['class']).toEqual(
      'table-dark'
    );
  });

  it('should have 3 coffees ', () => {
    expect(debug.queryAll(By.css('#records')).length).toEqual(
      3
    );
  });

});
