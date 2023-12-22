// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import SwiperBanner from '../../components/Home/SwiperBanner';
import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Home/Banner';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TaskMan | Home</title>
            </Helmet>
            {/* Banner/Slider Section */}
            {/* <section>
                <Banner />
            </section> */}
            <motion.div
                initial={{ opacity: 0.6 }}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}

            // className="bg-red-600 w-10 h-10 rounded-[20px]"
            >
                <section>
                    <Banner />
                </section>

            </motion.div>
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