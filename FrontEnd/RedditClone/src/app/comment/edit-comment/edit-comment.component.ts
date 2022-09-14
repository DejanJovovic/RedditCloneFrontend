import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CommentService } from 'src/app/services/comment.service';
import { CommentMod, CommentModel } from '../commentModel';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  id! : number
  updatePostForm : FormGroup;
  commentModel : CommentMod
  text = new FormControl('');



  constructor(private route: ActivatedRoute,private router: Router, private commentService: CommentService) { 
    this.updatePostForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentModel = {
      text: ''
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.commentService.getCommentById(this.id).subscribe(data => {
      this.commentModel = data
    })

  }


  EditComment(){
    this.commentModel.text = this.updatePostForm.get('text')?.value;
    this.commentService.saveComment(this.id,this.commentModel).subscribe(data => {
      this.router.navigateByUrl('/posts');
      console.log(data);
    })
  }

  Cancel(){
    this.router.navigateByUrl('/posts');
  }

}
