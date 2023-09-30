import Nav from '../components/Nav';

export default function Homepage() {
  return <>
    <Nav />
    <div className="m-24">
      <h1 className="text-white">Hi I'm Raymond, welcome to my website! I'm interested in all things web development and programming related.</h1>
    </div>
  </>
}

export const metadata = {
  title: 'Homepage',
  descripton: 'This is the homepage.'
}