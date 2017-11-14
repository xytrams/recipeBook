import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from '../recipes/recipe-list/recipe-list.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private recipeList:RecipeListComponent) { }

  ngOnInit() {
    
  }


  search(param) {
    this.recipeList.setRecipeList(
      this.recipeList.recipes.filter((recipe)=>{
        return recipe.name === param || recipe.description === param;
      })
    );        
  }

  

}
