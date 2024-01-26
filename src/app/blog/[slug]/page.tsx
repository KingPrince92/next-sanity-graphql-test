import Link from "next/link";
import Image from "next/image";
import {notFound} from "next/navigation";
import {PortableText} from "@portabletext/react";
import {client} from "../../../../sanity/lib/client";
import {Categories} from "@/components/Categories";
import {GET_BLOG_BY_SLUG} from "@/queries";

const Blog = async ({params}: {params: {slug: string}}) => {
	if (!params.slug) return notFound();
	const {data} = await client({
		query: GET_BLOG_BY_SLUG,
		variables: {
			slug: params.slug,
		},
	});
	const blog = data.allPost[0];
	const heroImage = blog?.mainImage?.asset;
	const categories = blog?.categories;
	const author = blog?.author;
	const updatedAt = new Date(blog?.updatedAt).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const publishedAt = new Date(blog?.publishedAt).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<div className="bg-gray-100">
			<div className="container mx-auto p-4">
				<h1 className="text-4xl font-bold text-gray-800 bg-white p-4 mb-4">
					{blog.title}
				</h1>
				<Image
					src={heroImage.url}
					width={heroImage.metadata.dimensions.width}
					height={heroImage.metadata.dimensions.height}
					alt={heroImage.altText || ""}
					className="w-full h-auto"
				/>
				<div className="flex justify-between text-sm text-gray-600 bg-white p-2">
					<p>Latest Update: {updatedAt}</p>
					<p>Published At: {publishedAt}</p>
				</div>
				<div className="flex justify-between bg-white p-4">
					<Categories categories={categories} />

					<div className="flex items-center">
						<Link
							href={`/author/${author.slug.current}`}
							className="flex items-center">
							<Image
								src={author.image.asset.url}
								alt={author.image.asset.altText}
								className="w-8 h-8 rounded-full mr-2"
								width={author.image.asset.metadata.dimensions.width}
								height={author.image.asset.metadata.dimensions.height}
							/>
							<p className="text-blue-500 hover:underline">{author.name}</p>
						</Link>
					</div>
				</div>
				<div className="prose p-4 bg-white">
					<PortableText
						value={blog.bodyRaw}
						components={{
							list: ({children}) => <ul className="list-disc">{children}</ul>,
							listItem: ({children}) => <li className="ml-4">{children}</li>,
						}}
					/>
				</div>
				<div className="text-center mt-8">
					<Link href="/" className="text-blue-500 hover:underline">
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Blog;
