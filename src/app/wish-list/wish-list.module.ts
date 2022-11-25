import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list.component';

@NgModule({
  declarations: [WishListComponent],
  imports: [CommonModule],
  exports: [WishListComponent],
})
export class WishListModule {}
