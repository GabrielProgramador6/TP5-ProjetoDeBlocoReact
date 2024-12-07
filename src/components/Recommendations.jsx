import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Recommendations(recommendations) {
	const navigate = useNavigate();
	const [slidesPerView, setSlidePerView] = useState(2);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth > 600 && window.innerWidth < 980) {
				setSlidePerView(4);
			} else if (window.innerWidth > 980) {
				setSlidePerView(6);
			} else {
				setSlidePerView(2);
			}
		}

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, [setSlidePerView]);

	function handleCLick(id) {
		navigate(`/stream/${id}`);
	}

	return (
		<div className="my-20 common_padding-inline">
			<h2 className="text-2xl text-white font-bold">Recommendations</h2>
			<Swiper
				spaceBetween={10}
				slidesPerView={slidesPerView}
				className="mt-10 flex items-center justify-center">
				{recommendations.recommendations.map((recommendation) => (
					<SwiperSlide key={recommendation.id}>
						<Link onClick={() => handleCLick(recommendation.id)}>
							<div className="flex items-left ml-2 flex-col w-auto h-auto">
								<h4 className="text-xl text-white">{recommendation.title}</h4>
								<div className="w-full h-full">
									<img
										src={`https://image.tmdb.org/t/p/w500/${recommendation.poster_path}`}
										alt=""
										className="w-full h-auto object-cover"
									/>
								</div>
							</div>
						</Link>
					</SwiperSlide>
				))}
				...
			</Swiper>
		</div>
	);
}
