import Nav from '../../../components/Nav';

export default function Page() {
    return (<>

        {/* <div className="bg-[url('/linked-out.png')] w-full h-48 md:h-96 flex flex-col justify-between">
            <Nav />
            <div className="w-full h-2/3 bg-gradient-to-t from-black"></div>
        </div> */}
        <Nav />

        <div className="m-12 md:m-24">
            <div className="">
                <h1 className="text-5xl font-bold text-center md:text-left">Linked Out</h1>
                <div className="flex justify-center gap-4 mt-4 md:justify-start">
                    <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">REACT</div>
                    <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">FIREBASE</div>
                    <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">CSS</div>
                </div>
            </div>
            <div className="my-16 flex flex-col md:grid grid-cols-4 gap-12">
                <div className="flex flex-col gap-4 col-span-2">
                    <h1 className="text-4xl font-semibold">Description</h1>
                    <p className="text-lg">
                        A clone of another popular social media website created using React for rendering the frontend and Firebase to store user data.
                        Users are able to create and view other posts which are stored in a Firebase instance.
                    </p>
                </div>
                <div className="flex flex-col gap-1 col-start-3">
                    <h1 className="text-3xl font-semibold">Link</h1>
                    <a className="text-green hover:text-darkgreen font-bold text-xl" href="https://github.com/RaymoZou/linked-out" target="_blank">Github</a>
                    <a className="text-green hover:text-darkgreen font-bold text-xl" href="https://linkedout-31478.firebaseapp.com/" target="_blank">Live Preview</a>
                </div>
                <div className="flex flex-col md:col-span-2 gap-4">
                    <img src="/linked-out.png" />
                </div>
            </div>
        </div>

    </>)
}

export const metadata = {
    title: 'LinkedOut',
  }