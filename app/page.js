import Nav from '../components/Nav';

export default function Homepage() {
    return <>
        <Nav />
        {/* intro */}
        <div className="my-12 mx-12 md:mx-48 xl:mx-96">
            <p className="text-white font-bold text-4xl my-12">
                raymond
            </p>
            <div className="flex justify-center">
                <img src="profile_picture.jpg" className="rounded-full lg:h-96 lg:w-96 h-72 w-72 object-cover" />
            </div>
            <br />
            <p className="text-white text-lg">I'm a UBC grad in the Combined Major in Science program with a focus
                in Computer Science, Life Science and Earth & Environemntal Science. I am
                a highly passionate fullstack web developer who enjoys transforming ideas into solutions for the ongoing challenges
                presented by the digital world. My current interest is in graphics programming with graphics APIs such OpenGL.
            </p>
            <br />
            <p className="text-white text-lg">
                In my spare time I like to make video games, run around the city, or spend hours trying to exit the Vim editor.
            </p>
            <br />
            <p className="text-white text-lg">
                Have a cool idea, or just want to say hello? You can reach me at
                <a href="mailto:raymond.zf.zou@gmail.com" className="text-green hover:text-darkgreen"> raymond.zf.zou@gmail.com </a>
                or 778-988-9076. You can also check out my resume <a href="/Raymond_Zou_Resume.pdf" className="text-green hover:text-darkgreen">here.</a>
            </p>
            <hr className="w-1/2 mx-auto border-t-4 my-12" />
            {/* projects */}

        </div>
    </>
}

export const metadata = {
    title: 'Raymond Zou',
    description: `Welcome to Raymond Zou's personal website. Come check out some of the cool stuff I'm working on!`
}
