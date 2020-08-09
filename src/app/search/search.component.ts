import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResolved } from './search-resolver.service';
@Component({
  template: `
    <p>
      You are in <b>{{ resolvedData.search }}</b>
      <span *ngIf="resolvedData.subSearch"> {{ resolvedData.subSearch }}</span>
    </p>
  `,
})
export class SearchComponent implements OnInit {
  public resolvedData: SearchResolved;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.route)
    this.resolvedData = this.route.snapshot.data['resolvedData'];
  }
}
