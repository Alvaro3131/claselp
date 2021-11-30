import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  private urlpost:string ='http://localhost:9090/api/persona'; 
  constructor(private http: HttpClient, private router: Router) { }
  getPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.urlpost + '/all');    
  }
  create(post:Post):Observable<any>{   
    
    return this.http.post<Post>(this.urlpost + '/insertar', post,this.httpOptions);
   /*
    .pipe(
      
      map((response: any)=> response.post as Post),
      catchError(e =>{
        if(e.status == 401){
          return throwError(e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  */

  }
  delete(id:number){
    return this.http.delete(`${this.urlpost}/delete/${id}`)
  }

}
