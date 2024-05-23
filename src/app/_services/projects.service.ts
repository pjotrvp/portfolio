import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'My personal website',
      summary: 'A website to showcase what i have worked on and my resume',
      description:
        'This website is built to show people what i have worked on so that they know my experience and so they can contact me.',
      projectLink: 'https://github.com/pjotrvp/portfolio',
      pictures: [
        '../../assets/smiley-no-bg.png',
        '../../assets/smiley-no-bg.png',
        '../../assets/smiley-no-bg.png',
      ],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
  ];

  constructor() {}

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
  }
}
