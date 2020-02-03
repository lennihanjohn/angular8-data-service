
export class Customer{
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

export class Address{
  street: number;
  name: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: any;
}

export class Company{
  name: string;
  catchPhrase: string;
  bs: string;
}
