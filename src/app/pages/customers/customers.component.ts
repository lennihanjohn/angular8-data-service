import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/customer';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public customers: Observable<Array<Customer>>;
  public headElements = ['ID', 'Name', 'username', 'email'];

  constructor(
    public apiService: ApiService,
  ) {
    this.customers = this.apiService.customers;
    this.apiService.getCustomers();
   }

  ngOnInit() {

  }

}
