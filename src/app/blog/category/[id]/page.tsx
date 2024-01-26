import {IntroSection} from "@/components/IntroSection";
import {client} from "../../../../../sanity/lib/client";
import {BlogPostList} from "@/components/BlogPostList";
import {GET_BLOG_POST_BY_CATEGORY_ID} from "@/queries";

const CategoryPage = async ({params}: {params: {id: string}}) => {
	const {data} = await client({
		query: GET_BLOG_POST_BY_CATEGORY_ID,
		variables: {id: params.id},
	});
	const blogPost = data.allPost;
	const categoryTitle = data.allCategory[0]?.title;

	return (
		<>
			<IntroSection title={categoryTitle} />
			<div className="bg-blue-100 p-4 rounded-lg shadow-md">
				<BlogPostList posts={blogPost} />
			</div>
		</>
	);
};

export default CategoryPage;
