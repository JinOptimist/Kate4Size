import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WifeComponent } from './components/wife/wife.component';
import { SaitNameComponent } from './components/sait-name/sait-name.component';
import { PornTextComponent } from './components/porn-text/porn-text.component';
import { GaleryComponent } from './components/galery/galery.component';
import { OneBlockComponent } from './components/gallery/one-block/one-block.component';
import { SortBlockComponent } from './components/gallery/sort-block/sort-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WifeComponent,
    SaitNameComponent,
    PornTextComponent,
    GaleryComponent,
    OneBlockComponent,
    SortBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
