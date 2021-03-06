import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from '../app/my-site/main/main.component';
import {StrataComponent} from '../app/strata/strata.component';
import {NotfoundComponent} from '../app/notfound/notfound.component';
import { ClickmasterComponent } from './clickmaster/clickmaster.component';
import { AerialComponent } from './aerial/aerial.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'demo/angular6/strata', component: StrataComponent },
  { path: 'demo/angular6/clickmaster', component: ClickmasterComponent },
  { path: 'demo/angular6/aerial', component: AerialComponent},
  { path: 'Not-Found', component: NotfoundComponent },
  { path: '**', redirectTo: '/Not-Found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouting {

}
