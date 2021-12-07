import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Figure } from '../figure';
import { FigureService } from '../figure-service.service';
import { FigureDetail } from '../figureDetail';

@Component({
  selector: 'app-figure-detail',
  templateUrl: './figure-detail.component.html',
  styleUrls: ['./figure-detail.component.scss']
})
export class FigureDetailComponent implements OnInit, OnDestroy {
	id!: number;
	private sub: any;
	figure:FigureDetail | undefined;
	constructor(private figureService:FigureService,private route: ActivatedRoute,private router:Router) { }
	ngOnInit(): void {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
		});

		this.figureService.findById(this.id).subscribe(data=>{
			this.figure=data;
		})
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	deleteFigure(){
		if(confirm("sure to execute this action?")){
			this.figureService.deleteById(this.id).subscribe(data=>{
				this.router.navigate(['/figures']);
			})
		}
	}
}
