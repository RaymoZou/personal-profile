import Nav from '../components/Nav';

export default function Homepage() {
    return <>
        <Nav />
        <div className="m-12 md:mx-48 md:w-1/2">
            <div className="flex justify-center md:justify-start">
                <img src="raymond-profile.jfif" className="rounded-full h-48" />
            </div>
            <br />
            <p className="text-white text-lg">Hi I'm Raymond! I'm a UBC graduate in the Combined Major in Science program with a focus
                in Computer Science, Life Science and Earth & Environemntal Science. I am
                a highly passionate fullstack web developer who enjoys transforming ideas into solutions for the ongoing challenges
                presented by the digital world. My current interest is in graphics programming with graphics APIs such OpenGL.
            </p>
            <br />
            <p className="text-white text-lg">
                Some of my hobbies include developing video games, cooking and exploring some of the great hiking spots British Columbia has to offer.
            </p>
            <br />
            <p className="text-white text-lg">
                Have a cool project idea, or just want to say hello? I'm always open to connect! You can reach me at
                <a href="mailto:raymond.zf.zou@gmail.com" className="text-green hover:text-darkgreen"> raymond.zf.zou@gmail.com </a>
                or 778-988-9076. My resume can also be found <a href="/Raymond_Zou_Resume.pdf" className="text-green hover:text-darkgreen">here.</a>
            </p>
        </div>
    </>
}

export const metadata = {
    title: 'Raymond Zou - Web Developer Portfolio',
    description: `Welcome to Raymond Zou's personal website. Explore some of my recent projects and learn more about the path
  I'm taking to become a web developer.`
}
