import Link from "next/link";

export const Categories = ({
	categories,
}: {
	categories: Array<{title: string; _id: string}>;
}) => (
	<div className="space-x-2 py-2">
		{categories &&
			categories.length > 0 &&
			categories.map((category: {title: string; _id: string}) => (
				<Link
					href={`/blog/category/${category._id}`}
					key={category._id}
					className="bg-blue-200 px-2 py-1 rounded-full text-blue-800">
					{category.title}
				</Link>
			))}
	</div>
);
