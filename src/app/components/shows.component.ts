import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'shows-view',
  templateUrl: '../views/shows.component.html',
  styleUrls: ['../styles/shows.component.scss']
})
export class ShowsComponent {

    search_value = ""
    data = {
        genres: 'Loading...',
        name: 'Loading...',
        image: {
            original: '/assets/images/no_poster.jpg'
        },
        summary: 'loading...',
        runtime: 0,
        schedule: {
            days: 'loading...',
            time: 'loading...'
        },
        network: {
            name: 'loading...'
        },
        status: 'loading...',
        type: 'loading...'
    }
    episodes = null

    constructor(private route: ActivatedRoute, private _location: Location, private api: ApiService) {
        this.route.params.subscribe(params => {
            this.api.getShowsById(params.id, (result) => this.renderShows(result, this))
        });
    }

    renderShows(result, self) {
        let _ = result
        _.schedule.days = result.schedule.days.join(', ')
        _.genres = result.genres.join(', ')
        self.data = _
        setTimeout(() => self.api.getEpisodesList(_.id, (result) => self.renderEpisodes(result, self)), 0)
    }

    renderEpisodes(result, self) {
        let _ = result
        let _count = 0
        _.map(item => {
            _count = (item.season > _count) ? item.season : _count
        })
        let __ = Array(_count).fill(undefined)
        __ = __.map((item, key) => {
            let episode = key + 1;
            let _tmp = _.filter(item => item.season == episode)
            return _tmp.reverse()
        })
        __  = __.reverse()
        self.episodes = __
    }

    onBack() {
        this._location.back();
    }
}
