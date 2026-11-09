import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
   isMuted = input(false);
  muteToggle = output<void>();
}
