import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FigureDetailComponent } from './figure-detail/figure-detail.component';
import { FigureFormComponent } from './figure-form/figure-form.component';
import { FiguresListComponent } from './figures-list/figures-list.component';

const routes: Routes = [
	{path:'figures',component:FiguresListComponent},
	{path:'figure/add',component:FigureFormComponent},
	{path:'figure/:id',component:FigureDetailComponent},
	{path:'figure/update/:id',component:FigureFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
