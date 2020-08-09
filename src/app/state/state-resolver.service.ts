import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface StateResolved {
  search: string;
  state: string;
}

@Injectable({ providedIn: 'root' })
export class StateResolver implements Resolve<StateResolved> {
  constructor(private router: Router, protected http: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot): Observable<StateResolved> {
    const search = route.paramMap.get('search');
    const state = route.paramMap.get('state');
    return this.http.get('/assets/states.json').pipe(
      map((states: Array<any>) => {
        const searchState = states.filter(
          (x) => x.abbreviation.toLowerCase() === state.toLowerCase()
        );
        if (searchState && searchState.length) {
          return { state: searchState[0].name, search };
        }
        this.router.navigate(['/404']);
        return { state: null, search: null };
      })
    );
  }
}
