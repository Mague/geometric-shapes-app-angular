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
	types:string[]=['Circle','Square','Triangle'];
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
	}
	onSubmit() {
		let data={}
		if(this.figure.type=='Circle'){
			data={
				radius:this.figure.radius,
				type:this.figure.type
			}
		}else if(this.figure.type=="Square"){
			data={
				width:this.figure.width,
				type:this.figure.type
			}
		}else if(this.figure.type=="Triangle"){
			data={
				base:this.figure.base,
				height:this.figure.height,
				type:'triangle'
			}
		}
		this.figureService.save(data).subscribe(result => this.gotoFigureList());
	}

  gotoFigureList() {
    this.router.navigate(['/figures']);
  }
}
