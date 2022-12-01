import { TextContent } from "./content/textContent"
import { VideoContent } from "./content/videoContent"
import { Feedback } from "./feedback/feedback"
import { Header } from "./header/header"
import "./post.css"

export const Post = () => {
    return <div className="post">
        <Header />
        <TextContent />
        <VideoContent />
        <Feedback />
        </div>
}