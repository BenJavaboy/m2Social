import { Component, OnInit } from '@angular/core';
import {Post} from '../post/post';
import {CatbookService} from '../catbook.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  message: string;


  constructor(private service: CatbookService) { }

  ngOnInit() {
    this.service.getAllPost().subscribe(posts => this.posts = posts);
  }

  onClicked(post: Post): void {
    this.message = `Vous avez clické sur le post ${post.content}`;
  }

}
