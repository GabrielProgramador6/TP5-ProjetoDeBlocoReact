import { createContext, useContext, useEffect, useState } from 'react';
import { getStreams } from '../services/ApiTMDB';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const Context = createContext(null);

export function AppContext({ children }) {
	const [streams, setStreams] = useState([]);
	const [slide, setSlide] = useState([]);
	const [slidesPerView, setSlidesPerView] = useState(1);
	const [favorites, setFavorites] = useState([]);

	async function getStreamsForSlide() {
		const streams = await getStreams();
		const slideEl = [streams[6], streams[1], streams[2], streams[10]];
		setSlide(slideEl);
	}

	function handleAddFavorites(stream) {
		setFavorites([...favorites, stream]);
	}

	useEffect(() => {
		getStreams();
		getStreamsForSlide();
	}, []);

	const sharedValues = {
		streams,
		setStreams,
		slide,
		setSlide,
		slidesPerView,
		setSlidesPerView,
		handleAddFavorites,
		favorites,
	};

	return <Context.Provider value={sharedValues}>{children}</Context.Provider>;
}

export function useContextProvider() {
	const context = useContext(Context);
	if (!context) {
		throw new Error('O contexto não foi inicializado.');
	}
	return context;
}
