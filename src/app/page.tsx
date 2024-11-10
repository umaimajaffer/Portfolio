import Image from 'next/image';
import "./Home.css"
export default function Home() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="content">
        <p>
          My name is <strong>UMAIMA JAFFER</strong>and I am a <strong>Next.js</strong> developer currently
          pursuing a degree in Software Engineering from UIT University. I am
          also enrolled in the Web3.0 course offered through the Governor Sindh
          IT Initiative. I have completed a web development course and possess
          knowledge of <strong>React</strong>, as well as proficiency in <strong>Java</strong>, <strong>Python</strong>, and
          several other programming languages. Software engineering is my
          passion, and I love programming.
        </p>
        <Image
            src="/images/img1.jpeg" // Update with your image path
            alt="Contact Icon"
            width={300}
            height={300}
          />
      </div>
    </div>
  );
}
