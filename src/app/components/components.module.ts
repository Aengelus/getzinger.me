import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';

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
    AboutComponent,
    NotFoundComponent,
    ContactComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class ComponentsModule { }
