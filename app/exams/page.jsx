import Wrapper from "../../components/global/Wrapper";
import styles from "../styles.module.css";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <Wrapper>
        <table className={styles.content}>
          <thead>
            <tr>
              <th>Date</th>
              <th>subject</th>
              <th>subject code</th>
              <th>credits </th>
              <th>Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19/23</td>
              <td>Advanced data structures</td>
              <td>20CS5PEADS</td>
              <td>4</td>
              <td>9:00-10:15</td>
            </tr>
            <tr>
              <td>19/23</td>
              <td>Adanced Algorithms</td>
              <td>20CS5PEADS</td>
              <td>4</td>
              <td>12:00-1:15</td>
            </tr>
            <tr>
              <td>20/23</td>
              <td>Ariticial intelligence</td>
              <td>20CS5PEADS</td>
              <td>4</td>
              <td>9:00-10:15</td>
            </tr>
            <tr>
              <td>20/23</td>
              <td>Software Engineering</td>
              <td>20CS5PEADS</td>
              <td>3</td>
              <td>12:00-1:15</td>
            </tr>
            <tr>
              <td>21/23</td>
              <td>Unix Shell and Programming</td>
              <td>20CS5PEADS</td>
              <td>4</td>
              <td>9:00-10:15</td>
            </tr>
            <tr>
              <td>21/23</td>
              <td>Software Project Management and Finance</td>
              <td>20CS5PEADS</td>
              <td>3</td>
              <td>12:00-1:15</td>
            </tr>
            <tr>
              <td>23/23</td>
              <td>Computer Networks</td>
              <td>20CS5PEADS</td>
              <td>4</td>
              <td>9:00-10:15</td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    </div>
  );
}
