export default function Nav() {
  return (
    <div className="flex mt-12 gap-4 text-xl tracking-wide font-semibold justify-center md:justify-start md:ml-24">
      <a className="opacity-50 hover:opacity-100" href="/">HOME</a>
      <a className="opacity-50 hover:opacity-100" href="/projects">PROJECTS</a>
      {/* <Nav url="/blog">Blog</Nav> */}
    </div>

    // <a href={url} className="text-2xl">
    //   {children}
    // </a>
  );
}
