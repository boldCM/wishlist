import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'snow-button',
  templateUrl: './snow-button.component.html',
  styleUrls: ['./snow-button.component.scss'],
})
export class SnowButtonComponent {
  @Input() isSnowing: boolean = true;
  @Output() isSnowingChange = new EventEmitter<boolean>();

  toggleSnow() {
    this.isSnowing = !this.isSnowing;
    this.isSnowingChange.emit(this.isSnowing);
  }
}
