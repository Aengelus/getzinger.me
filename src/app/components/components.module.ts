import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class ComponentsModule { }
