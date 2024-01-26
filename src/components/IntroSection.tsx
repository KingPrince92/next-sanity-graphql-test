export const IntroSection = ({
	children,
	title,
}: {
	children?: React.ReactNode;
	title: string;
}) => (
	<div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-16 px-8">
		<div className="max-w-2xl mx-auto text-center">
			<h1 className="text-4xl font-bold">{title}</h1>
			{children}
		</div>
	</div>
);
