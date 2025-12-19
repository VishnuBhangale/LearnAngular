import { Component, Input, NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
})
export class investmentResult {
@Input() result?:{
  year:number
  interest:number
  invested:number
  total:number  
}[];
}
