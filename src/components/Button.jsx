export default function Button({ children }) {
	return (
		<button className="text-lg text-stone-100 font-medium bg-stone-900 px-6 py-2 rounded-md">
			{children}
		</button>
	);
}
