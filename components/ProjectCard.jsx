import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <Link
      href={props.href}
      className="flex-col p-6 w-96 min-h-36 hover:bg-white/5 transition duration-100 ease-in-out rounded-md"
    >
      <h1 className="text-3xl whitespace-nowrap">{props.name}</h1>
      <hr className="my-2"></hr>
      <div>{props.description}</div>
    </Link>
  );
}
