import { Component, OnInit } from '@angular/core';
import { StateResolved } from './state-resolver.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <p>
      You are looking <b>{{ resolvedData.search }}</b> in
      <b>{{ resolvedData.state }}</b>
    </p>
  `,
})
export class StateComponent implements OnInit {
  public resolvedData: StateResolved;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.resolvedData = this.route.snapshot.data['resolvedData'];
    console.log(this.resolvedData, 'from state component');
  }
}
