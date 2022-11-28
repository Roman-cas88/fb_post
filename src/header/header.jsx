import "./header.css"
import Avatar from "./avatar.png"
import Planet from "./planet.png"


export const Header = () => {
    return (
        <div className="header">
            <img className="avatar" src={Avatar} alt="avatar" />
            <div className="author">
                Samsung Global 
                <span className="markup">✓</span>
                <p className="timeLeft">November 20 at 10:00 AM · <img className="planet" src={Planet} alt="planet" /></p>
            </div>
            <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>    
            </div>
        </div>
    )
}