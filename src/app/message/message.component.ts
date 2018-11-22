import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [
  ]
})
export class MessageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  email: string;
  subscriptions: string;
  password: string;
  data: any;

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
    this.data = this.dataService.getData();
    this.email = this.data.email;
    this.subscriptions = this.data.subscriptions;
    this.password = this.data.password;
  }

}
