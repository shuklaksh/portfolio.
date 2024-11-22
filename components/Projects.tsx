import React from "react";

const projects = [
	{
		title: "Whispr",
		stack: "Next JS | NodeJS | ExpressJS | GraphQL | OAuth 2.0",
		description:
			"A full stack microblogging web app to share your thoughts with your friends around the world",
		githubLink: "https://github.com/shuklaksh/Whispr",
		vercelLink:
			"https://whispr-frontend-lake.vercel.app/",
	},
	{
		title: "Github Finder",
		stack: "React JS | Tailwind CSS ",
		description:
			"A web app to let user find any public profile on github and their profile statistics and public repositories.",
		githubLink: "https://github.com/shuklaksh/Github-Finder",
		vercelLink:
			"https://github-finder-shuklaksh.netlify.app/",
	},
	{
		title: "Fast Fingers",
		stack: "React JS | Material UI",
		description:
			"A fun typing game where you can test your typing skills against time.",
		githubLink: "https://github.com/shuklaksh/Fast-Fingers",
		vercelLink: "https://fastfingers-shuklaksh.netlify.app//",
	},
	{
		title: "Bloggy",
		stack: "ReactJS | Redux | Firebase | MUI",
		description:
			"Blog your thoughts",
		githubLink: "https://github.com/shuklaksh/Bloggy",
		vercelLink: "https://bloggy-lakshay.vercel.app/",
	},

	{
		title: "Flow Builder",
		stack: "ReactJS | Tailwind CSS | React Flow",
		description:
			"Design your dream project better with flow builder. ",
		githubLink: "https://github.com/shuklaksh/ChatBot-Flow-BuilderD",
		vercelLink: "https://chat-bot-flow-builder-867q.vercel.app//",
	},
	{
		title: "Drum Kit",
		stack: "HTML | CSS",
		description:
			"A fun pocket friendly drum kit for rockstars 😉",
		githubLink: "https://github.com/shuklaksh/drum-kit",
		vercelLink: "https://shuklaksh.github.io/drum-kit/",
	},

];

const Project: React.FC = () => {
	return (
		<div className='min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center'>
			<h1 className='text-white text-4xl lg:text-5xl font-bold  mt-12 '>
				Projects
			</h1>
			<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 bg-slate-950 w-full min-h-screen '>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						stack={project.stack}
						description={project.description}
						githubLink={project.githubLink}
						vercelLink={project.vercelLink}
					/>
				))}
			</div>
		</div>
	);
};

const ProjectCard: React.FC<{
	title: string;
	stack: string;
	description: string;
	githubLink: string;
	vercelLink: string;
}> = ({ title, stack, description, githubLink, vercelLink }) => {
	return (
		<div className='bg-slate-950 rounded-xl  p-4 glow-border flex flex-col justify-center'>
			<h3 className='tracking-wider text-white text-3xl font-bold mb-2'>
				{title}
			</h3>
			<p className='tracking-wider text-white text-sm font-bold mb-2 uppercase'>
				{stack}
			</p>
			<p className='tracking-wider text-gray-300 pr-6 font-light'>
				{description}
			</p>
			<div className='mt-4 flex space-x-4'>
				<a
					href={githubLink}
					target='_blank'
					rel='noopener noreferrer'
					className=' tracking-wider bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600'>
					GitHub
				</a>
				<a
					href={vercelLink}
					target='_blank'
					rel='noopener noreferrer'
					className='tracking-wider border-purple-800 border-2  text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600 hover:border-purple-800'>
					Website
				</a>
			</div>
		</div>
	);
};

export default Project;
