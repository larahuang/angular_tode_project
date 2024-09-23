import { Component, OnInit } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { ToDoComponent } from './components/to-do/to-do.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    ButtonModule,
    ToDoComponent,
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  normalValue='noValue'
  constructorValue="noValue"
  ngOnInitValue="noValue"
  constructor() {
    console.log('constructor啟動了')
   }
  ngOnInit(): void {
   console.log('ngOnInit啟動了')
  }
  title = 'tode_project';
}
