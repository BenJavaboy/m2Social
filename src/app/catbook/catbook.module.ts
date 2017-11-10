import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PostComponent} from './post/post.component';
import {CommentComponent} from './comment/comment.component';
import {UserComponent} from './user/user.component';
import {RouterModule, Routes} from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { PostListComponent } from './post-list/post-list.component';
import {CatbookComponent} from './catbook.component';
import {CatbookService} from './catbook.service';


const routes: Routes = [
  {
    path: 'post',
    component : CatbookComponent,
    children: [
      {
        path: ':id',
        component: PostComponent
      },
      {
        path: '',
        component: PostListComponent
      }
    ]
  },
  {
    path: 'user',
    component : UserComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CommentComponent,
    PostComponent,
    UserComponent,
    CommentListComponent,
    PostListComponent,
    CatbookComponent
  ],
  providers: [
    CatbookService
  ]
})
export class CatbookModule { }
