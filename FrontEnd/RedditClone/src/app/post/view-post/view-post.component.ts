import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentListModel } from 'src/app/comment/commentListModel';
import { CommentModel } from 'src/app/comment/commentModel';
import { CommentService } from 'src/app/services/comment.service';
import { PostModel } from '../post-response';
import { PostServiceService } from 'src/app/services/post.service.service';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  id! :number;
  commentCreate: CommentModel = new CommentModel();
  post! : PostModel;
  comments? : CommentListModel[];


  constructor(private route: ActivatedRoute,private router: Router,private postService: PostServiceService, private commentService: CommentService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.getCommentsByPostId(this.id);
    this.post = new PostModel();
    this.postService.getPostById(this.id).subscribe( data => {
      this.post = data
    })

  }



  private getCommentsByPostId(id:number) {
    this.commentService.getCommentsByPostId(id).subscribe(data => {
      this.comments = data;
    })
  }

  onSubmit(){
    console.log(this.commentCreate);
    this.createComment();
  }


  createComment(){
    this.commentCreate.post = this.post
    this.commentService.createComment(this.commentCreate).subscribe( data =>{
      console.log(data);
      
    }, 
    error => console.log(error));
    
  }
}
