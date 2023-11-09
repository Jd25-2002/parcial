import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
    @Input() array:any;
    task: Task = {}
    counter: number = 0;
    
    onSubmit():void{
      this.task.id = this.counter;
      this.counter ++;
      this.task.completed = false;
      this.array.push(this.task);
      console.log(this.array)
      alert("Registrado");
      this.task = {}
    }
}
