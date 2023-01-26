import Link from "next/link";
import Wrapper from "../../components/global/Wrapper";
import styles from "../styles.module.css";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex justify-center items-center flex-col">
        <table className={styles.content}>
          <thead>
            <tr>
              <th>NAME </th>
              <td>USN</td>
              <th>SECTION</th>
              <th>PROCTOR NAME</th>
              <th>Email-Id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Utsav Bose</td>
              <td>1BM20CS179</td>
              <td>D</td>
              <td>Proctor</td>
              <td>utsav.cs20@bmsce.ac.in</td>
            </tr>
            <tr>
              <td>Vinay Kulkarni</td>
              <td>1BM20CS188</td>
              <td>D</td>
              <td>Proctor</td>
              <td>vinay.cs20@bmsce.ac.in</td>
            </tr>
          </tbody>
        </table>
        <Link href={"https://meet.google.com/"} target={"_blank"}>
          <p className="p-5 bg-blue-600 rounded-lg text-3xl">Start a Meet</p>
        </Link>
      </div>
    </Wrapper>
  );
}
