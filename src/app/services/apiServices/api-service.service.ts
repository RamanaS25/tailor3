import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  pOrders: number;
  cOrders: number;
}

export interface Orders {
  idt: number;
  customerName:string
  subDate: string;
  DueDate: string;
  clothingType:string;
  fabricUsed: string;
  price: number;
  completed:boolean,
  tailorName: string,
  assigned:boolean
}

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  measurements: {
    chest: number;
    waist: number;
    hips: number;
    inseam: number;
    sleeveLength: number;
    shoulderWidth: number;
  };
  notes: string;
}

interface Stock {
   id: number;
   name: string;
   stock: number;
   price:number;
   c1:string;
   c2:string;
   c3:string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  
  cloths = [
    'shirt',
    'pants',
    'dhoti',
    'kurta'
  ]

  fabric = [
    'cotton',
    'wool',
    'silk',
    'chiffon'
  ]

 private _users: User[] = [];
 private  _orders: Orders[] = []
  
 private _users$ = new BehaviorSubject<User[]>([]);

 private _customers$ = new BehaviorSubject<Customer[]>([])



  constructor() {
   this.loadUsers()
  }

 private generateRandomUser(): User {
    return {
      id: faker.datatype.number(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      pOrders: faker.datatype.number({ min: 11, max: 20 }),
      cOrders: faker.datatype.number({ min: 5, max: 10 })
    };
  }

 private generateRandomCustomer(): Customer {
  return {
    id: faker.datatype.number({min:5, max:100}),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    measurements: {
      chest: faker.datatype.number({min:20, max:40}),
      waist: faker.datatype.number({min:20, max:40}),
      hips: faker.datatype.number({min:20, max:40}),
      inseam: faker.datatype.number({min:20, max:40}),
      sleeveLength: faker.datatype.number({min:20, max:40}),
      shoulderWidth: faker.datatype.number({min:20, max:40}),
    },
    notes: faker.lorem.paragraph()
  }
 }

 private generateRandomOrder(): Orders {
    let randomIndex = Math.floor(Math.random() * this.cloths.length);
    let randomIndex2 = Math.floor(Math.random() * this.fabric.length);
    let bool = [true,false]
    let randomIndex3 = Math.floor(Math.random() * bool.length);
    let randomIndex4 = Math.floor(Math.random() * bool.length);

    let date1 =  faker.date.past(1,'2020-01-01')
    let formatted = date1.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '-');

    let date2 =  faker.date.future(1,'2020-01-01')
    let formatted2 = date2.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '-');
    return{
      idt: faker.datatype.number({ min: 5, max: 100 }),
      customerName: faker.name.firstName(),
      subDate: formatted,
      DueDate: formatted2,
      clothingType:this.cloths[randomIndex],
      fabricUsed: this.fabric[randomIndex2],
      price:  faker.datatype.number({ min: 500, max: 1000 }),
      completed: bool[randomIndex3],
      tailorName: faker.name.firstName(),
      assigned: bool[randomIndex4]
    }

  }

 private generateStock(): Stock {
    let randomIndex = Math.floor(Math.random() * this.fabric.length);

    return {
      id: faker.datatype.number(),
      name: this.fabric[randomIndex],
      stock: faker.datatype.number({min: 10, max:50}),
      c1: 'black',
      c2: 'blue',
      c3: 'grey',
      price: faker.datatype.number({min: 50, max:1000}),

   }
  }

  loadOrders(){
    this._orders = Array.from({ length: 50 }, () => this.generateRandomOrder());
    

    return this._orders
  }

  // loadUsers(){
  //   this._users = Array.from({ length: 4 }, () => this.generateRandomUser());
  
  //   return this._users
  // }

  loadCus() {
    this._customers$.next(Array.from({ length: 4 }, () => this.generateRandomCustomer()));
  }

  loadUsers() {
    this._users$.next(Array.from({ length: 4 }, () => this.generateRandomUser()));
  }

  // loadCustomers(){
  //   let customers = Array.from({ length: 10 }, () => this.generateRandomCustomer());
  //   return customers
  // }

  // loadCustomers(): Observable<Customer[]> {
  //   let customers = Array.from({ length: 10 }, () => this.generateRandomCustomer());
  //   return of(customers);
  // }

  loadStock(){
    let stock = Array.from({ length: 10 }, () => this.generateStock());
    return stock
  }

   findItemById(array: Customer[], id: number): Customer | any {
    console.log('Input array:', array); // Log the input array
    console.log('Target ID:', id); // Log the target ID

    return array.find((item) => item.id === id);
  }

  get users$() {
    return this._users$.asObservable();
  }

  get customers$() {
    return this._customers$.asObservable();
    
  }

  addUser(user: User) {
  const currentUsers = this._users$.getValue();
  currentUsers.push(user);
  this._users$.next(currentUsers);
}

addCus(customer: Customer) {
  const currentCustomers = this._customers$.getValue(); // taking a snapshot of the stream and assigning it to a var
  currentCustomers.push(customer); // pusing our new item to the snapshot
  this._customers$.next(currentCustomers); // we are then inserting the snapshot with the new data into the stream, if other changes were going on they wont be overwritten
}

  
}
