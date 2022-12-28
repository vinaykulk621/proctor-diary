export function Card({
  styles = "flex bg-white w-auto h-full m-4 rounded-lg justify-center items-center text-3xl",
  content,
}) {
  return (
    <div className={styles}>
      <p>{content}</p>
    </div>
  );
}
