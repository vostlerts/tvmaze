import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'episode-list',
  templateUrl: '../views/episode_list.component.html',
  styleUrls: ['../styles/episode_list.component.scss']
})
export class EpisodeListComponent {

    @Input() data: null;
}
