
export const VideoContent = () => {
const url = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSamsungGlobal%2Fvideos%2F1073420373222219%2F&show_text=false&width=560&t=0"
    return (
        <div className="videoContent">
            <iframe title="video" 
                src={url}
                width="100%" height="314" 
                scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"
            ></iframe>
        </div>
    )
}
