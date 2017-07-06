import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fep00.epimg.net%2Felcomidista%2Fimagenes%2F2016%2F07%2F27%2Freceta%2F1469653710_388939_1469653863_media_normal.jpg&imgrefurl=http%3A%2F%2Felcomidista.elpais.com%2Felcomidista%2F2016%2F07%2F27%2Freceta%2F1469653710_388939.html&docid=7lstsEaIy_hPmM&tbnid=7aIda839szSPAM%3A&vet=10ahUKEwjHnpXK5_XUAhVDhJAKHYJ9CQEQMwhEKAIwAg..i&w=1800&h=799&client=ubuntu&bih=641&biw=1301&q=ratatouille&ved=0ahUKEwjHnpXK5_XUAhVDhJAKHYJ9CQEQMwhEKAIwAg&iact=mrc&uact=8')
  ];

  constructor() { }

  ngOnInit() {
  }

}
