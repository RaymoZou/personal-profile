import Nav from '../components/Nav';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Homepage() {
    return <>
        <Nav />
        <div className="my-12 mx-12 lg:mx-48 xl:mx-96 font-mono">

            {/* intro */}
            <h1 className="h-24 text-center lg:text-start text-white font-bold text-2xl lg:text-6xl">
                hi, i'm <span className='text-green'>raymond.</span>
            </h1>
            <div className="flex justify-center">
                <img src="profile_picture.jpg" className="rounded-full lg:h-72 lg:w-72 h-48 w-48 object-cover" />
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
                <a href="mailto:raymond.1zou@gmail.com" className="text-green hover:text-darkgreen transition duration-300 font-bold"> raymond.1zou@gmail.com</a>
                . you can also check out my resume <a target="_blank" href="/raymond_zou_resume.pdf" className="text-green hover:text-darkgreen transition duration-300 font-bold">here.</a>
            </p>

            <hr className="w-1/2 mx-auto border-t-4 my-12" />

            {/* skills & tech */}
            <h1 id="skills" className="text-center lg:text-start text-green font-bold text-4xl my-12">skills & tech</h1>
            <div className='flex gap-4'>
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                <Image width={48} height={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" />
            </div>

            <hr className="w-1/2 mx-auto border-t-4 my-12" />

            {/* projects */}
            <h1 id="projects" className="text-center lg:text-start text-green font-bold text-4xl my-12">projects</h1>
            <div className="gap-8 flex flex-col lg:flex-row lg:items-start mt-8">
                <ProjectCard
                    href="https://www.tadaima.app"
                    name="Tadaima"
                    description="a rental listing website that allows renters to find their perfect home with natural language"
                    preview="tadaima.png"
                />
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
            </div>

            <hr className="w-1/2 mx-auto border-t-4 my-12" />

            {/* games */}
            <h1 id="games" className="text-green text-center lg:text-start font-bold text-4xl my-12">games</h1>
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
