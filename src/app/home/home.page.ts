import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface EventData {
  title: string;
  description: string;
  date: string;
  photo: string;
  audio: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events: EventData[] = [];

  constructor(private router: Router, private storage: Storage) {}

  async ionViewWillEnter() {
    await this.storage.create();
    this.events = await this.storage.get('events') || [];
  }

  viewEvent(event: EventData) { 
    this.router.navigate(['/event-details'], { state: { event } });
  }

  async deleteEvent(event: EventData) {
    const index = this.events.indexOf(event);
    if (index > -1) {
      this.events.splice(index, 1);
      await this.storage.set('events', this.events);
    }
  }

  async deleteAllEvents() {
    await this.storage.set('events', []);
    this.events = [];
  }
}
