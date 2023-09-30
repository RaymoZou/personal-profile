export default function Nav() {
    return (
      <div className="flex gap-4 ml-24 mt-16 text-xl tracking-wide font-semibold">
        <a className="opacity-50 hover:opacity-100" href="/">HOME</a>
        <a className="opacity-50 hover:opacity-100" href="/projects">PROJECTS</a>
        {/* <Nav url="/blog">Blog</Nav> */}
      </div>
  
      // <a href={url} className="text-2xl">
      //   {children}
      // </a>
    );
  }
  