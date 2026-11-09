import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ProjectCard } from '../../components/project-card/project-card';
import { PROJECTS } from './projects.data';
import { DecimalPipe } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard,DecimalPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit, OnDestroy {

  @ViewChild('projectsSection')
  projectsSection!: ElementRef<HTMLElement>;

  @ViewChild('projectsViewport')
  projectsViewport!: ElementRef<HTMLElement>;

  @ViewChild('wantedBoard')
  wantedBoard!: ElementRef<HTMLElement>;

  projects = PROJECTS;

  private animationContext?: gsap.Context;

  ngAfterViewInit(): void {
    this.initHorizontalScroll();
  }

  private initHorizontalScroll(): void {
    const section = this.projectsSection.nativeElement;
    const viewport = this.projectsViewport.nativeElement;
    const board = this.wantedBoard.nativeElement;

    this.animationContext = gsap.context(() => {

      const media = gsap.matchMedia();

      // Desktop and tablet: vertical scroll drives horizontal movement.
      media.add('(min-width: 768px)', () => {

        const getScrollDistance = () =>
          Math.max(0, board.scrollWidth - viewport.clientWidth);

        gsap.to(board, {
          x: () => -getScrollDistance(),
          ease: 'none',

          scrollTrigger: {
            trigger: viewport,
            start: 'top top',
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

      });

      // Mobile: native horizontal touch scrolling.
      media.add('(max-width: 767px)', () => {
        gsap.set(board, { clearProps: 'transform' });
      });

    }, section);

    ScrollTrigger.refresh();
  }

  ngOnDestroy(): void {
    this.animationContext?.revert();
  }
}