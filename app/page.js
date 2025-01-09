import Nav from '../components/Nav';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

export default function Homepage() {
    return <>
        <Nav />
        <div className="my-12 mx-12 lg:mx-48 xl:mx-96 font-mono">

            {/* intro */}
            <h1 className="h-24 text-center lg:text-start text-white font-bold text-4xl lg:text-6xl">
                hi, i'm
                <span className="opacity-0 animate-programmer text-sky-500"> a programmer</span>
                <span className="opacity-0 animate-gamedev text-violet-500"> a game developer</span>
                <span className="opacity-0 animate-creator text-orange-500"> a creator</span>
                <span className="opacity-0 animate-raymond text-green"> raymond</span>
            </h1>
            <div className="flex justify-center">
                <img src="profile_picture.jpg" className="rounded-full lg:h-96 lg:w-96 h-72 w-72 object-cover" />
            </div>
            <br />
            <p className="text-white text-lg">i'm a ubc grad that studied computer science, life science and earth & environmental science in the combined major in science program. i am
                a highly passionate fullstack web developer who enjoys transforming ideas into solutions for the ongoing challenges
                presented by the digital world. my current interest is in graphics programming with graphics apis such as opengl.
            </p>
            <br />
            <p className="text-white text-lg">
                in my spare time I like making video games, preparing for my next marathon, or spending hours trying to exit the vim editor.
            </p>
            <br />
            <p className="text-white text-lg">
                have a cool idea, or just want to say hello? you can reach me at
                <a href="mailto:raymond.1zou@gmail.com" className="text-green hover:text-darkgreen transition duration-300 font-bold"> raymond.zf.zou@gmail.com</a>
                . you can also check out my resume <a target="_blank" href="/raymond_zou_resume.pdf" className="text-green hover:text-darkgreen transition duration-300 font-bold">here.</a>
            </p>

            <hr className="w-1/2 mx-auto border-t-4 my-12" />

            {/* projects */}
            <h1 id="projects" className="text-center lg:text-start text-sky-500 font-bold text-4xl my-12">projects</h1>
            <div className="gap-8 flex flex-col lg:flex-row lg:items-start mt-8">
                <ProjectCard
                    href="https://github.com/RaymoZou/linked-out"
                    name="linkedout"
                    description="a social media app that features writing and reading posts from other users"
                    preview="linked-out2.png"
                />
                <ProjectCard
                    href="https://tennisgoat100.com/"
                    name="Tennis Goat 100"
                    description="a website homepage home to the greatest tennis players of all time"
                    preview="tg100.png"
                />
                <ProjectCard
                    href="https://github.com/RaymoZou/rubiks-search"
                    name="rubik's search"
                    description="a suboptimal Rubik's Cube solver that implements Thistlethwaite's algorithm"
                    preview="rubiks-cube.jpg"
                />
            </div>

            <hr className="w-1/2 mx-auto border-t-4 my-12" />

            {/* games */}
            <h1 id="games" className="text-violet-500 text-center lg:text-start font-bold text-4xl my-12">games</h1>
            <div className="gap-8 flex flex-col lg:flex-row lg:items-start mt-8">
                <ProjectCard
                    href="https://r4ymo.itch.io/project-b"
                    name="project b"
                    description="2d pixel style platformer where you race against your friends for the best time"
                    preview="project-b1.png"
                />
                <ProjectCard
                    href="https://r4ymo.itch.io/terrained"
                    name="terrained"
                    description="sandbox puzzler created for GMTK Game Jam 2024"
                    preview="https://img.itch.zone/aW1nLzE3NDE4MDEzLnBuZw==/315x250%23c/b8pCHj.png"
                />
                <ProjectCard
                    href="https://r4ymo.itch.io/shadowfall"
                    name="shadowfall"
                    description="vampire survivors-esque game created for Pirate Software Game Jam 15"
                    preview="https://img.itch.zone/aW1nLzE3MTUyOTA2LnBuZw==/315x250%23c/vSVd2p.png"
                />
            </div>

            <Footer />


            {/* <iframe frameborder="0" src="https://itch.io/embed/2911893" width="552" height="167"><a href="https://r4ymo.itch.io/terrained">Terrained by Raymo, k3vo</a></iframe> */}

        </div>
    </>
}

export const metadata = {
    title: 'Raymond Zou',
    description: `Welcome to Raymond Zou's personal website. Come check out some of the cool stuff I'm working on!`
}
