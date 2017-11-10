import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatbookComponent } from './catbook/catbook.component';
import { PostComponent } from './catbook/post/post.component';
import { CommentComponent } from './catbook/comment/comment.component';
import { UserComponent } from './catbook/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {CatbookModule} from './catbook/catbook.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/post',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CatbookModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
