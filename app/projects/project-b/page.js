import Nav from '../../../components/Nav';

export default function Page() {
    return (<>

        {/* <div className="bg-[url('/project-b1.png')] w-full h-48 md:h-96 flex flex-col justify-between">
            <Nav />
            <div className="w-full h-2/3 bg-gradient-to-t from-black"></div>
        </div> */}
        <Nav/>

        <div className="m-12 md:m-24 min-h-screen">
            <div className="">
                <h1 className="text-5xl font-bold text-center md:text-left">Project B</h1>
                <div className="flex justify-center gap-4 mt-4 md:justify-start">
                    <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">UNITY</div>
                    <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">C#</div>
                </div>
            </div>
            <div className="my-16 flex flex-col md:grid grid-cols-4 gap-24">
                <div className="flex flex-col col-span-2 gap-4">
                    <h1 className="text-4xl font-semibold">Description</h1>
                    <p className="text-lg">
                        Project B is a prototype platformer I developed last summer using the Unity game engine. One of the difficulties I have had in the past with developing games
                        was choosing a manageable scope for the game. Thus, I chose to implement very simple mechanics for Project B and focus on the fundamentals of many platformers
                        such as character movement and establising a clear progression path with ramping difficulty to make the game enjoyable to play.
                    </p>
                </div>
                <div className="flex flex-col gap-1 col-start-3">
                    <h1 className="text-3xl font-semibold">Link</h1>
                    <a className="text-green hover:text-darkgreen font-bold text-xl" href="https://simmer.io/@raymozou/project-b" target="_blank">Demo</a>
                    <a className="text-green hover:text-darkgreen font-bold text-xl" href="https://github.com/raymozou/project-b" target="_blank">Github</a>
                </div>
                <div className="flex flex-col md:col-span-2 gap-4">
                    <img src="/project-b1.png" />
                </div>
                <div className="flex flex-col col-span-2 gap-4 col-start-1">
                    <h1 className="text-4xl font-semibold">Development</h1>
                    <p className="text-lg">
                        All of the pixel art assets were created using Aseprite - a popular image editor used for creating pixel art and animations. The development process consisted
                        of implementing different subgoals such as player movement and level progression that would ultimately make up the minimal viable product (MVP).
                    </p>
                </div>
            </div>
        </div>

    </>)
}