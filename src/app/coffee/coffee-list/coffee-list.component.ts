import { Component, OnInit } from '@angular/core';
import { Cafe } from '../models/cafe.model';
import { CafesService } from '../services/cafes.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeComponent implements OnInit {

  public coffees: Array<Cafe> = [];
  constructor(private coffeeService: CafesService) { }
  public cOrigen = 0;
  public cBlend = 0;

  getCoffees(){
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
      this.cOrigen = coffees.filter(x => x.tipo === 'Café de Origen').length;
      this.cBlend = coffees.filter(x => x.tipo === 'Blend').length;
    })
  }



  ngOnInit() {
    this.getCoffees();
  }

}
