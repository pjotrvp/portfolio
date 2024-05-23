import { Component, Input } from '@angular/core';
import { Project } from '../_models/project';
import { CommonModule, NgFor } from '@angular/common';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
}
