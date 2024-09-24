import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductIstComponent } from './product/product.ist/product.ist.component';
import { FormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductIstComponent,
    ProductoFilterPipe
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
