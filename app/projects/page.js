import Nav from '../../components/Nav';
import ProjectCard from '../../components/ProjectCard';

export default function Page() {
    return (
        <>
            <Nav />
            <div className="m-12 md:mx-48">
                <h1 className="text-5xl font-bold text-center">Projects</h1>
                <div className="flex flex-col items-center md:flex-row md:items-start mt-8">
                    <ProjectCard
                        href="/projects/project-b"
                        name="Project B"
                        description="A prototype platformer developed using Unity."
                    />
                    <ProjectCard
                        href="/projects/rubiks-search"
                        name="Rubik's Search"
                        description="A suboptimal Rubik's Cube solver that implements Thistlethwaite's algorithm."
                    />
                    <ProjectCard
                        href="/projects/linked-out"
                        name="LinkedOut"
                        description="A social media app that features writing and reading posts from other users."
                    />
                </div>
            </div>
        </>
    )
}

export const metadata = {
    title: 'Projects',
    descripton: 'Some of my previous projects I have worked on.'
}