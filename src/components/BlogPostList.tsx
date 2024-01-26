import Link from "next/link";
import {Categories} from "./Categories";

type AllPost = {
	title: string;
	slug: {
		current: string;
	};
	categories?: {
		title: string;
		_id: string;
	}[];
};

export const BlogPostList = ({posts}: {posts: AllPost[]}) => (
	<ul className="space-y-4">
		{posts.map((post) => (
			<li
				key={post.slug.current}
				className="border-b border-blue-200 last:border-b-0 pb-4">
				<Link
					href={`/blog/${post.slug.current}`}
					className="text-xl font-semibold text-blue-700 hover:underline">
					{post.title}
				</Link>
				{post.categories && <Categories categories={post.categories} />}
			</li>
		))}
	</ul>
);
