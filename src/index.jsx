import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.jpg";
import like from "./likeicon.png";
import share from "./share.png";
import comment from "./comment.png";

const Post = () => (
    <div className="display">

        <div className="mainDiv">
            <div className="profile">
                <div className="profileimg">
                    <img src={logo} alt="" width={40} height={40} />
                </div>
                <div className="profiletittle">
                    <span>Name</span>
                    <span className="time">1d</span>
                </div>
            </div>
            <div className="postrdescription">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore illo, facere aliquid laudantium quas sint nesciunt repellat animi, possimus aperiam ullam? Sint aperiam quisquam perferendis de</p>
            </div>
            <div className="postimg">
                <img src={logo} />
            </div>
            <div className="likeShow"></div>

            <div className="btns">
                <div className="like"><img src={like} alt="" width={18} /><span>Like</span></div>
                <div className="comment"><img src={comment} alt="" width={18} /><span>Comment</span></div>
                <div className="share"><img src={share} alt="" width={18} /><span>Share</span></div>
            </div>
        </div>
    </div>

)

function Display() {
    return (
        <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

ReactDOM.render(<Display />, document.querySelector("#root"));