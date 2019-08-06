import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredients = new EventEmitter<{ingredientName: string, ingredientAmount: number}>();
  @Output() clearIngredients = new EventEmitter<void>();
  newIngredient = '';
  newAmount: number;
  btnDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredients() {
    this.addIngredients.emit({
      ingredientName: this.newIngredient,
      ingredientAmount: this.newAmount
    });
  }

  onClearIngredient() {
    this.clearIngredients.emit();
    this.newIngredient = '';
    this.newAmount = null;
  }

  onDisableBtn() {
    if (this.newIngredient = '' && this.newAmount === null) {
      this.btnDisabled = true;
    } else {
      this.btnDisabled = false;
    }
  }
}
