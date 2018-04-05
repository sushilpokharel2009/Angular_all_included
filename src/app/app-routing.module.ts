import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { FeaturesComponent } from './component/features/features.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  {
    path: '',
   component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path: 'features',
   component:FeaturesComponent
  },

  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path: 'contact',
   component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
