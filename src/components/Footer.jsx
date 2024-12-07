import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="bg-transparent common_padding flex flex-wrap justify-between gap-4">
			<div className="flex flex-wrap gap-6 text-white sm:text-sm text-xs">
				<Youtube width={24} height={24} color="white" />
				<Twitter width={24} height={24} color="white" />
				<Facebook width={24} height={24} color="white" />
				<Instagram width={24} height={24} color="white" />
				<Linkedin width={24} height={24} color="white" />
			</div>

			<nav className="flex flex-wrap sm:gap-6 gap-2 md:gap-4 text-white sm:text-sm">
				<a href="">Políticas e privacidade</a>
				<a href="">Termos de uso</a>
				<a href="">Gerenciar cookies</a>
				<a href="">Informações</a>
				<a href="">Ajuda</a>
			</nav>
		</footer>
	);
}
