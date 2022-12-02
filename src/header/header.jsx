import "./header.css"
import Avatar from "./avatar.png"
import Planet from "./planet.png"


export const Header = () => {
    const linkFunc = () => {
        window.location = 'https://fb.watch/h7dCAlBmXp/'
    }
    const linkAvatar = () => {
        window.location = "https://www.facebook.com/SamsungGlobal/?__cft__[0]=AZWf27bTuY7-yW_14Samhh4GcjhQ0MenrDnGcXWl5bSjLrIlb3yn_K7z1YaJgoDZzUMZGQZdtL1hwSpzKEHcKaHs8hWJq8fWgV2wkD0QD-x4rCfs3-DNDAUC6BdMJE1em9UMFxRBAsTpHjep-YTbV0f2ozA2IHBE-BVdIESxbBYvo2uwhSuN_CkGbbc-z_rToDo&__tn__=%3C%3C%2CP-R"
    }

    return (
        <div className="header">
            <img className="avatar" src={Avatar} alt="avatar" onClick={linkAvatar}/>
            <div className="author">
               <a href="https://www.facebook.com/SamsungGlobal/">Samsung Global</a> 
                <div className="markup">✓</div>
                <p className="timeLeft">November 20 at 10:00 AM · 
                    <div className="planet">
                        <img src={Planet} alt="planet"/>
                        <div id="public">Public</div>
                    </div>
                </p>
            </div>
            <div className="dots" onClick={linkFunc}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>    
            </div>
        </div>
    )
}