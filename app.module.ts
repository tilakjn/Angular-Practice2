import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersModule } from './users/users.module';
import { TempComponent } from './temp/temp.component';
import { HighlightDirective } from './highlight.directive';
import { NeedDataService } from './need-data.service';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    TempComponent,
    HighlightDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    RouterModule
  ],
  providers: [NeedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
