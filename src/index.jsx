import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import logo from "./logo.jpg";
import like from "./likeicon.png";
import share from "./share.png";
import comment from "./comment.png";

const Post = (props) => (
    <div className="display">

        <div className="mainDiv">
            <div className="profile">
                <div className="profileimg">
                    <img src={props.img} alt="" width={40} height={40} />
                </div>
                <div className="profiletittle">
                    <span>{props.author}</span>
                    <span className="time">{props.time}</span>
                </div>
            </div>
            <div className="postrdescription">
                <p>{props.description}</p>
            </div>
            <div className="postimg">
                <a href={props.url} target={"_blank"} >  <img src={props.img} /> </a>
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
            <Post author="CNA"
                description="BERLIN : Tesla has put plans to launch battery cell production at its plant outside Berlin on hold due to technical issues, the Handelsblatt business daily reported on Friday citing experts, two of whom are close to the company.The planned launch will be dela…"
                img="https://onecms-res.cloudinary.com/image/upload/s--9fkOMJWV--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2022-10-14t133556z_1_lynxmpei9d0q7_rtroptp_3_tesla-demand.jpg?itok=u189Oq5q"
                url="https://www.channelnewsasia.com/business/tesla-puts-planned-battery-cell-production-hold-german-plant-handelsblatt-3008431"
                time="2022-10-14"
            />
            <Post author="PRNewswire"
                description="The electric vehicle motor market is projected to grow by 6.8x by 2032. China electric vehicle motor market is projected to create an incremental opportunity of more than US$ 86.5 Bn in the upcoming decade. Total sales of EV motors in the Germany are projecte…"
                img="https://mma.prnewswire.com/media/1197648/FMI_Logo.jpg?p=facebook"
                url="https://www.prnewswire.com/news-releases/with-green-energy-being-the-buzzword-electric-vehicle-ev-motor-market-is-set-to-reach-us-18-09-bn-at-a-cagr-of-8-5-during-forecast-of-2022-32--says-future-market-insights-inc-301649580.html"
                time="2022-10-14"
            />
            <Post author="TechRadar"
                description="Sound quality is king when it comes to headphones and that's a fact – an inescapable one which pains me given the sonic mediocrity of some otherwise beautiful audio products. But wouldn't it be nice …"
                img="https://cdn.mos.cms.futurecdn.net/mjhqLhJQqkxhNLYkGg8ib9-1200-80.jpg"
                url= "https://www.techradar.com/news/beyerdynamics-new-wireless-earbuds-are-high-end-audible-jewelry-and-i-need-them"
                time="2022-10-14"
            />
            <Post author="Pypi.org"
                description="Ready, Steady, Go!\r\nIts fall 2022, and for the first time in years, buying a GPU for Deep\r\nLearning experiments does not sound too crazy.\r\nNow, how do we pick one?\r\nKeep in mind, performance depends …"
                img="https://pypi.org/static/images/twitter.6fecba6f.jpg"
                url="https://pypi.org/project/ready-steady-go/"
                time="2022-10-14"
            />
            <Post author="Chloe Taylor"
                description="Elon Musk has said it is unreasonable to expect SpaceX to provide its Starlink internet service in Ukraine indefinitely amid reports the company asked the Pentagon to foot the half-a-billion-dollar b… "
                img="https://content.fortune.com/wp-content/uploads/2022/10/GettyImages-1242798333-1-1-e1665751309936.jpg?resize=1200,600"
                url="https://fortune.com/2022/10/14/elon-musk-unreasonable-for-spacex-to-continue-funding-ukraine-starlink/"
                time="2022-10-14"
            />
            <Post author="Radiant Offshore Consultancy LLP"
                description="Energy Storage Systems market is expected to reach 440.71 GW in 2028, growing at a CAGR of 11.1% during 2022- 2028, reports Stratview Research. Energy Storage Systems market is expected to reach 440.71 GW in 2028, growing at a CAGR of 11.1% during 2022- 2028,…"
                img="https://ml.globenewswire.com/Resource/Download/0b13b3bb-ce12-4d7e-b698-1d1a9fe7f607?size=1"
                url="https://www.globenewswire.com/news-release/2022/10/14/2534728/0/en/Energy-Storage-System-Market-demand-is-Projected-to-Reach-440-71-GW-in-2028.html"
                time="2022-10-14"
            />
        </div>
    )
}

ReactDOM.render(<Display />, document.querySelector("#root"));