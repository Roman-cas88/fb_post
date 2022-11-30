import "./textContent.css"

export const TextContent = () => {
   const url1 = "https://www.facebook.com/hashtag/worldchildrensday?__eep__=6&__cft__[0]=AZWf27bTuY7-yW_14Samhh4GcjhQ0MenrDnGcXWl5bSjLrIlb3yn_K7z1YaJgoDZzUMZGQZdtL1hwSpzKEHcKaHs8hWJq8fWgV2wkD0QD-x4rCfs3-DNDAUC6BdMJE1em9UMFxRBAsTpHjep-YTbV0f2ozA2IHBE-BVdIESxbBYvo2uwhSuN_CkGbbc-z_rToDo&__tn__=*NK-R";
   const url2 = "https://l.facebook.com/l.php?u=http%3A%2F%2Fsmsng.co%2Ftogetherfortomorrow%3Ffbclid%3DIwAR3HuHQKnPWHPoqc028dm-GBwKyMBXpMBA7dpz9aJM3MQoLaAXldRqH_bxw&h=AT0kQXuk3_yjzhTvabOSuAkU6i0oF0DtoCF1KFsmPYrICMDPa2FCF_hF6B1mmmeRS5EJcWxoYTFktYh9ZEXCz0blSC0YpfPhXJ3LjNFri6I8gV5eLdkKsfAsKUTBVJrLC91r&__tn__=-UK-R&c[0]=AT1b-lF-WXEPocG4sddnegA-_8DyZ9ELt9ol4ACmtrQtX0Tr9I8TQImT8shz4L1SFzTAt5yp60F-bxTl-BfGoT5NklDOQ19xxSkJBymmGXwv-unonGKVfJss0lwxvL_039HzXyeiaqKEfJ2rmMwg3MrBLe2hK__pVrS796N7Lre5ogwtlLyhljX4WDD2HXpPDgoCxV2z1nEnijC9JHG3TCf7Ow";
   const url3 = "https://www.facebook.com/hashtag/enablingpeople?__eep__=6&__cft__[0]=AZWf27bTuY7-yW_14Samhh4GcjhQ0MenrDnGcXWl5bSjLrIlb3yn_K7z1YaJgoDZzUMZGQZdtL1hwSpzKEHcKaHs8hWJq8fWgV2wkD0QD-x4rCfs3-DNDAUC6BdMJE1em9UMFxRBAsTpHjep-YTbV0f2ozA2IHBE-BVdIESxbBYvo2uwhSuN_CkGbbc-z_rToDo&__tn__=*NK-R";
   const url4 = "https://www.facebook.com/hashtag/togetherfortomorrow?__eep__=6&__cft__[0]=AZWf27bTuY7-yW_14Samhh4GcjhQ0MenrDnGcXWl5bSjLrIlb3yn_K7z1YaJgoDZzUMZGQZdtL1hwSpzKEHcKaHs8hWJq8fWgV2wkD0QD-x4rCfs3-DNDAUC6BdMJE1em9UMFxRBAsTpHjep-YTbV0f2ozA2IHBE-BVdIESxbBYvo2uwhSuN_CkGbbc-z_rToDo&__tn__=*NK-R";
   const url5 = "https://www.facebook.com/hashtag/youtheducation?__eep__=6&__cft__[0]=AZWf27bTuY7-yW_14Samhh4GcjhQ0MenrDnGcXWl5bSjLrIlb3yn_K7z1YaJgoDZzUMZGQZdtL1hwSpzKEHcKaHs8hWJq8fWgV2wkD0QD-x4rCfs3-DNDAUC6BdMJE1em9UMFxRBAsTpHjep-YTbV0f2ozA2IHBE-BVdIESxbBYvo2uwhSuN_CkGbbc-z_rToDo&__tn__=*NK-R";
   const translation = () => {
    console.log("See Translation")
   };
   return (
    <div className="textContent">
        Happy <a href={url1}>#WorldChildrensDay!</a> We truly believe in the next generation's potential to unlock a better future. 
        That’s why we are empowering them to achieve their full potential through technology and education.
        <br />Learn more: <a href={url2}>smsng.co/togetherfortomorrow</a>
        <br /><a href={url3}>#EnablingPeople</a> <a href={url4}>#TogetherForTomorrow</a> <a href={url5}>#YouthEducation</a> 
        <p className="translation" onClick={translation}>See Translation</p>
    </div>
)
}