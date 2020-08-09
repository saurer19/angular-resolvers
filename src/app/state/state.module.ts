import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StateResolver } from './state-resolver.service';



@NgModule({
  declarations: [StateComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StateComponent,
      resolve: { resolvedData: StateResolver },

    },

    ])
  ],
  providers:[StateResolver]
})
export class StateModule { }
