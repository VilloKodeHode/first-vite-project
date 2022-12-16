export function KnowledgeIcon(props) {
  const { src, alt } = props;
  return (
    <figure className="img_wrap">
      <img src={src} alt={alt} />
    </figure>
  );
}

// add <div className="knowledge_wrapper">
export function KnowledgeIconLinked(props) {
  const { src, alt, href } = props;
  return (
    <figure className="img_wrap hoverEffect border">
      <a href={href} target="_blank">
        <img src={src} alt={alt} />
      </a>
    </figure>
  );
}

export function MySkills(props) {
  const { title, src, description } = props;
  return (
    <figure>
      <h3>{title}</h3>
      <img src={src} />
      <p>{description}</p>
    </figure>
  );
}

export default KnowledgeIcon;
