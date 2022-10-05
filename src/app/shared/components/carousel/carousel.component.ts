import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

import { items } from './../card/card.model';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  items = items;

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  ngOnInit(): void {
    console.log(items);
  }
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
