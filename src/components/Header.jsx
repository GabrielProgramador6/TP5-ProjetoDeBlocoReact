import { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import { BookHeart, Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	function handleIsOpenMenu() {
		setIsOpenMenu(!isOpenMenu);
	}

	useEffect(() => {
		window.addEventListener('resize', function () {
			if (window.innerWidth > 640) setIsOpenMenu(false);
			else setIsOpenMenu(isOpenMenu);
		});

		window.addEventListener('scroll', function () {
			setIsOpenMenu(false);
		});
	}, []);

	return (
		<header className="relative w-full h-20 flex items-center justify-between gap-4 common_padding border-blue-500 shadow-md">
			<div className="w-16 h-16">
				<img
					src={Logo}
					alt=""
					className="w-full h-full object-cover fill-white"
				/>
			</div>

			{isOpenMenu ? (
				<nav
					className="sm:hidden absolute top-full right-0 left-0 z-50 w-full flex flex-col gap-6 text-white text-lg bg-transparent backdrop-blur-lg pl-12 pt-20"
					style={{ height: `calc(100dvh - 80px)` }}>
					<Link to="/">Home</Link>
					<Link to="/">Films</Link>
					<Link to="/">Series</Link>
					<Link to="/">Documentary</Link>
				</nav>
			) : (
				<nav className="hidden sm:flex items-center justify-between gap-6 text-white text-lg">
					<Link to="/">Home</Link>
					<Link to="/">Films</Link>
					<Link to="/">Series</Link>
					<Link to="/">Documentary</Link>
				</nav>
			)}

			<div className="flex items-center gap-4">
				<Menu
					onClick={handleIsOpenMenu}
					className="cursor-pointer sm:hidden block"
					color="white"
				/>
				<Search className="cursor-pointer" color="white" />
				<Link to="/favorites">
					<BookHeart className="cursor-pointer" color="white" />
				</Link>
			</div>
		</header>
	);
}
