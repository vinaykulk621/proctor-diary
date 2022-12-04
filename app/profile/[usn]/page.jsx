export default function Home({ params }) {
  return (
    <>
      <p className="p-7">Profile-{params.usn}</p>
    </>
  );
}
