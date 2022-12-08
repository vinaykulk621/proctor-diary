import Wrapper from "../../../components/global/Wrapper";

export default function Home({ params }) {
  return (
    <Wrapper>
      <p className="p-7">Profile-{params.usn}</p>
    </Wrapper>
  );
}
