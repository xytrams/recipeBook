import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.module';
import {HeaderComponent} from '../../header/header.component';
import { Observable, Subscriber } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = [
    {
      name: 'Taco',
      description: 'Pork Taco',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg'
    },
    {
      name: 'Burrito',
      description: 'Fish Burrito',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg'
    }
  ] ;
  constructor() { }

  ngOnInit() {
  }

  setRecipeList(list) {
    this.recipes = list;
  }
}
