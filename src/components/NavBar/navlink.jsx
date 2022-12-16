function Navlink(props) {
  const { href, name, src } = props;
  return (
    <a href={href}>
      <li>
        <p>{name}</p>
        <img src={src} />
      </li>
    </a>
  );
}

export default Navlink;
