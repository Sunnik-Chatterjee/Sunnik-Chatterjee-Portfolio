import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About implements AfterViewInit, OnDestroy {

    @ViewChild('aboutSection')
    aboutSection!: ElementRef<HTMLElement>;

    private observer?: IntersectionObserver;

    ngAfterViewInit(): void {

        const section = this.aboutSection.nativeElement;

        section.classList.add('reveal-enabled');

        this.observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add('is-visible');

                        this.observer?.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        const elements = section.querySelectorAll('.reveal');

        elements.forEach((element) => {
            this.observer?.observe(element);
        });

    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}
