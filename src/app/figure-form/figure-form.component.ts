import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {FigureService} from '../figure-service.service';
import {Figure} from '../figure';
@Component({
  selector: 'app-figure-form',
  templateUrl: './figure-form.component.html',
  styleUrls: ['./figure-form.component.scss']
})
export class FigureFormComponent implements OnInit {
	figure: Figure;
	types:string[]=['circle','square','triangle'];
	id!: number;
	private sub: any;
	isUpdate:boolean=false;
	constructor(private route:ActivatedRoute,private router:Router,private figureService:FigureService) {
		this.figure={
			id: null,
			width: null,
			height: null,
			base: null,
			radius: null,
			type: null
		};
	}

	ngOnInit(): void {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			if(this.id){
				this.isUpdate=true;
			}
		});

		this.figureService.findById(this.id).subscribe(data=>{
			this.figure=data;
		})
	}
	onSubmit() {
		let data={}
		if(this.figure.type=='circle'){
			if(this.isUpdate){
				data={
					id:this.id,
					radius:this.figure.radius,
					type:this.figure.type
				}
			}else{
				data={
					radius:this.figure.radius,
					type:this.figure.type
				}
			}
		}else if(this.figure.type=="square"){
			if(this.isUpdate){
				data={
					id:this.id,
					width:this.figure.width,
					type:this.figure.type
				}
			}else{
				data={
					width:this.figure.width,
					type:this.figure.type
				}
			}
		}else if(this.figure.type=="triangle"){
			if(this.isUpdate){
				data={
					id:this.id,
					base:this.figure.base,
					height:this.figure.height,
					type:'triangle'
				}
			}else{
				data={
					base:this.figure.base,
					height:this.figure.height,
					type:'triangle'
				}
			}
		}
		if(this.isUpdate){
			this.figureService.update(data).subscribe(result => this.gotoFigureList());
		}else{
			this.figureService.save(data).subscribe(result => this.gotoFigureList());
		}
	}

	gotoFigureList() {
		this.router.navigate(['/figures']);
	}
  	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
