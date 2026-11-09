import { Component, Input } from '@angular/core';
import { Achievement } from '../../sections/achievements/achievements.model';

@Component({
  selector: 'app-achievement-card',
  standalone: true,
  imports: [],
  templateUrl: './achievement-card.html',
  styleUrl: './achievement-card.scss',
})
export class AchievementCard {
  @Input({ required: true }) achievement!: Achievement;
}