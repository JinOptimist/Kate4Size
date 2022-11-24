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
import { PornCategoriesComponent } from './components/porn-categories/porn-categories.component';
import { PornCategoryComponent } from './components/porn-categories/porn-category/porn-category.component';
import { ForAdultsComponent } from './components/for-adults/for-adults.component';
import { ForAdultsBoxComponent } from './components/for-adults/for-adults-box/for-adults-box.component';
import { SexToysComponent } from './components/sex-toys/sex-toys.component';
import { SexToysCategoryComponent } from './components/sex-toys/sex-toys-category/sex-toys-category.component';

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
    SortBlockComponent,
    PornCategoriesComponent,
    PornCategoryComponent,
    ForAdultsComponent,
    ForAdultsBoxComponent,
    SexToysComponent,
    SexToysCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
