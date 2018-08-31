import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'search-result',
  templateUrl: '../views/search_result.component.html',
  styleUrls: ['../styles/search_result.component.scss']
})
export class SearchResultComponent {
    title = 'Search result'

    search_list = []
    search_value = ""

    constructor(private route: ActivatedRoute, private api: ApiService) {
      this.route.params.subscribe(params => {
        let value = params.value
        this.search_value = value
        value = encodeURIComponent(value)
        this.api.search(value, (result) => this.search_list = result)
      });
    }
}
