import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FigureFormComponent } from './figure-form/figure-form.component';
import { FiguresListComponent } from './figures-list/figures-list.component';

const routes: Routes = [
	{path:'figures',component:FiguresListComponent},
	{path:'addFigure',component:FigureFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
