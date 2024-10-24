import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
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
export class ProjectModalComponent implements OnInit {
  project = {} as Project;
  minHeight: number = Infinity;
  loadedImagesCount: number = 0;

  @ViewChild('carousel') carousel!: ElementRef;

  activeModal = inject(NgbActiveModal);

  ngOnInit(): void {
    this.minHeight = Infinity;
    this.loadedImagesCount = 0;
  }

  onImageLoad(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    const imgHeight = imgElement.naturalHeight;

    if (imgHeight < this.minHeight) {
      this.minHeight = imgHeight;
    }

    this.loadedImagesCount++;
    if (this.project.pictures && this.loadedImagesCount === this.project.pictures.length) {
      this.setCarouselHeight();
    }
  }

  private setCarouselHeight(): void {
    if (this.carousel && this.carousel.nativeElement) {
      this.carousel.nativeElement.style.height = `${this.minHeight}px`;
    }
  }
}
