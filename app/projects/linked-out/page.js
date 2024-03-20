import Nav from '../../../components/Nav';

export default function Page() {
    return (<>
        <Nav />
        <div className="m-12 md:m-24">
            <div className="">
                <h1 className="text-5xl font-bold text-center md:text-left">LinkedOut</h1>
                <div className="flex justify-center gap-4 mt-4 md:justify-start">
                    <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">REACT</div>
                    <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">MONGODB</div>
                    <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">TAILWINDCSS</div>
                </div>
            </div>
            <div className="my-16 flex flex-col md:grid grid-cols-4 gap-12">
                <div className="flex flex-col gap-4 col-span-2">
                    <h1 className="text-4xl font-semibold">Description</h1>
                    <p className="text-lg">
                        A bare-bones social media website created using React to render the front-end view and an Express server connected to a MongoDB instance to handle read/writes to the database.
                    </p>
                </div>
                <div className="flex flex-col gap-1 col-start-3">
                    <h1 className="text-3xl font-semibold">Link</h1>
                    <a className="text-green hover:text-darkgreen font-bold text-xl" href="https://github.com/RaymoZou/linked-out" target="_blank">Github</a>
                    <a className="text-green hover:text-darkgreen font-bold text-xl" href="https://raymozou.github.io/linked-out/" target="_blank">Live Preview</a>
                </div>
                <div className="flex flex-col col-span-2 ">
                    <img src="/linked-out1.png" />
                </div>
                <div className="flex flex-col col-span-2 row-start-3 ">
                    <img src="/linked-out2.png" />
                </div>
            </div>
        </div>

    </>)
}

export const metadata = {
    title: 'LinkedOut',
}
