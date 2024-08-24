export default function ProjectCard(props) {
    return (
        <a
            href={props.href}
            target="_blank"
            className="text-center flex flex-col flex-1 p-4 hover:bg-white/5 hover:scale-105 transition duration-500 ease-in-out rounded-md"
        >
            <img className="rounded-lg lg:object-cover lg:max-h-48" src={props.preview} />
            <h2 className="font-bold text-3xl">{props.name}</h2>
            <div>{props.description}</div>
            <div className="flex">
                {props.tools ? (
                    <div className="bg-white text-black font-bold p-1 rounded tracking-widest">{props.tools}</div>
                ) : null}
            </div>
        </a>
    );
}
