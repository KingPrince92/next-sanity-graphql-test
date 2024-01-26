import Link from "next/link";
import {BlogPostList} from "@/components/BlogPostList";
import {IntroSection} from "@/components/IntroSection";
import {FETCH_ALL_BLOB_POSTS} from "@/queries";
import {client} from "../../sanity/lib/client";

export const metadata = {
	title: "Home page",
	description: "Blog post website",
};

const HeroSection = () => (
	<IntroSection title="Building a Sanity Studio with Next.js">
		<p className="mt-4 text-lg">
			A Step-by-Step Guide to Seamlessly Integrate Content Management and Web
			Development
		</p>
		<p className="mt-8 text-xl">
			Whether you&lsquo;re a developer looking for efficient content management
			or a content creator seeking a user-friendly platform, this guide will
			equip you to elevate your web development projects with structured content
			management and dynamic web applications.
		</p>
		<Link
			href="#start"
			className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
			Get Started
		</Link>
	</IntroSection>
);

export default async function Home() {
	const {data} = await client({query: FETCH_ALL_BLOB_POSTS});
	const allPosts = data.allPost;

	return (
		<>
			<HeroSection />
			<div className="bg-blue-100 p-4 rounded-lg shadow-md">
				<h2 className="text-3xl font-bold text-blue-800 mb-4">
					The Recent Blog Posts
				</h2>
				<BlogPostList posts={allPosts} />
			</div>
		</>
	);
}
