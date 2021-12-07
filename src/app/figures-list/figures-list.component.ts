import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Figure} from '../figure'
import {FigureService} from '../figure-service.service';
@Component({
  selector: 'app-figures-list',
  templateUrl: './figures-list.component.html',
  styleUrls: ['./figures-list.component.scss']
})
export class FiguresListComponent implements OnInit {
	figures: Figure[]=[];
	constructor(private figureService:FigureService,private router:Router) { }

	ngOnInit(): void {
		this.figureService.findAll().subscribe(data=>{
			this.figures=data;
		})
	}

	goToProductDetails(id:number) {
		this.router.navigate(['/figure/', id]);
	}

}
