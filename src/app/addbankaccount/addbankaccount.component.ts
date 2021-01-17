import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../appmodel/BankAccount';
import { User } from '../appmodel/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addbankaccount',
  templateUrl: './addbankaccount.component.html',
  styleUrls: ['./addbankaccount.component.css']
})
export class AddbankaccountComponent implements OnInit {

  bankAccount: BankAccount = new BankAccount();
  user: User = new User();
  

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.bankAccount.user = this.user;
  }

  addBankAccount() {
    
    this.bankAccount.user.id = JSON.parse(sessionStorage.getItem('id'));
    this.userService.addBankAccount(this.bankAccount).subscribe(response => {
      console.log(response);
    });
  }
}
