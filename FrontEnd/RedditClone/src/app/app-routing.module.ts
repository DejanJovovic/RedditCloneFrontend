import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCommunityComponent } from './community/create-community/create-community.component';
import { EditCommunityComponent } from './community/edit-community/edit-community.component';
import { ViewCommunityComponent } from './community/view-community/view-community.component';
import { CommunityListComponent } from './community/community-list/community-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'posts', component: HomeComponent},
  { path: 'create-community', component: CreateCommunityComponent},
  { path: 'community-list', component: CommunityListComponent},
  { path: 'view-community/:id', component: ViewCommunityComponent},
  { path: 'create-post/id', component: CreatePostComponent},
  { path: 'post-list', component: PostListComponent},
  { path: 'updatePost/:id', component: EditPostComponent},
  { path: 'editCommunity/:id', component: EditCommunityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
