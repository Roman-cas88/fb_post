import './feedback.css'
import likeIcon from './icons/like.png'
import thumbsUp from './icons/thumbsUp.png'
import butLike from './icons/butLike.png'
import butComment from './icons/butComment.png'
import butShare from './icons/butShare.png'
import myAvatar from './icons/myAvatar.jpg'
import avatarStiker from './icons/avatarStiker.png'
import gif from './icons/gif.png'
import emoji from './icons/emoji.png'
import stiker from './icons/stiker.png'
import randomAvatar from './icons/randomAvatar.jpg'
import diamond from './icons/diamond.png'
import commentLike from './icons/commentLike.png'

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

            <div className="commentField">
                <div className="filter"> <span>Most relevant <i>▼</i></span></div>
                <div className="writeField">
                    <img src={myAvatar} alt="Avatar" id="avatarImg" />
                    <input type="text" placeholder='Write a comment...'/>
                    <img src={avatarStiker} alt="avatarStiker" className="avatarStiker"/>
                    <img src={emoji} alt="emoji" className="emoji" />
                    <img src={gif} alt="gif" className="gif" />
                    <img src={stiker} alt="stiker" className="stiker" />
                </div>

                <div className="info">Press Enter to post.</div>

                <div className="randomComment">
                    <img src={randomAvatar} alt="Avatar" className="randomAvatar" />
                    <div className="topComment">
                        <span className="topFun">
                            <img src={diamond} alt="diamond" className="diamond" />
                            Top fan
                        </span>
                        <p className="nikname">Yaw Nana Walter</p>  
                        <div className="commentContent"><img src={commentLike} alt="heart" /></div> 
                        <p className="comentFeedback"><span>Like</span> <span>Reply</span> <span id="timeRemind">1w</span></p>
                    </div>
                </div>
            </div>
            <div className="commentInfo">Most Relevant is selected, so some comments may have been filtered out.</div>
        </div>
    )
}