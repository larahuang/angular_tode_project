import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {
  Title: string = 'To Do Lists';
  imageLink:string= "https://cdn-icons-png.flaticon.com/512/4697/4697260.png";
}
