import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { PostModel } from 'src/app/post/post-response';
import { CommentService } from 'src/app/services/comment.service';
import { PostServiceService } from 'src/app/services/post.service.service';
import { CommentModel } from '../commentModel';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  comment: CommentModel = new CommentModel();
  id?: number;
  post!: PostModel;

  constructor(private postService: PostServiceService,private route: ActivatedRoute,private commentService: CommentService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.post = new PostModel();
    this.postService.getPostById(this.id!).subscribe( data => {
      this.post = data
    })
  }

  createComment() {
    this.comment.post = this.post
    this.commentService.createComment(this.comment).subscribe( data => {
      console.log(data);

    },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.comment);
    this.createComment();
  }

  cancel(){
    this.router.navigate(['/posts']);
  }


}
