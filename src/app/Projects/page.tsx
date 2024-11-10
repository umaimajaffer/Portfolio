import '../Projects/Project.css';

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="skills-section">
                <h1>SKILLS:</h1>
                <div className="skills-content">
                    <div className="skill-item left-skill">
                        <strong>1. FRONT-END DEVELOPER:</strong>
                        <ul>
                            <li>Simple Front-End with HTML, CSS, and JS</li>
                            <li>React.js Programming</li>
                        </ul>
                    </div>
                    <div className="skill-item right-skill">
                        <strong>2. PROFICIENCY IN DIFFERENT PROGRAMMING LANGUAGES:</strong>
                        <ul>
                            <li>Java Programming</li>
                            <li>Python Programming</li>
                        </ul>
                    </div>
                    <div className="skill-item center-skill">
                        <strong>3. OTHER SKILLS:</strong>
                        <ul>
                            <li>Fast Typist</li>
                            <li>Good Communication Skills</li>
                            <li>Data Entry With 100% Accuracy</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects-section">
                <h1>PROJECTS:</h1>
                <div className="projects-content">
                    <div className="project-item">
                        <h3>1. RESUME BUILDER</h3>
                        <ul>
                            <li><strong>GitHub Link:</strong> </li>
                            <li><strong>Netlify Link:</strong> </li>
                            <li><strong>Description:</strong> This Resume Builder has been made on Next.js where you can create your own resume and download it as PDF.</li>
                        </ul>
                    </div>
                    <div className="project-item">
                        <h3>2. APPLE MART</h3>
                        <ul>
                            <li><strong>GitHub Link:</strong>https://github.com/umaimajaffer/BanoQabil3finalproject </li>
                            <li><strong>Netlify Link:</strong> </li>
                            <li><strong>Description:</strong> This is a React-based Online Store.</li>
                        </ul>
                    </div>
                    <div className="project-item">
                        <h3>3. E-COMMERCE STORE</h3>
                        <ul>
                            <li><strong>GitHub Link:</strong> https://github.com/umaimajaffer/React-Ecommerce-Project</li>
                            <li><strong>Netlify Link:</strong> </li>
                            <li><strong>Description:</strong> A simple E-commerce store built on HTML, CSS, JS, and Vite + React.</li>
                        </ul>
                    </div>
                    <div className="project-item">
                        <h3>4. TIC TAC TOE</h3>
                        <ul>
                            <li><strong>GitHub Link:</strong> Currently no Link</li>
                            <li><strong>Description:</strong> This game is created in Python and only contains the source code without a GUI.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
