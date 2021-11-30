import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
filas:Post[]=[];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(){
    this.postService.getPost().subscribe(data =>{
      this.filas= data;
      console.log(this.filas)
    });
  }

  editar(i:number){
    alert("su id es:"+this.filas[i].id)
    }
    eliminar(i:number){
      var c=Number(this.filas[i].id);
      this.postService.delete(c).subscribe(data =>{
        
        console.log(data)
      });
      this.listar();
    }

}
