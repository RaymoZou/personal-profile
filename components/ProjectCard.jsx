import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <Link
      href={props.href}
      className="flex-col p-6 max-w-md hover:bg-teal-600/25 transition duration-100 ease-in-out rounded-md"
    >
      <h1 className="text-3xl">{props.name}</h1>
      <hr className="w-1/2 my-2"></hr>
      <div>{props.description}</div>
    </Link>
  );
}
