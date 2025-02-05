import { Component, Input } from '@angular/core';
import { Meal } from '../../../interfaces/meal';

@Component({
  selector: 'app-meal-card',
  imports: [],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.scss'
})
export class MealCardComponent {
  @Input({required:true}) meal!: Meal;
}
