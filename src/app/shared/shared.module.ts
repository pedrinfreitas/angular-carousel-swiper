import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [CarouselComponent, CardComponent],
  imports: [CommonModule, SwiperModule],
  exports: [CarouselComponent],
})
export class SharedModule {}
