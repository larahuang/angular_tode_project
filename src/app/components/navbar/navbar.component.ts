import { Component,Input } from '@angular/core';
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
  @Input() navListsCurrent = '';
  @Input() npageTitleCurrent = '';
  @Input() isActiveCurrent = '';
  //點擊頁面按鈕函式
  actionList(path: string) {
    this.npageTitleCurrent = path;
  }
}
