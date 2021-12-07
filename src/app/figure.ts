export class Figure {
	id: number;
  	width: number;
    height: number;
    base: number;
    radius: number;
    type: string;

	constructor(
		id: number,width: number,height: number,base: number,radius: number,type: string
	) {
		this.id=id;
		this.width=width;
		this.height=height;
		this.base=base;
		this.radius=radius;
		this.type=type;
	}
}
