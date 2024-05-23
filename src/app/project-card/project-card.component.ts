import { Component, Input, TemplateRef, inject } from '@angular/core';
import { Project } from '../_models/project';
import { CommonModule, NgFor } from '@angular/common';
import { ModalDismissReasons, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, CommonModule, ProjectModalComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  
  private modalService = inject(NgbModal);

  open() {
    const modalOptions: NgbModalOptions = {
      animation: true,
      size: "lg"
    }
    
    const modalRef = this.modalService.open(ProjectModalComponent, modalOptions);
    modalRef.componentInstance.project = this.project;
  }
  
}
