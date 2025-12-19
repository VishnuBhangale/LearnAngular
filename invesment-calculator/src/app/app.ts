import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { investmentResult } from "./investment-result/investment-result";

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, investmentResult],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  investmentResult?:{
    year:number,
    interest:number,
    invested:number,
    total:number
  }[];
  onCalculateInvestment (data={initialInvestment:0,
     annualInvestment:0,
      expectedReturn:0, 
      duration:0 })
  {
    const {initialInvestment, annualInvestment, expectedReturn, duration} = data;
    const rate = expectedReturn / 100;
    const annual = annualInvestment;   
    let balance = initialInvestment;
    let invested = initialInvestment;
    const annualData= [];
     for (let y = 1; y <= duration  ; y++) {
      // apply interest on current balance
      balance = balance * (1 + rate);
      // add annual contribution at end of year
      balance += isNaN(annual) ? 0 : annual;
      invested += isNaN(annual) ? 0 : annual;
      const interest = balance - invested;
      annualData.push({
        year: y,
        interest: Math.round(interest * 100) / 100,     
        invested: Math.round(invested * 100) / 100,
        total: Math.round(balance * 100) / 100,

       
      });
  } 
  //console.log(annualData);
  this.investmentResult=annualData;
  //return yearly;
}

}
