import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnowButtonComponent } from './snow-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SnowButtonComponent],
  imports: [CommonModule],
  exports: [SnowButtonComponent],
})
export class SnowButtonModule {}
