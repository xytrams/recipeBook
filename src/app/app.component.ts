import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadedFeature= 'recipe';
  onNavigate(selected: string) {
    this.loadedFeature = selected;
  }
}


