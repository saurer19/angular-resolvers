import { SearchResolver } from './search-resolver.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchComponent,
        resolve: { resolvedData: SearchResolver },
      },
    ]),
  ],
  providers: [SearchResolver],
})
export class SearchModule {}
