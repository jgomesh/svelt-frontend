import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/css';
import 'swiper/swiper.min.css';

function PromotionsSection() {
  return (
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}

    pagination={true}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
  >
    <SwiperSlide>
      <section className='cupom_1'>
      </section>
    </SwiperSlide>
    <SwiperSlide>
      <section className='cupom_2'>

      </section>
    </SwiperSlide>
    <SwiperSlide>
      <section className='cupom_3'>

      </section>
    </SwiperSlide>
  </Swiper>
  );
}

export default PromotionsSection;
