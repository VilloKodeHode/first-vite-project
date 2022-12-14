function Card(props) {
  const { title, text } = props;
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default Card;
