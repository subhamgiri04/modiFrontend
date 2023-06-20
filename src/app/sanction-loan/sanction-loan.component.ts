import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sanction-loan',
  templateUrl: './sanction-loan.component.html',
  styleUrls: ['./sanction-loan.component.css']
})
export class SanctionLoanComponent {

  loanId!: string;

  sanctionLoan() {
    // Perform the loan sanction logic here
    console.log('Loan sanctioned for ID:', this.loanId);
  }

}
