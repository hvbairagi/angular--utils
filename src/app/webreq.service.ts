import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WebreqService {
  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string) {
    this.showSpinner.next(true);

    return this.http.get(`${this.ROOT_URL}/${uri}`).pipe(
      tap(
        (response) => this.showSpinner.next(false),
        (error: any) => this.showSpinner.next(false)
      )
    );
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
}
