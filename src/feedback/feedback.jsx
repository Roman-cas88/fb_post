import './feedback.css'
import likeIcon from './icons/like.png'
import thumbsUp from './icons/thumbsUp.png'
import butLike from './icons/butLike.png'
import butComment from './icons/butComment.png'
import butShare from './icons/butShare.png'

export const Feedback = () => {

    return (
        <div className="feedback">
            <div className="underVideo">
                <img src={likeIcon} alt="like" className="likeIcon" />
                <img src={thumbsUp} alt="thumbsUp" className="thumbsUp" />
                <a href="#count" className="count">143</a>
                <a href="#comments" className="comments">23 Comments</a>
                <a href="#shares" className="shares">8 Shares</a>
            </div>
            <div className="buttons">
                <div className="butLike">
                    <img src={butLike} alt="Like" className="butLikeImg" />
                    <span>Like</span>
                </div>
                <div className="butComment">
                    <img src={butComment} alt="Comment" className="butCommentImg" />
                    <span>Comment</span>
                </div>
                <div className="butShare">
                    <img src={butShare} alt="Share" className="butShareImg" />
                    <span>Share</span>
                </div>
            </div>
        </div>
    )
}