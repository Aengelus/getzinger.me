import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CVComponent } from './pages/cv/cv.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PrivateComponent } from './pages/private/private.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CVComponent,
    NotFoundComponent,
    ContactComponent,
    ProjectsComponent,
    PrivateComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class ComponentsModule { }
