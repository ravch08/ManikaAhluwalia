import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Client1, Client2, Client3, Client4, Client5, Client6, Client7 } from "../utils/helper";

const Clients = () => {
	return (
		<section id="client-slider" title="Clients">
			<div className="container">
				<Swiper
					init={true}
					loop={true}
					speed={1500}
					id="client-list"
					spaceBetween={10}
					loopedSlides={50}
					grabCursor={true}
					navigation={true}
					centeredSlides={false}
					modules={[Autoplay]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						100: {
							slidesPerView: 2,
						},
						460: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 5,
						},
						1260: {
							slidesPerView: 7,
						},
					}}
				>
					<SwiperSlide>
						<img src={Client1} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client2} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client3} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client4} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client5} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client6} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client7} alt="client" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Clients;
