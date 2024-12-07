// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { useEffect } from 'react';
// import { A11y, Navigation, Pagination } from 'swiper/modules';
// import { Link } from 'react-router-dom';
// import Button from './Button';
// import { useContextProvider } from '../Context/context';

// export default function HomeSlide() {
// 	const { setSlidesPerView, slidesPerView, slide } = useContextProvider();

// 	useEffect(() => {
// 		const handleResize = () => {
// 			if (window.innerWidth >= 760) {
// 				setSlidesPerView(2);
// 			} else {
// 				setSlidesPerView(1);
// 			}
// 		};

// 		window.addEventListener('resize', handleResize);

// 		handleResize();

// 		return () => {
// 			window.removeEventListener('resize', handleResize);
// 		};
// 	}, [setSlidesPerView]);

// 	return (
// 		<Swiper
// 			style={{ height: `450px` }}
// 			modules={[Navigation, Pagination, A11y]}
// 			spaceBetween={0}
// 			slidesPerView={slidesPerView}
// 			navigation
// 			pagination={{ clickable: true }}>
// 			{slide.length > 1 &&
// 				slide?.map((stream) => (
// 					<SwiperSlide key={stream.id}>
// 						<div
// 							style={{
// 								backgroundImage: `url(https://image.tmdb.org/t/p/w500/${stream.backdrop_path})`,
// 								width: 'auto',
// 								height: '400px',
// 								backgroundRepeat: 'no-repeat',
// 								backgroundSize: 'cover',
// 								backgroundPosition: 'top',
// 								backgroundOrigin: 'border-box',
// 								display: 'flex',
// 								flexDirection: 'column',
// 								gap: '20px',
// 							}}>
// 							<p className="text-2xl sm:text-3xl md:text-4xl text-stone-100 font-extrabold pl-6 sm:pl-8 md:pl-12 pt-20">
// 								{stream.name}
// 							</p>
// 							<Link className="pl-6 sm:pl-8 md:pl-12">
// 								<Button>Go to Stream</Button>
// 							</Link>
// 						</div>
// 					</SwiperSlide>
// 				))}
// 			...
// 		</Swiper>
// 	);
// }

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect } from 'react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useContextProvider } from '../Context/context';

export default function HomeSlide() {
	const { setSlidesPerView, slidesPerView, slide } = useContextProvider();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 760) {
				setSlidesPerView(2);
			} else {
				setSlidesPerView(1);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Chamada inicial

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [setSlidesPerView]);

	return (
		<Swiper
			style={{ height: '450px' }}
			modules={[Navigation, Pagination, A11y]}
			spaceBetween={0}
			slidesPerView={slidesPerView}
			navigation
			pagination={{ clickable: true }}>
			{slide.length > 0 &&
				slide.map((stream) => (
					<SwiperSlide key={stream.id}>
						<div
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/w500/${stream.backdrop_path})`,
								width: 'auto',
								height: '400px',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								backgroundPosition: 'top',
								backgroundOrigin: 'border-box',
								display: 'flex',
								flexDirection: 'column',
								gap: '20px',
							}}>
							<p className="text-2xl sm:text-3xl md:text-4xl text-stone-100 font-extrabold pl-6 sm:pl-8 md:pl-12 pt-20">
								{stream.name}
							</p>
							<Link
								to={`/stream/${stream.id}`}
								className="pl-6 sm:pl-8 md:pl-12">
								<Button>Go to Stream</Button>
							</Link>
						</div>
					</SwiperSlide>
				))}
		</Swiper>
	);
}
