import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/pages/home/home.component';


// You have to include the routes in the module you are using
const routes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
//    useHash: true,
//    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
