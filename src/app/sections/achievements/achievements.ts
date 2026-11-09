import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AchievementCard } from '../../components/achievement-card/achievement-card';
import { ACHIEVEMENTS } from './achievements.data';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [AchievementCard,DecimalPipe],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})
export class Achievements implements AfterViewInit, OnDestroy {

  @ViewChild('achievementsSection')
  achievementsSection!: ElementRef<HTMLElement>;

  achievements = ACHIEVEMENTS;

  ngAfterViewInit(): void {
    // Refresh ScrollTrigger after the section has rendered.
    // This helps keep subsequent pinned sections correctly positioned.
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('portfolio:content-ready'));
    });
  }

  ngOnDestroy(): void {
    
  }
}