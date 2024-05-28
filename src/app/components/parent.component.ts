import { Component } from '@angular/core';
import { DrinkService } from '../services/drink.service';

@Component({
  selector: 'app-parent-component',
  template: `
    <app-form (searchEvent)="search($event)"></app-form>
    <app-displayResults [data]="searchResults"></app-displayResults>
  `
})
export class ParentComponent {
  searchResults: any[] | null = null;

  constructor(private drinkService: DrinkService) {}

  search(searchTerm: string) {
    this.drinkService.queryData(searchTerm).subscribe((data: any[]) => {
      console.log(data);
      this.searchResults = data;
    });
  }
}
