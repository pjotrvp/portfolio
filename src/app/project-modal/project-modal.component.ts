import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../_models/project';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgbCarouselModule, NgFor, CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  project = {} as Project;

  activeModal = inject(NgbActiveModal);
}
