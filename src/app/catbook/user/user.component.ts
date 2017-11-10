import {Component, Input, OnInit} from '@angular/core';
import {User} from './user';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CatbookService} from '../catbook.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  paramObs: Subscription;


  constructor(private route: ActivatedRoute,
              private service: CatbookService) {
    this.route.paramMap.switchMap(
      (params: ParamMap) => {
        return this.service.getUser(+params.get('id'));
      }
    ).subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

}
