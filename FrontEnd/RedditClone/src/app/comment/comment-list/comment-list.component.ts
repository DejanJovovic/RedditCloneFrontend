import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { PostServiceService } from 'src/app/services/post.service.service';
import { CommentModel } from '../commentModel';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments? : CommentModel[];



constructor(private router: Router,private commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments
  }
  private getComments() {
    this.commentService.getAllComments().subscribe(data => {
      this.comments = data
    })
  }

  HomePage(){
    this.router.navigate(['/posts']);
  }
  deleteComment(id:number){
    this.commentService.deleteComment(id).subscribe(data => {
      this.comments = data;
     
    });
  }
  editComment(id:number){
    this.router.navigate(['updateComment',id]);
  }

}
