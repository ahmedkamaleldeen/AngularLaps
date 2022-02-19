import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { RightComponent } from './right/right.component';
import { FooterComponent } from './footer/footer.component';
import { CarditemComponent } from './cardlist/carditem/carditem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardlistComponent,
    RightComponent,
    FooterComponent,
    CarditemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
