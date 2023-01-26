import Wrapper from "../../components/global/Wrapper";
import styles from "../styles.module.css";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <Wrapper>
        <table className={styles.content}>
          <thead>
            <tr>
              <th>SL.NO</th>
              <th>USN</th>
              <th>NAME</th>
              <th>GENDER </th>
              <th>AGE</th>
              <th>SCHOLARSHIP</th>
              <th>GPA</th>
              <th>SEMESTER</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1BM20CS219</td>
              <td>Utsav Bose</td>
              <td>Male</td>
              <td>20</td>
              <td>SSP</td>
              <td>7.0</td>
              <td>5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>1BM20CS188</td>
              <td>Vinay Kulkarni</td>
              <td>Male</td>
              <td>20</td>
              <td>NSP</td>
              <td>8.4</td>
              <td>5</td>
            </tr>
            {/* <tr>
              <td>4</td>
              <td>1BM20CS218</td>
              <td>Sumedh</td>
              <td>Male</td>
              <td>20</td>
              <td>Scholarship</td>
              <td>8.0</td>
              <td>4</td>
            </tr> */}
            {/* <tr>
              <td>2</td>
              <td>1BM20CS208</td>
              <td>Manshi Mahato</td>
              <td>Female</td>
              <td>20</td>
              <td>Badminton(Second prize)</td>
              <td>7.5</td>
              <td>4</td>
            </tr> */}
          </tbody>
        </table>
        <p>The data on scholarship is updated by the addmission office<span className="text-red-800">*</span></p>
      </Wrapper>
    </div>
  );
}
