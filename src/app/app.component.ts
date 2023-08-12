import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paf_day32ws';

  tasks: any[] = [];

  addToList(event: any) {
    console.log('Added to Tasks' + event);
    this.tasks.push(event);
  }

  
}
