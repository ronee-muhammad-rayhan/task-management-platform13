// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import SwiperBanner from '../../components/Home/SwiperBanner';
import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Home/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TaskMan | Home</title>
            </Helmet>
            {/* Banner/Slider Section */}
            <section>
                <Banner />
            </section>
            {/* <section>
                <Swiper id='swiper-banner'
                    spaceBetween={50}
                    slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src="https://img.freepik.com/free-vector/timing-project-scheduling_74855-4584.jpg?w=2000&t=st=1703214100~exp=1703214700~hmac=cc9892889ddb200dd372a65665b3876441d3927859b829330ab2208d3027d8b2" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-vector/timing-project-scheduling_74855-4584.jpg?w=2000&t=st=1703214100~exp=1703214700~hmac=cc9892889ddb200dd372a65665b3876441d3927859b829330ab2208d3027d8b2" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-vector/timing-project-scheduling_74855-4584.jpg?w=2000&t=st=1703214100~exp=1703214700~hmac=cc9892889ddb200dd372a65665b3876441d3927859b829330ab2208d3027d8b2" alt="" /></SwiperSlide>
                    </Swiper>
                <SwiperBanner></SwiperBanner>
            </section> */}

            {/* Target User Section */}
            <section className='py-12'>
                {/* <TargetUser /> */}
            </section>
        </div>
    );
};

export default Home;