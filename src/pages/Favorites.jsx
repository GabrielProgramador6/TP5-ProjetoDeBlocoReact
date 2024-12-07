import { useContextProvider } from '../Context/context';

export default function Favorites() {
	const { favorites } = useContextProvider();

	return (
		<section className="min-h-[100dvh] flex flex-wrap gap-10 my-20 common_padding-inline">
			{favorites.map((stream) => (
				<div
					key={stream.id}
					className="border shadow-md rounded-md py-4 w-auto h-max">
					<p className="text-white text-xl font-medium mb-4 text-center">
						{stream.title}
					</p>
					<div className="max-w-56 h-auto">
						<img
							className="w-full h-full object-cover"
							src={`https://image.tmdb.org/t/p/w500/${stream.backdrop_path}`}
							alt={stream.title || stream.original_title}
						/>
					</div>
					<p className="text-white text-md font-medium mt-2 px-2">
						<strong>Data de lançamento:</strong>
						<br />
						{stream.release_date || 'Indisponível'}
					</p>
				</div>
			))}
		</section>
	);
}
