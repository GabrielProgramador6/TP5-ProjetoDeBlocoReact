import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import StreamPage from '../pages/StreamPage';
import Favorites from '../pages/Favorites';

export default function Index() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: 'stream/:id',
					element: <StreamPage />,
				},
				{
					path: 'favorites',
					element: <Favorites />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
