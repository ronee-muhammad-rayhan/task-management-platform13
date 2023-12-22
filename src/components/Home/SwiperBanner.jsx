// import Swiper core and required modules
import './style.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperBanner() {
    return (
        <Swiper id='bannerSlider'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src="https://img.freepik.com/free-vector/timing-project-scheduling_74855-4584.jpg?w=2000&t=st=1703214100~exp=1703214700~hmac=cc9892889ddb200dd372a65665b3876441d3927859b829330ab2208d3027d8b2" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://img.freepik.com/free-vector/timing-project-scheduling_74855-4584.jpg?w=2000&t=st=1703214100~exp=1703214700~hmac=cc9892889ddb200dd372a65665b3876441d3927859b829330ab2208d3027d8b2" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://img.freepik.com/free-vector/timing-project-scheduling_74855-4584.jpg?w=2000&t=st=1703214100~exp=1703214700~hmac=cc9892889ddb200dd372a65665b3876441d3927859b829330ab2208d3027d8b2" alt="" /></SwiperSlide>
        </Swiper>
    );
}