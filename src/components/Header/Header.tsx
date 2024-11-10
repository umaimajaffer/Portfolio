import Link from "next/link"
import "../Header/Header.css"
export function Header(){
    return(
        <div className="header">
            <title>PORTFOLIO</title>
            <h1>Personal Portfolio</h1>
            <ul className=" headerbuttons">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/Personal-Info"}><li>Prsonal-Info/Education</li></Link>
                <Link href={"/Contact-me"}><li>Contact Me</li></Link>
                <Link href={"/Projects"}><li>Projects/Skills</li></Link>    
            </ul>
        </div>
    );
};
