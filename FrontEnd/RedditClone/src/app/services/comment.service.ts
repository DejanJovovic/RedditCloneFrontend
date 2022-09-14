import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentListModel } from '../comment/commentListModel';
import { CommentModel } from '../comment/commentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>('http://localhost:8080/api/comments/all');

  }
  getCommentsByPostId(id:number): Observable<CommentListModel[]>{
    return this.http.get<CommentListModel[]>('http://localhost:8080/api/comments/postComments/' + id);

  }
  createComment(commentModel:CommentModel): Observable<Object>{
    return this.http.post('http://localhost:8080/api/comments', commentModel);
  }
  deleteComment(id: number): Observable<any>{
    return this.http.delete('http://localhost:8080/api/comment/' + id)
  }
  getCommentById(id:number): Observable<CommentModel>{
    return this.http.get<CommentModel>('http://localhost:8080/api/comments/' + id)
  }
  saveComment(id:number,commentModel: any): Observable<any> {
    return this.http.put('http://localhost:8080/api/comments/edit/' + id, commentModel);
  }  
}
