import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonImg, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { Recipe } from './recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonImg, IonAvatar, IonLabel, CommonModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  standalone: true,
})
export class RecipesComponent implements OnInit {

  public recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ejVlTpLo-o0OXyKVvhy_iAHaE6%26pid%3DApi&sp=1733786008T4f07fbe1aaa5914354cbe1a65577522f3f87e69405084161a4b0b19345f17032',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic.fanpage.it%2Fwp-content%2Fuploads%2Fsites%2F22%2F2021%2F06%2Fspaghetti-bolognese.jpg&sp=1733786086T3c80965418756f86e52f3d3ecea6d5d4b27096b0215486bee326d2f3230e7fdd',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  public ngOnInit() {
    console.log("hello");
  }

}
