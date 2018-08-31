import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shows-item',
  templateUrl: '../views/shows_item.component.html',
  styleUrls: ['../styles/shows_item.component.scss']
})
export class ShowsItemComponent {
    search_list = []
    genres = ""

    @Input() data: string;

    constructor(private router: Router) {}

    ngOnInit() {
      this.genres = this.data['show'].genres.join(', ');
    }

    getFullInfo(id: number) {
      this.router.navigate(['shows', id])
    }
}
