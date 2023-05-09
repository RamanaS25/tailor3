import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { faker } from '@faker-js/faker';
import { range } from 'rxjs';
import { Interface } from 'readline';

interface Item {
  id: number;
  name: string;
  stock: number;
  price:number;
  c1:string;
  c2:string;
  c3:string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class StockPage {
  Stock:Item[] = [];
  Active = false;
  Add = false;
  Querry =false;
  segment: string = 'warning';
  isAlertOpen = false;
  EventValue : any
  AlertOpen = false;
  X = 5
  itemQuantity = 0;
  itemName = "";
  itemPrice = 0;

  
  public buttons = [ 'Open Gallery' ]
  public alertButtons = [
    {
      text: 'Yes',
      role: 'Confirm',
    },
    {
      text: 'No',
      role: 'Cancel',
    }
  ];

  fabric = [
    'cotton',
    'wool',
    'silk',
    'chiffon',
  ]

  toggleActive(): void {
    this.Active = !this.Active;
  }

  toggleAdd(): void {
    this.Add = !this.Add;
  }
  
  constructor() {
    this.FillAnObject()
    this.sortStock()
    }
 
     ngOnInit(): void {
  }

  generateStock(): Item {
    let randomIndex = Math.floor(Math.random() * this.fabric.length);
    let stock = faker.datatype.number({min: 0, max:50});
    return {
      id: faker.datatype.number(),
      name: this.fabric[randomIndex],
      stock: stock,
      c1: 'black',
      c2: 'blue',
      c3: 'grey',
      price: faker.datatype.number({min: 50, max:1000}),
   }
  }

  FillAnObject() : void {
    this.Stock = Array.from({ length: 5 }, () => this.generateStock()); 
    }
  sortStock(): void {
  this.Stock.sort((a, b) => a.stock - b.stock);
}

  ChangeSegmnetValue() {
    this.segment = "warning"
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  MakeOpen(IsOpen: boolean) {
    this.AlertOpen = IsOpen;
  }
 

  HandleAlertDismiss(item : Item, ev :any) {
    this.EventValue = `${ev.detail.role}`;
    if(this.EventValue ==='Confirm'){
      item.stock = item.stock - 1;
    }
    this.isAlertOpen = false;
  }


  createNewItem() {
    const newItem: Item = {
      name: this.itemName,
      stock: this.itemQuantity,
      id: faker.datatype.number(),
      c1: 'black',
      c2: 'blue',
      c3: 'grey',
      price : this.itemPrice,

    };
    this.Stock.push(newItem);
}
}

