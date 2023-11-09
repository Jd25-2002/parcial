import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss']
})
export class ShowTaskComponent {
  @Input() array:any;
  state:boolean=true

  onComplete(index:number):void{
    if(this.state){
      this.state=false

      this.array[index].completed = true;
     
    }else{
      this.state=true
    }
 
  }

  onDelete(index:number):void{
    this.array.splice(index, 1);
    alert("Cliente eliminado");
    console.log(this.array);
  }
/** sirve para obtener el valor que esta digitando el usuario en el input*/
  changeInput(event:any,index:number){
    console.log(event.target.value);
    
    const value=event.target.value
    this.array[index].name=value
  }
}
