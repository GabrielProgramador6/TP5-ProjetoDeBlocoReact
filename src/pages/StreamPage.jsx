import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecommendations, getStreamById } from '../services/ApiTMDB';
import Recommendations from '../components/Recommendations';
import { useContextProvider } from '../Context/context';

export default function StreamPage() {
	const { id } = useParams();
	const [stream, setStream] = useState(null);
	const [recommendations, setRecommendations] = useState(null);

	const { handleAddFavorites } = useContextProvider();

	useEffect(() => {
		async function fetchStream() {
			try {
				const data = await getStreamById(id);
				const recom = await getRecommendations(id);
				setStream(data);
				setRecommendations(recom);
			} catch (error) {
				console.error('Erro ao buscar o stream:', error);
			}
		}

		fetchStream();
	}, [id]);

	if (!stream) return <div>Stream não encontrado.</div>;

	return (
		<div className="min-h-[90dvh]">
			<h1 className="text-xl sm:text-4xl text-gray-50 font-semibold text-center mt-12 mb-8">
				{stream.title || stream.name}
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-content-between">
				<div className="w-full h-full">
					<img
						className="w-full h-full object-cover"
						src={`https://image.tmdb.org/t/p/w500/${stream.backdrop_path}`}
						alt={stream.title || stream.original_title}
					/>
				</div>
				<div className="flex flex-col gap-4 max-w-max common_padding-inline text-lg sm:text-2xl text-gray-50">
					<p>{stream.overview}</p>
					<p>
						<strong>Data de lançamento:</strong>
						{stream.release_date || 'Indisponível'}
					</p>
					<div>
						<button
							onClick={() => handleAddFavorites(stream)}
							className="border-2 border-purple-700 rounded-md py-2 px-6 hover:bg-purple-700 ">
							Add your favorits
						</button>
					</div>
				</div>
			</div>

			{recommendations.length > 0 && (
				<Recommendations recommendations={recommendations} />
			)}
		</div>
	);
}
