import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './home/components/home-container';
import {HomeModule} from './home';
import {NotFindComponent} from './components/not-find/not-find.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFindComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [
  ]
})
export class AppRoutingModule {
}
