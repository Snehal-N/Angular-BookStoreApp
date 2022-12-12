import { priceModel } from "./price.model";

export class Bookmodel{
    public id: number=0;
    public title:string='';
    public totalPages:number=0;
    public author:string='';
    public price:priceModel = new priceModel();
    public isPublished:boolean=false;
    public publishedOn:Date | any;

    // public set author(value:string){
    //         this._author='Author:'+ value;
    // } 

    // public get author(){
    //     return this._author;
    // }


}