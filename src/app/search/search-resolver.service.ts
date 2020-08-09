import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface SearchResolved {
  search: string;
  subSearch:string;
}

@Injectable()
export class SearchResolver implements Resolve<SearchResolved> {
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<SearchResolved> {

    console.log('hello???',route, state)
    const search = route.paramMap.get('search');
    const subSearch = route.data?.subSearch || null;

    return of({ search, subSearch });
  }
}
