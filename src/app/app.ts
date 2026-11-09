import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Achievements } from './sections/achievements/achievements';
import { Contact } from './sections/contact/contact';

@Component({
  imports: [RouterOutlet, Header, Hero, About, Skills,Projects,Achievements,Contact],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('sunnik-portfolio');
  isMuted = signal(false);

  @ViewChild('backgroundMusic')
  backgroundMusic!: ElementRef<HTMLAudioElement>;

  async ngAfterViewInit(): Promise<void> {
  const audio = this.backgroundMusic.nativeElement;

  audio.volume = 0.5;

  try {
    await audio.play();
  } catch {
    audio.muted = true;
    this.isMuted.set(true);
  }
}

toggleMute(): void {
  const audio = this.backgroundMusic.nativeElement;

  audio.muted = !audio.muted;
  this.isMuted.set(audio.muted);
}
  isDay = true;

  videoSrc = '';
  musicSrc = '';
  posterSrc = '';
  ngOnInit(): void {
    this.setEnvironment();
  }

  setEnvironment(): void {
    const currentHour = new Date().getHours();

    // Day: 6 AM to 5:59 PM
    // Night: 6 PM to 5:59 AM
    this.isDay = currentHour >= 6 && currentHour < 18;

    if (this.isDay) {
      this.videoSrc = '/videos/hero-day.mp4';
      this.musicSrc = '/audios/day-background-music.mp3';
    } else {
      this.videoSrc = '/videos/hero-night.mp4';
      this.musicSrc = '/audios/night-background-music.mp3';
    }
  }
}
