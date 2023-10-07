import Nav from '../../components/Nav';
import ProjectCard from '../../components/ProjectCard';

export default function Page() {
    return (
        <>
            <Nav />
            <div className="m-12">
                <h1 className="text-white text-4xl text-center">Projects</h1>
                <div className="flex flex-col items-center md:flex-row gap-4 mt-8">
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
                    {/* <ProjectCard
                        href="/projects/rubiks-search"
                        name="Rubik's Search"
                        description="A sub-optimal Rubik's Cube solver that implements Thistlethwaite's algorithm."
                    /> */}
                </div>
            </div>
        </>
    )
}