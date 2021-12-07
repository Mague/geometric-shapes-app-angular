import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Figure} from './figure';
import { Observable } from 'rxjs';
import { FigureDetail } from './figureDetail';
@Injectable({
	providedIn: 'root'
})
export class FigureService {
	private figuresUrl: string;

  	constructor(private http:HttpClient) {
		this.figuresUrl = 'http://localhost:8080/geometric/';
	}

	public findAll(): Observable<Figure[]> {
		return this.http.get<Figure[]>(this.figuresUrl+"all");
	}

	public save(figure: any){
		return this.http.post<Figure>(this.figuresUrl+"add",figure);
	}
	public update(figure: any){
		return this.http.put<Figure>(this.figuresUrl+"update/"+figure.id,figure);
	}
	public findById(id:number){
		return this.http.get<FigureDetail>(this.figuresUrl+id)
	}
	public deleteById(id:number){
		return this.http.delete<Figure>(this.figuresUrl+"delete/"+id)
	}
}
