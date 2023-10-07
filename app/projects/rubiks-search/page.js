import Nav from '../../../components/Nav';

export default function Page() {
    return (<>





        <div className="w-full h-96 flex flex-col justify-between">
            <Nav />
            <div className="w-full h-2/3 bg-gradient-to-t from-black"></div>
        </div>

        <div className="m-12 md:m-24 min-h-screen">
            <div className="">
                <h1 className="text-5xl font-bold text-center md:text-left">Rubik's Search</h1>
                <div className="flex justify-center gap-4 mt-4 md:justify-start">
                    <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">JAVA</div>
                </div>
            </div>
            <div className="my-16 flex flex-col md:grid grid-cols-4 gap-8">
                <div className="flex flex-col gap-4 col-span-2">
                    <h1 className="text-4xl font-semibold text-center md:text-left">Description</h1>
                    <p className="text-lg">
                        This is a Rubik's Cube Solver that implements Thistletwaite's Algorithm using a series of iterative depth-first searches to solve sequential subgroups.
                        Cube states are represented as an array of chars and actions correspond to quarter and half turns of each face. See
                        <a href="https://ruwix.com/the-rubiks-cube/notation/" target="_blank" className="text-teal-600 font-semibold"> here </a>
                        for a guide in interpreting the Rubik's Cube turn notation. The project was written and compiled using java version 19.0.1.
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-1 col-start-4">
                    <h1 className="text-3xl font-semibold">Link</h1>
                    <a className="text-teal-600 font-bold text-xl" href="https://github.com/RaymoZou/rubiks-search" target="_blank">Github</a>
                </div>
            </div>
        </div>

    </>)
}