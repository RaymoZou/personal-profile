import Nav from '../../components/Nav';
import ProjectCard from '../../components/ProjectCard';

export default function Page() {
    return (
        <>
            <Nav />
            <div className="m-24">
                <h1 className="text-white text-lg">Here are some of the projects I have worked on.</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
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