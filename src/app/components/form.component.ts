import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <form (ngSubmit)="search()">
      Cocktails: <input name="searchTerm" [formControl]="searchTerm" type="text"  placeholder="Search for drinks" >
      <button type="submit" name="submit"[disabled]="searchTerm.invalid">Search</button>
    </form>
  `
})
export class FormComponent {
  searchTerm = new FormControl('', Validators.minLength(2));

  @Output() searchEvent = new EventEmitter<string>();

  search() {
    if (this.searchTerm.valid && this.searchTerm.value && this.searchTerm.value.trim().length > 0) {
      const value = this.searchTerm.value;
      this.searchEvent.emit(value);
    }
  }
}
