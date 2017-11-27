import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {RecipeListComponent} from '../recipes/recipe-list/recipe-list.component';
import {Recipe} from '../recipes/recipe.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>(); //to be listened form there to the parent coponenet
  constructor(private recipeList:RecipeListComponent) { }

  ngOnInit() {

  }

  onSelect(selected: string) {
    this.featureSelected.emit(selected);
  }

  

}
