import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';

const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'about', component: AboutComponentComponent},
  {path: 'about/persona', component: ProfileComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
