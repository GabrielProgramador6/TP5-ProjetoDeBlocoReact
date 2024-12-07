import { useEffect } from 'react';
import { getStreamById, getStreams } from '../services/ApiTMDB';
import { useContextProvider } from '../Context/context';
import { useNavigate } from 'react-router-dom';

export default function Streams() {
	const { streams, setStreams } = useContextProvider();
	const navigate = useNavigate();

	useEffect(() => {
		async function fecthStreams() {
			const stream = await getStreams();
			console.log(stream);
			setStreams(stream);
		}

		fecthStreams();
	}, [setStreams]);

	//flex flex-wrap items-center justify-between gap-2 md:gap-6

	return (
		<section className="common_padding grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
			{streams?.map((stream) => (
				<div
					onClick={() => navigate(`stream/${stream.id}`)}
					key={stream.id}
					className="max-sm:col-span-1 col-span-auto flex flex-col gap-2 cursor-pointer">
					<img
						src={`https://image.tmdb.org/t/p/w500/${stream.backdrop_path}`}
						alt=""
					/>
					<p className="text-lg text-stone-100 font-extrabold">
						{stream.title}
					</p>

					<strong className="text-sm text-stone-100 font-extrabold">
						{stream.release_date}
					</strong>
				</div>
			))}
		</section>
	);
}
