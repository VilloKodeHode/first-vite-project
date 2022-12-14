export function MySkillsImage(props) {
  const { src, alt } = props;
  return (
    <figure className="img_wrap">
      <img src={src} alt={alt} />
    </figure>
  );
}

export function MySkillsImageLinked(props) {
  const { src, alt, href } = props;
  return (
    <figure className="img_wrap hoverEffect">
      <a href={href} target="_blank">
        {" "}
        <img src={src} alt={alt} />{" "}
      </a>
    </figure>
  );
}

export default MySkillsImage;
