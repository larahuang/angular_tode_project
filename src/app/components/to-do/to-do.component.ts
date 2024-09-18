import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {
  Title: string = 'To Do Lists';
  imageLink: string = "https://cdn-icons-png.flaticon.com/512/4697/4697260.png";
  tasks : string[] =[];
  newTask: string = "";//表單綁定
  isAvalible : boolean = false;
  addTasks() {
    const vm = this;
    if (vm.tasks != null) {
      vm.tasks.push(vm.newTask)
      vm.newTask="";
      vm.isAvalible = true;
    }
    console.log(vm.tasks)
  }
}
