import Nav from '../../components/Nav';

export default function Page() {
    return (
        <>
            <Nav />
            <div className="m-24">
                <h1 className="text-white">Here are some of the projects I have worked on.</h1>
                <a className="text-teal-600 font-semibold" href="/projects/project-b">Project B</a>
            </div>
        </>
    )
}