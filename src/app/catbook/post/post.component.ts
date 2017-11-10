import {Component, Input, OnInit} from '@angular/core';
import {Post} from './post';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CatbookService} from '../catbook.service';
import 'rxjs/add/operator/switchMap';
import {User} from '../user/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  paramObs: Subscription;

  user: User;

  constructor(private route: ActivatedRoute,
              private service: CatbookService) {
    this.route.paramMap.switchMap(
      (params: ParamMap) => {
        return this.service.getPost(+params.get('id'));
      }
    ).subscribe(post => this.post = post);

    /*this.route.paramMap.switchMap(
      (params: ParamMap) => {
        return this.service.getUser(this.post.userId);
      }
    ).subscribe(user => this.user = user);*/

  }

  ngOnInit() {
     // this.service.getUser(0).subscribe(user => this.user = user.firstName);
  }

}
