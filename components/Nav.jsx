export default function Nav(props) {

  const {url, children} = props;

  return (
    <a href={url} className="text-2xl m-3">
      {children}
    </a>
  );
}
