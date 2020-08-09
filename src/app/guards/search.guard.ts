import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanLoad,
  RouterStateSnapshot,
  Router,
  Route,
  UrlSegment,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SearchGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    console.log(route, segments);

    const search = segments[0].path;
    if (search !== 'homes' && search !=="parks") {
      this.router.navigate(['/404']);
      return false;
    }
    return true;
  }
}
