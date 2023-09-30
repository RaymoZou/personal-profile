import Nav from '../../../components/Nav';

export default function Page() {
    return (<>

        <div className="bg-[url('/project-b1.png')] w-full h-96 flex flex-col justify-between">
            <Nav />
            <div className="w-full h-2/3 bg-gradient-to-t from-black"></div>
        </div>

        <div className="m-24 h-screen">
            <h1 className="text-5xl font-bold">Project B</h1>
            <div className="flex gap-4 mt-4">
                <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">UNITY</div>
                <div className="bg-white text-black font-bold text-xl px-3 py-1 rounded tracking-widest">C#</div>
            </div>
            <div className="my-16 grid grid-cols-4">
                <h1 className="text-3xl font-semibold col-span-3">Description</h1>
                <div className="row-span-2 flex flex-col gap-1">
                    <h1 className="text-3xl font-bold">Link</h1>
                    <a className="text-teal-600 font-semibold" href="https://simmer.io/@raymozou/project-b" target="_blank">Demo</a>
                    <a className="text-teal-600 font-semibold" href="https://github.com/RaymoZou/project-b" target="_blank">Github</a>
                </div>
                <p className="text-lg col-span-2">
                    Project B is a prototype platformer I developed last summer using the Unity game engine. One of the difficulties I have had in the past with developing games
                    was choosing a manageable scope for the game. Thus, I chose to implement very simple mechanics for Project B and focus on the fundamentals of many platformers
                    such as character movement and establising a clear progression path with ramping difficulty to make the game enjoyable to play.
                </p>
            </div>
            {/* <div>
                <h1 className="text-3xl font-semibold col-span-3">Media</h1>
                <img className="" src="/project-b1.png"/>
            </div> */}
        </div>

    </>)
}