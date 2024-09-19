
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms'
interface listType{
  id: string | never,
  subject: string,
  editTask: string,
  isShow:boolean
}

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule, HttpClientModule,
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})

export class ToDoComponent  {
  http = inject(HttpClient);
  posts: any = [];
  Title: string = 'To Do Lists';
  imageLink: string = "https://cdn-icons-png.flaticon.com/512/4697/4697260.png";
  tasks: string[] = [];
  lists: listType[] = [];
  editTaskLists: string = "";
  newTask: string = "";//表單綁定
  isAvalible: boolean = false;
  isShow: boolean = false;

  httpClient = inject(HttpClient);
  data: Array<any> = [];
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  //參考https://codewithmrnerd.medium.com/angular-17-call-rest-api-d356897eb661

  ngOnInit(): void  {
    //this.fetchGetArry()
    this.fetchFunction()

  }
  fetchFunction() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        this.posts = data;
        console.log( 'posts',this.posts )
      });
  }
  fetchGetArry() {
   this.httpClient.get(this.url)
      .subscribe({
        next: (posts: any) => {
          console.log(posts);
          this.posts = posts;
        }, error: (err) => console.log(err)
      });
  }

  //https://v17.angular.io/api/core/OnInit
  //新增
  addTasks() {
    const vm = this;
    let query = {
     id:Date.now().toString(),
      subject: vm.newTask.trim(),
      editTask: vm.newTask.trim(),
      isShow:false,
    }
    console.log('新增的參數',query)
    vm.lists.push(query);
    vm.isAvalible = true;
  }
  //刪除
  deleteTasks(index: number) {
    const vm = this;
    vm.lists.splice(index,1);
    vm.isAvalible = vm.lists.length > 0;
  }
  //編輯
  editTasks(index: number, editTask: string): string | void {
    const vm = this;
    vm.lists[index].isShow = true;
    console.log(editTask)
    vm.lists[index].subject = editTask;
    console.log(vm.lists);
    vm.newTask ="";
  }
}
