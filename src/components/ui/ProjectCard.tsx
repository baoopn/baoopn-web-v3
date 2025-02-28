import { motion } from 'framer-motion';
import { Reveal } from '../utils/Reveal';
import { Link } from '@tanstack/react-router';

interface ProjectCardProps {
	title: string;
	period: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	technologies?: string[];
	demoLink?: string;
	githubLink?: string;
	blogPage?: BlogPage; 
}

interface BlogPage {
	slug: string;
	page: number;
}


const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	period,
	description,
	imageSrc,
	imageAlt,
	technologies = [],
	demoLink,
	githubLink,
	blogPage, 
}) => {
	return (
		<Reveal width="100%">
			<div className="overflow-hidden rounded-xl shadow-lg bg-[var(--background-lighter)] hover:shadow-xl transition-shadow duration-300 mb-8 flex flex-col md:flex-row">
				{/* Image container with 16:9 aspect ratio */}
				<div className="relative w-full md:w-2/5 pb-[56.25%] md:pb-0 md:h-auto">
					<img
						src={imageSrc}
						alt={imageAlt}
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</div>

				<div className="p-6 flex-1 flex flex-col justify-between">
					<div>
						<h3 className="text-2xl font-bold text-[var(--text-color)] mb-1">{title}</h3>
						<span className="text-sm text-[var(--text-color-lighter)] block mb-3">{period}</span>

						<p className="text-[var(--text-color)] mb-4">{description}</p>

						{technologies.length > 0 && (
							<div className="mb-4">
								<div className="flex flex-wrap gap-2">
									{technologies.map((tech, index) => (
										<span
											key={index}
											className="px-2 py-1 text-xs rounded-full bg-[var(--primary-pink-transparent)] text-[var(--text-color)]"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						)}
					</div>

					<div className="flex flex-wrap gap-3 mt-4">
						{demoLink && (
							<a
								href={demoLink}
								target="_blank"
								rel="noopener noreferrer"
								className="px-4 py-2 rounded-md bg-[var(--primary-pink)] text-white text-sm hover:bg-[var(--dark-pink)] transition-colors"
							>
								Live Demo
							</a>
						)}
						{githubLink && (
							<a
								href={githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="px-4 py-2 rounded-md border border-[var(--text-color-lighter)] text-[var(--text-color)] text-sm hover:bg-[var(--background)] transition-colors"
							>
								View Code
							</a>
						)}
						{blogPage && (
							<Link
								to='/blog/$name/$page'
								params={{ name: blogPage.slug, page: String(blogPage.page) }}
								rel="noopener noreferrer"
								className="px-4 py-2 rounded-md bg-[var(--dark-blue)] text-white text-sm hover:bg-[var(--darker-blue)] transition-colors"
							>
								Read Blog
							</Link>
						)}
					</div>
				</div>
			</div>
		</Reveal>
	);
};

export default ProjectCard;