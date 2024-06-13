import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundimageComponent } from './backgroundimage/backgroundimage.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { HeaderComponent } from './header/header.component';
import { BurgermenuComponent } from './burgermenu/burgermenu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundimageComponent, TaskbarComponent, HeaderComponent, BurgermenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pflanzen-App';
}
