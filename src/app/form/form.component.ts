import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  post=new Post;
  constructor(private ob:PostService) { }

  ngOnInit(): void {
  }
  guardar(){
  
    this.ob.create(this.post)
    .subscribe(data => {
      console.log(data)
      
    })    
    }
}
