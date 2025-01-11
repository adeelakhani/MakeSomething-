export default function Recipe(props) {
  return (
    <>
      {props.recipe && (
        <>
          {props.recipe}
        </>
      )}
    </>
  );
}
