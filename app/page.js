import Nav from '../components/Nav';

export default function Homepage() {
  return <>
    <Nav />
    <div className="m-12 md:m-24 md:mr-96">
      <p className="text-white text-lg">Hi I'm Raymond, welcome to my website! I'm a 4th year Combined Major in Science student studying at UBC interested
        in pursuing a career in web development. I am passionate about learning how things work behind the scenes and writing code that has a meaningful impact
        on people's lives. 
        </p>
        <br/>
        <p className="text-white text-lg">
          Some of my hobbies include developing video games, cooking and exploring some of the great hiking spots British Columbia has to offer.
        </p>
        <br/>
        <p className="text-white text-lg">
          Have a cool project idea, or just want to say hello? I'm always open to connect!
        </p>
    </div>
  </>
}

export const metadata = {
  title: 'Homepage',
  descripton: 'This is the homepage.'
}