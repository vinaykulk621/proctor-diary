/** @format */

import Wrapper from "../../components/global/Wrapper";
import styles from "../styles.module.css";

export default function Home() {
  return (
    <Wrapper>
      <div className='flex justify-center items-center'>
        <table className={styles.content}>
          <thead>
            <tr>
              <th>SL.NO</th>
              <th>COURSE TYPE</th>
              <th>COURSE NAME</th>
              <th>COURSE CODE</th>
              <th>CREDITS </th>
              <th>FACULTY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>PC-9 </td>
              <td>Artificial Intelligence </td>
              <td>20CS5PCAIP</td>
              <td>4</td>
              <td>Antara Roy Choudhury</td>
            </tr>
            <tr>
              <td>2</td>
              <td>PC-10</td>
              <td>Computer Networks</td>
              <td>20CS5PCCON </td>
              <td>4</td>
              <td>Rekha GS</td>
            </tr>
            <tr>
              <td>3</td>
              <td>PC-11</td>
              <td>Unix Shell and System Programming</td>
              <td>20CS5PCUSP</td>
              <td>4</td>
              <td>Pallavi Gb</td>
            </tr>
            <tr>
              <td>4</td>
              <td>PC-12</td>
              <td>Software Engineering</td>
              <td>20CS5PCSEG </td>
              <td>3</td>
              <td>Sonika Sharma</td>
            </tr>
            <tr>
              <td>5</td>
              <td>HS-3</td>
              <td>Software Project Management and Finance </td>
              <td>20CS5HSSPM</td>
              <td>2</td>
              <td>Madhavi RP</td>
            </tr>
            <tr>
              <td>6</td>
              <td>PE-1</td>
              <td>Adavanced Data Structures </td>
              <td>20CS5PEADS </td>
              <td>4</td>
              <td>Rajeshwari Bs</td>
            </tr>
            <tr>
              <td>7</td>
              <td>PE-2</td>
              <td>Advanced Algorithms</td>
              <td>20CS5PEAAG</td>
              <td>3</td>
              <td>Syed Akram </td>
            </tr>
            <tr>
              <td>8</td>
              <td>PW-3</td>
              <td>Project work 3</td>
              <td>20CS5PWPW3</td>
              <td>2</td>
              <td>Latha Mam</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}
