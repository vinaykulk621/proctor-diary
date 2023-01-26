import Wrapper from "../../components/global/Wrapper";
import styles from "../styles.module.css";

export default function Home() {
  return (
    <Wrapper>
      <table className={styles.content}>
        <thead>
          <tr>
            <th>COMPANY NAME</th>
            <th>ELIGIBILITY GPA</th>
            <th>BACKLOGS</th>
            <th>STIP</th>
            <th>BRANCHES ALLOWED</th>
            <th> OFFERING</th>
            <th>CTC PACKAGE</th>
            <th>INTERNSHIP STIPEND(PER MONTH)</th>
            <th>ROLES/JD</th>
            <th>TEST DATES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cisco</td>
            <td>7.5+</td>
            <td>No</td>
            <td>CSE/ISE/ECE</td>
            <td>Internship+PBC</td>
            <td>14.3lpa(10 base)</td>
            <td>60k</td>
            <td>Banglore</td>
            <td>Software Engineer</td>
            <td>23rd july</td>
          </tr>
          <tr>
            <td>Clumnio</td>
            <td>8.5+</td>
            <td>No</td>
            <td>CSE/ISE</td>
            <td>Internship+FT</td>
            <td>23.7lpa(20 base)</td>
            <td>1lpm</td>
            <td>Banglore</td>
            <td>Member of Technical staff</td>
            <td>3rd august</td>
          </tr>
          <tr>
            <td>Nutanix</td>
            <td>8.5+</td>
            <td>No</td>
            <td>CSE/ISE/ECE</td>
            <td>Internship+PBC</td>
            <td>28lpa(20 base)</td>
            <td>90k</td>
            <td>Banglore</td>
            <td>Software Engineer</td>
            <td>5th august</td>
          </tr>
          <tr>
            <td>Cloudera</td>
            <td>7.5+</td>
            <td>No</td>
            <td>CSE/ISE/ECE</td>
            <td>Internship+PBC</td>
            <td>14.3lpa(10 base)</td>
            <td>60k</td>
            <td>Banglore</td>
            <td>Software Engineer</td>
            <td>9th august</td>
          </tr>
          <tr>
            <td>TCS Codevita</td>
            <td>9.5+</td>
            <td>No</td>
            <td>CSE/ISE/ECEonly</td>
            <td>Internship+PBC</td>
            <td>14.3lpa(10 base)</td>
            <td>60k</td>
            <td>Banglore</td>
            <td>Software Engineer</td>
            <td>20th august</td>
          </tr>
          <tr>
            <td>Philips</td>
            <td>7.0+</td>
            <td>No</td>
            <td>CSE/ISE only</td>
            <td>Internship+PBC</td>
            <td>14.3lpa(10 base)</td>
            <td>60k</td>
            <td>Banglore</td>
            <td>Software Engineer</td>
            <td>31th august</td>
          </tr>
          <tr>
            <td>Sabre</td>
            <td>7.5+</td>
            <td>No</td>
            <td>CSE/ISE/ECE</td>
            <td>Internship+PBC</td>
            <td>14.3lpa(10 base)</td>
            <td>60k</td>
            <td>Banglore</td>
            <td>Software Engineer</td>
            <td>12thaugust</td>
          </tr>
          <tr>
            <td>Oracle</td>
            <td>7.5+</td>
            <td>No</td>
            <td>CSE/ISE/ECE</td>
            <td>Internship+PBC</td>
            <td>14.3lpa(10 base)</td>
            <td>60k</td>
            <td>Banglore</td>
            <td>Software Engineer</td>
            <td>9th october</td>
          </tr>
          <tr>
            <td>Brillio</td>
            <td>6.5+</td>
            <td>No</td>
            <td>CSE/ISE/ECE</td>
            <td>Internship+PBC</td>
            <td>14.3lpa(10 base)</td>
            <td>60k</td>
            <td>Banglore</td>
            <td>Software Engineer</td>
            <td>9th july</td>
          </tr>
          <tr>
            <td>Volvo</td>
            <td>7.5+</td>
            <td>No</td>
            <td>CSE/ISE/ECE</td>
            <td>Internship+PBC</td>
            <td>14.3lpa(10 base)</td>
            <td>60k</td>
            <td>Banglore</td>
            <td>Software Engineer</td>
            <td>9th september</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
}
