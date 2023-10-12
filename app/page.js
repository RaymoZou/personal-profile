import Nav from '../components/Nav';

export default function Homepage() {
  return <>
    <Nav />
    <div className="m-12 md:m-24 md:mx-48 md:w-1/2">
      <p className="text-white text-lg">Hi I'm Raymond! I'm a 4th year student studying at the University of British Columbia,
        currently completing a Combined Major in Science in Computer Science, Life Science and Earth & Environemntal Science. I am
        a highly passionate fullstack web developer who enjoys transforming ideas into solutions for the ongoing challenges
        presented by the digital world.
      </p>
      <br />
      <p className="text-white text-lg">
        Some of my hobbies include developing video games, cooking and exploring some of the great hiking spots British Columbia has to offer.
      </p>
      <br />
      <p className="text-white text-lg">
        Have a cool project idea, or just want to say hello? I'm always open to connect! You can reach me at
        <a href="mailto:raymond.zf.zou@gmail.com" className="text-green hover:text-darkgreen"> raymond.zf.zou@gmail.com </a>
        or 778-988-9076.
      </p>
    </div>
  </>
}

export const metadata = {
  title: 'Homepage',
  descripton: 'This is the homepage.'
}