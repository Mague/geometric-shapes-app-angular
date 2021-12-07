import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Figure} from './figure';
import { Observable } from 'rxjs';
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

	public save(figure: Figure){
		return this.http.post<Figure>(this.figuresUrl+"add",figure);
	}
}
