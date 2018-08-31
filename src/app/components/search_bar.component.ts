import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: '../views/search_bar.component.html',
  styleUrls: ['../styles/search_bar.component.scss']
})
export class SearchBarComponent {
  
    error = ""
    @Input() minified: boolean = false;
    @Input() value: string = "";

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
