export interface ProjectLink {
	label: string;
	href: string;
	external?: boolean;
}

export interface Project {
	id: string | number;
	title: string;
	description: string;
	image?: string; // URL or local path
	tags?: string[];
	links?: ProjectLink[];
}

type ProjectCardProps = {
	project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<article className="group relative rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-shadow">
			{project.image ? (
				<div className="h-44 sm:h-56 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
					<img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
				</div>
			) : (
				<div className="h-44 sm:h-56 w-full bg-gradient-to-br from-emerald-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
					<span className="text-slate-500 dark:text-slate-400">No image</span>
				</div>
			)}

			<div className="p-4 sm:p-6">
				<h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
				<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>

				{project.tags && project.tags.length > 0 && (
					<div className="mt-3 flex flex-wrap gap-2">
						{project.tags.map((t) => (
							<span key={t} className="inline-flex items-center px-2 py-1 text-xs font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
								{t}
							</span>
						))}
					</div>
				)}

				{project.links && project.links.length > 0 && (
					<div className="mt-4 flex items-center gap-3">
						{project.links.map((l) => (
							<a
								key={l.href}
								href={l.href}
								target={l.external ? "_blank" : undefined}
								rel={l.external ? "noreferrer" : undefined}
								className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
							>
								{l.label}
							</a>
						))}
					</div>
				)}
			</div>
		</article>
	);
}

export default ProjectCard;
