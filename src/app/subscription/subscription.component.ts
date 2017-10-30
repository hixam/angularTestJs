import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as miTest from '../../../node_modules/TEST/test';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit, AfterViewInit {

  channel;

  constructor() {}

  ngOnInit() {
    miTest.startListen();
    // this.channel = miTest.startListen();
    // this.channel.bind('my-event', function(data) {
    //   console.log('data from pusher is : ' + data);
    // }.bind(this));
  }
  ngAfterViewInit() {}
}
