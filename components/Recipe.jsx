import ReactMarkdown from 'react-markdown';

export default function Recipe(props) {
  return (
    <>
      {props.recipe && (
        <>
            <h2>Our Chef Recommends:</h2>
          <ReactMarkdown className="recipe-container">{props.recipe}</ReactMarkdown>
        </>
      )}
    </>
  );
}
