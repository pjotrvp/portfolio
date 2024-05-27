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
      summary: 'A website to showcase my resume and my portfolio.',
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
    {
      id: 1,
      name: 'Warehouse game',
      summary: 'A 3D game that helps warehouse staff learn dutch.',
      description:
        'This game is built in Unity, helps warehouse staff learn dutch. The development of this game was a group project and has teached me a lot about working in a team. It has also developed my skills in C# as well as working with a game engine.',
      projectLink: 'https://github.com/ambushcat/warehouse',
      pictures: [
        '../../assets/warehouseGame/warehouse1.png',
        '../../assets/warehouseGame/warehouse2.png',
        '../../assets/warehouseGame/warehouse3.png',
      ],
      tags: [Tag.CSHARP, Tag.UNITY],
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
