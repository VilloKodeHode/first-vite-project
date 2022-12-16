function Project(props) {
  const { href, projectName, src, description, hrefCode } = props;
  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <a href={href} target="_blank">
          <figure className="img_wrap">
            <h3>{projectName}</h3>
            <img src={src} />
            <p>{description}</p>
          </figure>
        </a>
      </div>
      <a href={hrefCode} target="_blank">
        <p className="description">(Kode)</p>
      </a>
    </div>
  );
}

export default Project;
