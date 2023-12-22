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
                <section className='py-20'>
                    {/* <TargetUser /> */}
                    <section className="bg-gray-100 text-gray-800">
                        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
                            <h2 className="text-3xl font-bold">Target People Who will be Benefited with</h2>
                            <div className="flex flex-wrap justify-center lg:justify-between">
                                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                                    <p className="text-4xl font-bold leadi lg:text-6xl">Engineers</p>
                                </div>
                                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                                    <p className="text-4xl font-bold leadi lg:text-6xl">Doctors</p>
                                </div>
                                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                                    <p className="text-4xl font-bold leadi lg:text-6xl">Teachers</p>
                                </div>
                                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                                    <p className="text-4xl font-bold leadi lg:text-6xl">Students</p>
                                </div>
                                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                                    <p className="text-4xl font-bold leadi lg:text-6xl">Developers</p>
                                </div>
                                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                                    <p className="text-4xl font-bold leadi lg:text-6xl">Lawyers</p>
                                </div>
                                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                                    <p className="text-4xl font-bold leadi lg:text-6xl">Bankers</p>
                                </div>
                                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                                    <p className="text-4xl font-bold leadi lg:text-6xl">Others</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </motion.div>
        </div>
    );
};

export default Home;