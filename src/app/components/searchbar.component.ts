import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: '../views/searchbar.component.html',
  styleUrls: ['../styles/searchbar.component.scss']
})
export class SearchBarComponent {
  
    error = ""

    constructor(private router: Router) {}

    onSearchClick(value: string) {
        this.error = ""
        if (value === "") {
            this.error = "Field 'Name' is required"
            return
        }
        this.router.navigate(['search', value])
    }
}
