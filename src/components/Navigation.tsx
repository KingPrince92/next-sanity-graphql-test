import Link from "next/link";

export const Navigation = () => {
	return (
		<nav className="bg-blue-500 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link className="text-white text-2xl font-bold" href="/">
					My Logo
				</Link>
			</div>
		</nav>
	);
};
