import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface EventData {
  title: string;
  description: string;
  date: string;
  photo: string;
  audio: string; 
}

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage {
  event: EventData = {
    title: '',
    description: '',
    date: '',
    photo: '',
    audio: ''  
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.event = navigation.extras.state['event'];
    }
  }
}
