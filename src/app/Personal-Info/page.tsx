import './Education.css';

export default function Education() {
    return (
        <div className="education-container">
            <h1>Education</h1>
            <table className="education-table">
                <tbody>
                    <tr>
                        <th className="peach-background">Undergraduate</th>
                        <td>
                            <strong>University name:</strong> Usman Institute of Technology<br />
                            <strong>Field:</strong> Software Engineering<br />
                            <strong>Current CGPA:</strong> 3.75<br />
                            <strong>Year of Completion:</strong> 2027
                        </td>
                    </tr>
                    <tr>
                        <th className="peach-background">Intermediate</th>
                        <td>
                            <strong>Institute:</strong> ST. Lawrence Govt Girls Degree College<br />
                            <strong>Field:</strong> Computer Science<br />
                            <strong>Grade:</strong> A grade<br />
                            <strong>Year of Completion:</strong> 2022
                        </td>
                    </tr>
                    <tr>
                        <th className="peach-background">Matriculation</th>
                        <td>
                            <strong>Institute:</strong> Raumaq-e-Islam Girls Secondary School<br />
                            <strong>Field:</strong> Computer Science<br />
                            <strong>Grade:</strong> A-one Grade<br />
                            <strong>Year of Completion:</strong> 2020
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>Courses</h2>
            <table className="courses-table">
                <tbody>
                    <tr>
                        <th className="peach-background">Web-development</th>
                        <td>
                            <strong>Institute:</strong> Bano Qabil<br />
                            <strong>Duration:</strong> 3 months
                        </td>
                    </tr>
                    <tr>
                        <th className="peach-background">Web3.0 and Metaverse AI</th>
                        <td>
                            <strong>Institute:</strong> Governor of Sindh<br />
                            <strong>Duration:</strong> 1 year
                        </td>
                    </tr>
                    <tr>
                        <th className="peach-background">Freelancing</th>
                        <td>
                        <strong>Plattform: </strong>DigiSkills<br />
                            <strong>Duration:</strong> 3 Months
                        </td>
                    </tr>
                    <tr>
                        <th className="peach-background">Digital Marketing</th>
                        <td>
                        <strong>Plattform: </strong>DigiSkills<br />
                            <strong>Duration:</strong> 3 Months
                        </td>
                    </tr>
                    <tr>
                        <th className="peach-background">Machine Learning</th>
                        <td>
                        <strong>Plattform: </strong> Udemy<br />
                            <strong>Duration:</strong> Short Course
                        </td>
                    </tr>
                    <tr>
                        <th className="peach-background">Probability and Statistics</th>
                        <td>
                        <strong>Plattform: </strong> Udemy<br />
                            <strong>Duration:</strong> Short Course
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
