import Wrapper from "../../components/global/Wrapper";
import styles from "../styles.module.css";

export default function Home() {
  return (
    <Wrapper>
      <p>
        The Awards and health records are updated by the respected department
        office.
      </p>
      <div className="flex justify-around items-center flex-row pt-8">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Health Issues</h1>
          <table className={styles.content}>
            <thead>
              <tr>
                <th>DATE</th>
                <th>REASON</th>
                <th>NAME</th>
                <th>USN </th>
                <th>SECTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/01/2023</td>
                <td>Fever</td>
                <td>Vinay Kulkarni</td>
                <td>1BM20CS188</td>
                <td>D</td>
              </tr>
              <tr>
                <td>31/12/2022</td>
                <td>Leg injury(surgry)</td>
                <td>Utsav Bose</td>
                <td>1BM20CS189</td>
                <td>D</td>
              </tr>
              {/* <tr>
                <td>20/01/2023</td>
                <td>Allergy</td>
                <td>Sumedh</td>
                <td>1BM20CS218</td>
                <td>D</td>
              </tr> */}
              {/* <tr>
                <td>20/11/2023</td>
                <td>Tonsil</td>
                <td>Manshi Mahato</td>
                <td>1BM20CS208</td>
                <td>D</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Awards/Achievements</h1>
          <table className={styles.content}>
            <thead>
              <tr>
                <th>DATE</th>
                <th>Award</th>
                <th>NAME</th>
                <th>USN </th>
                <th>SECTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11/08/2023</td>
                <td>Hack-A-Thon</td>
                <td>Vinay Kulkarni</td>
                <td>1BM20CS188</td>
                <td>D</td>
              </tr>
              <tr>
                <td>13/02/2022</td>
                <td>Code-A-Thon</td>
                <td>Utsav Bose</td>
                <td>1BM20CS179</td>
                <td>D</td>
              </tr>
              {/* <tr>
                <td>20/01/2023</td>
                <td>Allergy</td>
                <td>Sumedh</td>
                <td>1BM20CS218</td>
                <td>D</td>
              </tr>
              <tr>
                <td>20/11/2023</td>
                <td>Tonsil</td>
                <td>Manshi Mahato</td>
                <td>1BM20CS208</td>
                <td>D</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
}
