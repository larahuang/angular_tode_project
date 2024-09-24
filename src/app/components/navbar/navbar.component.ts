import { Component } from '@angular/core';
import { CommonModule,Location } from '@angular/common';
import { RouterLink } from '@angular/router';

interface navListType{
  title: string,
  path: string,
}
@Component({
  selector: 'app-navbar', //這是元件的名稱
  standalone: true,
  imports: [
    RouterLink,CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navLists: navListType[] = [
    { title: 'Home' ,path:'index'},
    {title:'FetchData',path:'fetch-data'}
  ]
  //頁面名稱
  pageTitle: string = 'Home';

  //
  isActive: boolean = false;

  //點擊頁面按鈕函式
  actionList(path: string) {
    this.pageTitle = path;
  }
}
