import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/apiServices/api-service.service';
import { Customer } from '../services/apiServices/api-service.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})



export class CustomersPage implements OnInit {

  service = inject(ApiService)

  users$: Observable<Customer[]> | any;
  selectedTailor: Observable<Customer[]> | any
  selectedCus:any

  private destroy$: Subject<void> = new Subject<void>();


 

  ngOnInit() {
    this.users$ = this.service.loadCustomers()

   
    
    

    this.users$.subscribe((users: any) => (this.selectedCus = users[0]))

    this.users$
    .pipe(
      takeUntil(this.destroy$))
      .subscribe((users: Customer[]) => (this.selectedCus = users[0]));

  }

  clog(s:string) {
    this.users$ = this.users$.pipe(
      filter((users: Customer[]) => users.some(user => user.firstName === 'Mandy')),
      map((users: Customer[]) => users.find(user => user.id = 10))
    )

    console.log(this.users$)
  }
  
  

  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  

}