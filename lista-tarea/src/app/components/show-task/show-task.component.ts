import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss']
})
export class ShowTaskComponent {
  @Input() array:any;


  onComplete(index:number):void{
    this.array[index].completed = true;
    alert("El nombre del cliente a sido actualizado");
  }

  onDelete(index:number):void{
    this.array.splice(index, 1);
    alert("Cliente eliminado");
    console.log(this.array);
  }
}
