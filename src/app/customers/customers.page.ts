import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/apiServices/api-service.service';
import { Customer } from '../services/apiServices/api-service.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { filter, first, map, takeUntil } from 'rxjs/operators';
import { PassThrough } from 'stream';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CustomersPage implements OnInit {
  isModalOpen = false;
  service = inject(ApiService);

  users$: Observable<Customer[]> | any;
  selectedTailor: Observable<Customer[]> | any;
  selectedCus: any;
  customer: Customer

  private destroy$: Subject<void> = new Subject<void>();

  ngOnInit() {
    // this.users$ = this.service.loadCustomers();

    // this.users$.subscribe((users: any) => (this.selectedCus = users[0]));

    // this.users$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: Customer[]) => (this.selectedCus = users[0]));
    this.customer = {
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      measurements: {
        chest: null,
        waist: null,
        hips: null,
        inseam: null,
        sleeveLength: null,
        shoulderWidth: null,
      },
      notes: null
      // Add other properties if there are any.
    };
  

    this.users$ = this.service.customers$

    this.users$.pipe(first()).toPromise().then((users) => {
      this.selectedCus = users[0];
    });



    console.log(this.users$)
  }

  clog(s: string) {
    this.users$ = this.users$.pipe(
      filter((users: Customer[]) =>
        users.some((user) => user.firstName === 'Mandy')
      ),
      map((users: Customer[]) => users.find((user) => (user.id = 10)))
    );

    console.log(this.users$);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addnewCus() {
    const customer: Customer = this.customer
    this.service.addCus(customer);
    console.log(this.customer)
    this.isModalOpen = false
  }
}
