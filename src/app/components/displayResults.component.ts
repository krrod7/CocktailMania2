import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displayResults',
  template: `

    <div *ngIf="data && data.length > 0">
      <h3>Search Results:</h3>
      <ul>
        <li *ngFor="let item of data">
          <strong>Name:</strong> <span class="drink-name"> {{ item.strDrink }}</span><br>
          <img [src]="item.strDrinkThumb" alt="Drink Image" style="width: 200px; height: auto;"><br>
          <strong>Ingredients:</strong> {{ getIngredients(item) }}<br>
          <strong>Instructions:</strong> {{ item.strInstructions }}<br>
        </li>
      </ul>
    </div>
    <div *ngIf="data && data.length === 0">
      No results found.
    </div>
  `,
  styles: [`
    .drink-name {
      font-size: 30px;
      font-weight: bold;
      font-family: 'Brush Script MT', cursive;
      color: black;
    }
  `]
})
export class DisplayResultsComponent {
  @Input() data: any[] | null = null;

  getIngredients(item: any): string {
    const ingredients: string[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = item[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients.join(', ');
  }
}
