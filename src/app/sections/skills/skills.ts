
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements AfterViewInit, OnDestroy {

  @ViewChild('workshop')
  workshop!: ElementRef<HTMLElement>;

  @ViewChild('lantern')
  lantern!: ElementRef<HTMLElement>;

  private ticker?: (time: number, deltaTime: number) => void;
  private trigger?: ScrollTrigger;

  private angle = 0;
  private velocity = 0;

  private lastScrollVelocity = 0;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Select the swinging body, NOT the outer lantern.
    const body = this.lantern.nativeElement.querySelector<HTMLElement>(
      '.lantern-swing'
    );

    if (!body) {
      console.error('Could not find .lantern-swing in skills.html');
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Detect scroll movement inside the Skills section.
    this.trigger = ScrollTrigger.create({
      trigger: this.workshop.nativeElement,
      start: 'top bottom',
      end: 'bottom top',

      onUpdate: (self) => {
        const scrollVelocity = self.getVelocity();

        // Ignore insignificant scroll movement.
        if (Math.abs(scrollVelocity) < 10) return;

        // Apply an impulse to the pendulum.
        const impulse = gsap.utils.clamp(
          -180,
          180,
          -scrollVelocity * 0.025
        );

        this.velocity += impulse;

        // Prevent excessive accumulated velocity.
        this.velocity = gsap.utils.clamp(
          -240,
          240,
          this.velocity
        );

        this.lastScrollVelocity = scrollVelocity;
      }
    });

    // Physical pendulum simulation.
    this.ticker = (_time, deltaTime) => {

      const dt = Math.min(deltaTime / 1000, 0.032);

      const stiffness = 65;
      const damping = 7.5;

      // Spring pulls the lantern toward its resting position.
      const acceleration =
        -this.angle * stiffness -
        this.velocity * damping;

      this.velocity += acceleration * dt;
      this.angle += this.velocity * dt;

      // Prevent excessive rotation.
      this.angle = gsap.utils.clamp(
        -42,
        42,
        this.angle
      );

      // Settle when movement becomes negligible.
      if (
        Math.abs(this.angle) < 0.01 &&
        Math.abs(this.velocity) < 0.01
      ) {
        this.angle = 0;
        this.velocity = 0;
      }

      // Rotate only the hanging lantern body.
      gsap.set(body, {
        rotation: this.angle,
        force3D: true
      });
    };

    gsap.ticker.add(this.ticker);

    // Ensure ScrollTrigger has measured the section.
    ScrollTrigger.refresh();
  }

  ngOnDestroy(): void {
    if (this.ticker) {
      gsap.ticker.remove(this.ticker);
    }

    this.trigger?.kill();
  }
}
