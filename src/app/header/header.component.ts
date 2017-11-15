import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from '../recipes/recipe-list/recipe-list.component';
import {Recipe} from '../recipes/recipe.module';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  filter : string;
  constructor(private recipeList:RecipeListComponent) { }

  ngOnInit() {

  }


  search(param: string) {
    /*console.log(param);
      var results =  this.recipeList.recipes.filter((recipe)=>{
        return recipe.name === param || recipe.description === param;
      })
      console.log(results)
      return results;*/
  }

  

}
