import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

const API_URL = 'http://api.tvmaze.com';

interface LoginResponse {
    accessToken: string;
    accessExpiration: number;
}

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  public search(value: string, callback) {
    const params =  {
        q: value
    };
    this.http.get(`${API_URL}/search/shows`, { params }).subscribe(response => callback(response.json()))
  }

  public getShowsById(id: number, callback) {
    this.http.get(`${API_URL}/shows/${id}`).subscribe(response => callback(response.json()))
  }

  public getEpisodesList(id: number, callback) {
    this.http.get(`${API_URL}/shows/${id}/episodes`).subscribe(response => callback(response.json()))
  }
}