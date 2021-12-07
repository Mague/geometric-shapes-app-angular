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
	constructor(private route:ActivatedRoute,private router:Router,private figureService:FigureService) {
		this.figure=new Figure(
			0,0,0,0,0,''
		);
	}

	ngOnInit(): void {
	}
	onSubmit() {
		this.figureService.save(this.figure).subscribe(result => this.gotoFigureList());
	}

  gotoFigureList() {
    this.router.navigate(['/figure']);
  }
}
