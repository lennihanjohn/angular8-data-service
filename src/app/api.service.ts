import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  customers: Observable<Array<Customer>>;
  private _customers: BehaviorSubject<Array<Customer>>;

  private _dataStore: {
    customers: Array<Customer>;
  };

  constructor(private _httpClient: HttpClient) {
    this._dataStore = {
      customers: [],
    };

    this._customers = <BehaviorSubject<Array<Customer>>>(
      new BehaviorSubject([])
    );
    this.customers = this._customers.asObservable();

  }


  public getCustomers(){
    this.updateCustomers([] as Array<Customer>); // flush out old data

    const URL = `${environment.apiUrl}users/`;

    this._httpClient.get(URL).subscribe(data => {
      this.updateCustomers(data as Array<Customer>);
    });
  }

  private updateCustomers(customers: Array<Customer>) {
    this._dataStore.customers = customers;
    this._customers.next(Object.assign({}, this._dataStore).customers);
  }

  public createCustomer(customer: Customer){}

  public updateCustomer(customer: Customer){}

  public deleteCustomer(id: number){}

  public getCustomerById(id: number){}

}

