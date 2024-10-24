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
    {
      id: 2,
      name: 'Avans devops',
      summary:
        'A Java application that mimmicks a devops system to learn working with design patterns.',
      description:
        'This application has been developed with a partner and was all about learning different design patterns. Code quality and testability was also a very important part of this application, this code is up to standard with SonarCloud quality gate: "Sonar way".',
      projectLink: 'https://github.com/pjotrvp/AvansDevOps',
      pictures: [
        '../../assets/avansDevops/AvansDevOps_Class_Diagram-Arranged.png',
      ],
      tags: [Tag.JAVA],
    },
    {
      id: 3,
      name: 'Risk analysis',
      summary:
        'Using the MAPGOOD method to analyze the risks of a specific case.',
      description:
        'For this project, i worked together with a team to analyse the many different risks that come into play for a organisation, we made a risk register and matched risks to measures to mitigate these risks. By completing this project, we learned a lot about cybersecurity but also learned about how this is implemented in a organisation.',
      tags: [Tag.CYBERSECURITY],
    },
    {
      id: 4,
      name: 'Business Continuity Plan',
      summary:
        'Creating a business continuity plan to keep a company in business after a crisis.',
      description: `This project was about creating a business continuity plan. This is very usefull in a cybersecurity context, because your organisation will know what to do when, for example, a ransomware attack happens.
       This project has learned me a lot about how to keep a company in business after a crisis.
        The plan contains the following parts: Risk management, threats, scenarios, mitigations, recovery plan, communication plan, testing and maintenance.`,
      tags: [Tag.CYBERSECURITY],
    },
    {
      id: 5,
      name: 'Tabletop exercise',
      summary:
        'A tabletop exercise to test the business continuity plan of a company.',
      description:`The tabletop exercise is an expansion upon the business continuity plan. This exercise is a simulation of a crisis, in this case a ransomware attack. The goal of this exercise is to test the business continuity plan and to see if it is up to date and if it works.
       This exercise has learned me a lot about how to test a business continuity plan and how to improve it in future iterations. In this tabletop exercise, my role was the Security & privacy officer, which meant that i was responsible for privacy inquiries.`,
      tags: [Tag.CYBERSECURITY],
    }
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
