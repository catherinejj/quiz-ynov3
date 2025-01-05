import { Category } from './category.model';
export interface Quiz {
    publishedDate : Date,
    id : string,
    category : Category ,
    description : string,
    difficulty : number,
    name : string
}
