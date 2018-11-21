import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  email: string;

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
  }

}
