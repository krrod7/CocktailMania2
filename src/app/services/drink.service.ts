import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Drink } from '../interfaces/cocktails';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private apiUrl = 'https://cocktail--mania-88df6dba9ed5.herokuapp.com/drinks'; // Replace with your Heroku backend URL

  constructor(private http: HttpClient) { }

  queryData(searchTerm: string): Observable<Drink[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${this.apiUrl}?search=${encodeURIComponent(searchTerm)}`;
    return this.http.get<any>(url, { headers }).pipe(
      map((response: any) => {
        return response.drinks.map((drink: any) => {
          return {
            strDrink: drink.strDrink,
            strIngredient1: drink.strIngredient1,
            strIngredient2: drink.strIngredient2,
            strIngredient3: drink.strIngredient3,
            strIngredient4: drink.strIngredient4,
            strIngredient5: drink.strIngredient5,
            strIngredient6: drink.strIngredient6,
            strIngredient7: drink.strIngredient7,
            strIngredient8: drink.strIngredient8,
            strIngredient9: drink.strIngredient9,
            strIngredient10: drink.strIngredient10,
            strIngredient11: drink.strIngredient11,
            strIngredient12: drink.strIngredient12,
            strIngredient13: drink.strIngredient13,
            strIngredient14: drink.strIngredient14,
            strIngredient15: drink.strIngredient15,
            strInstructions: drink.strInstructions,
            strDrinkThumb: drink.strDrinkThumb,
          } as Drink;
        });
      })
    );
  }
}
