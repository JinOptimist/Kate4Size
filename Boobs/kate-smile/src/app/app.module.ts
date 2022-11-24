import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WifeComponent } from './components/wife/wife.component';
import { PornTextComponent } from './components/porn-text/porn-text.component';
import { PornCategoriesComponent } from './components/porn-categories/porn-categories.component';
import { PornCategoryComponent } from './components/porn-categories/porn-category/porn-category.component';
import { ForAdultsComponent } from './components/for-adults/for-adults.component';
import { ForAdultsBoxComponent } from './components/for-adults/for-adults-box/for-adults-box.component';
import { SexToysComponent } from './components/sex-toys/sex-toys.component';
import { SexToysCategoryComponent } from './components/sex-toys/sex-toys-category/sex-toys-category.component';
import { ActiveArrayComponent } from './components/active-array/active-array.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WifeComponent,
    PornTextComponent,
    PornCategoriesComponent,
    PornCategoryComponent,
    ForAdultsComponent,
    ForAdultsBoxComponent,
    SexToysComponent,
    SexToysCategoryComponent,
    ActiveArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
