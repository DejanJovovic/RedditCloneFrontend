import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateCommunityComponent } from './community/create-community/create-community.component';
import { EditCommunityComponent } from './community/edit-community/edit-community.component';
import { ViewCommunityComponent } from './community/view-community/view-community.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { VoteButtonComponent } from './post/vote-button/vote-button.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommunityListComponent } from './community/community-list/community-list.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';
import { EditCommentComponent } from './comment/edit-comment/edit-comment.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { ViewCommentComponent } from './comment/view-comment/view-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    HomeComponent,
    ViewPostComponent,
    VoteButtonComponent,
    CreateCommunityComponent,
    SideBarComponent,
    CreatePostComponent,
    ViewCommunityComponent,
    EditPostComponent,
    EditCommunityComponent,
    CommunityListComponent,
    PostListComponent,
    CreateCommentComponent,
    EditCommentComponent,
    CommentListComponent,
    ViewCommentComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   RouterModule,
   HttpClientModule,
   FormsModule,
   ReactiveFormsModule,
   FontAwesomeModule

    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },   UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
