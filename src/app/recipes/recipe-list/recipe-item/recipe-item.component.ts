import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../../recipe.module'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()recipe: Recipe; //data from the outside (we are passing down the data to the recipe item component)
  constructor() { }

  ngOnInit() {
  }

}
