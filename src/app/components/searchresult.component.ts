import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-result',
  templateUrl: '../views/searchresult.component.html',
  styleUrls: ['../styles/searchresult.component.scss']
})
export class SearchResultComponent {
    title = 'Search result'

    constructor(private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        console.log(params);
      });
    }
}
