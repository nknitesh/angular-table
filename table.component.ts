import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
students: student[]=[
  {rollNo:1, Name:"Nitesh",Eng:50, Math:70, Sci:60, Cs:80, Ss:84},
  {rollNo:2, Name:"Rahul",Eng:40, Math:60, Sci:69, Cs:89, Ss:79},
  {rollNo:3, Name:"Suraj",Eng:55, Math:58, Sci:76, Cs:60, Ss:68},
  {rollNo:4, Name:"Akash",Eng:60, Math:72, Sci:59, Cs:65, Ss:73},
  {rollNo:5, Name:"Kumar",Eng:75, Math:63, Sci:75, Cs:78, Ss:60},
];
}
interface student{
  rollNo:number;
  Name:string;
  Eng:number;
  Math:number;
  Sci:number;
  Cs:number;
  Ss:number;
}
