import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiguresListComponent } from './figures-list/figures-list.component';
import { FigureFormComponent } from './figure-form/figure-form.component';
import { FigureService } from './figure-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FiguresListComponent,
    FigureFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
    FormsModule
  ],
  providers: [FigureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
