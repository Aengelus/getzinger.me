import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CVComponent } from './components/pages/cv/cv.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PrivateComponent } from './components/pages/private/private.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';


// You have to include the routes in the module you are using
const routes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cv', component: CVComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'private', component: PrivateComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
//    useHash: true,
//    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
