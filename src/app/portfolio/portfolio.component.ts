import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 0,
      name: 'My personal website',
      summary: 'A website to showcase what i have worked on and my resume',
      description:
        'This website is built to show people what i have worked on so that they know my experience and so they can contact me.',
      projectLink: 'https://github.com/pjotrvp/portfolio',
      pictures: [],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Pjotr van Pruissen - Portfolio');
  }
}
