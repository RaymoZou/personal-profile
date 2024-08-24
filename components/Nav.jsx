export default function Nav() {
  return (
    <div className="flex mt-12 gap-8 text-xl tracking-wide font-semibold justify-center lg:justify-end lg:mr-48">
      <a className="hover:opacity-50 font-bold text-4xl duration-300" href="/">home</a>
      <a className="hover:opacity-50 font-bold text-4xl duration-300" href="#projects">projects</a>
    </div>
  );
}
