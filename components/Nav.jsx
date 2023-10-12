export default function Nav() {
  return (
    <div className="flex mt-12 gap-8 text-xl tracking-wide font-semibold justify-center md:justify-end md:mr-48">
      <a className="opacity-100 hover:opacity-50" href="/">
        HOME
      </a>
      <a className="opacity-100 hover:opacity-50" href="/projects">
        PROJECTS
      </a>
      {/* <Nav url="/blog">Blog</Nav> */}
    </div>

    // <a href={url} className="text-2xl">
    //   {children}
    // </a>
  );
}
