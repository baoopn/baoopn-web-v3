import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/blog.css';
import Pagination from './utils/Pagination';
import { Link } from '@tanstack/react-router';

interface BlogPage {
	title: string;
	slug: string;
	no: number;
}

interface BlogMetadata {
	name: string;
	slug: string;
	author: string;
	date: string;
	total: number;
	pages: BlogPage[];
}

interface BlogProps {
	name: string;
	page: number;
	className?: string;
}

const Blog: React.FC<BlogProps> = ({ name, page = 1, className = '' }) => {
	const [content, setContent] = useState<string>('');
	const [metadata, setMetadata] = useState<BlogMetadata | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchMetadata = async () => {
			try {
				const response = await import(`../blog/${name}/metadata.json`);
				setMetadata(response.default);
			} catch (error) {
				console.error('Error loading metadata:', error);
			}
		};

		fetchMetadata();
	}, [name]);

	useEffect(() => {
		const fetchMarkdown = async () => {
			setLoading(true);
			try {
				const response = await import(`../blog/${name}/page-${page}.md`);
				const markdown = await fetch(response.default).then((res) => res.text());
				setContent(markdown);
			} catch (error) {
				setContent('Post or page not found');
			} finally {
				setLoading(false);
			}
		};

		fetchMarkdown();
	}, [name, page]);

	return (
		<section className={`markdown-body ${className}`}>
			<div className='max-w-4xl m-auto flex items-left flex-col px-4 text-left md:text-justify'>
				{loading ? (
					<div className="flex justify-center py-12">
						<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-pink)]"></div>
					</div>
				) : (
					<>
						{metadata?.name && (
							<div className="mb-6 border-b border-[var(--text-color-lighter)] pb-4">
								<h1 className="text-3xl font-bold">{metadata.name}</h1>
								<div className="flex justify-between text-sm text-[var(--text-color-lighter)] mt-2">
									<span>By {metadata.author}</span>
									<span>{new Date(metadata.date).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}</span>
								</div>
							</div>
						)}

						{/* Table of Contents */}
						{metadata?.pages && metadata.pages.length > 1 && (
							<div className="mb-8 p-4 bg-[var(--background-lighter)] rounded-lg shadow-sm">
								<h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
								<ol className="list-decimal list-inside space-y-2">
									{metadata.pages.map((blogPage) => (
										<li key={blogPage.no} className="ml-2">
											<Link
												// @ts-ignore
												to={`/blog/${name}/${blogPage.no}`}
												className={`hover:text-[var(--primary-pink)] transition-colors ${page === blogPage.no ? 'text-[var(--primary-pink)] font-medium' : ''
													}`}
											>
												{blogPage.title}
												{page === blogPage.no && (
													<span className="ml-2 text-xs bg-[var(--primary-pink)] text-white px-2 py-0.5 rounded-full">
														Current
													</span>
												)}
											</Link>
										</li>
									))}
								</ol>
							</div>
						)}

						<ReactMarkdown
							components={{
								code({ node, className, children, ...props }) {
									const match = /language-(\w+)/.exec(className || '');
									return match ? (
										<SyntaxHighlighter
											// @ts-ignore
											style={materialDark}
											language={match[1]}
											PreTag="div"
											{...props}
										>
											{String(children).replace(/\n$/, '')}
										</SyntaxHighlighter>
									) : (
										<code className={className} {...props}>
											{children}
										</code>
									);
								},
							}}
						>
							{content}
						</ReactMarkdown>

						{/* Current page indicator */}
						{metadata?.pages && (
							<div className="my-8 text-center text-[var(--text-color-lighter)]">
								{metadata.pages.find(p => p.no === page)?.title || `Page ${page}`}
							</div>
						)}

						{/* Pagination */}
						{metadata && metadata.total > 1 && (
							<Pagination
								currentPage={page}
								totalPages={metadata.total}
								basePath={`/blog/${name}`}
								className="mt-8 mb-12"
							/>
						)}
					</>
				)}
			</div>
		</section>
	);
};

export default Blog;