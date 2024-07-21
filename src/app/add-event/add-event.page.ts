import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage {
  event = {
    title: '',
    description: '',
    date: '',
    photo: '',
    audio: ''
  };

  constructor(private router: Router, private storage: Storage) {}

  async onFileSelected(event: Event) {  
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.event.photo = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  async onAudioSelected(event: Event) {  
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.event.audio = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  async saveEvent() {
    await this.storage.create();
    const events = await this.storage.get('events') || [];
    events.push(this.event);
    await this.storage.set('events', events);
    this.router.navigate(['/home']);
  }
}
