import "../css/home.css"
import Footer from "./footer"
import sza from "../assets/sza.webp"
import coldplay from "../assets/chrismartin.jpg"
import radiohead from "../assets/radiohead.webp"
import pilot from "../assets/21.webp"
import videobg from "../assets/video-bg.mp4"

const Home = () => {
    return (

        <div className="homecontainer">
            <div className="home-container">
                <div className="overlay"></div>
                <video src={ videobg } loop autoPlay muted></video>
                <div className="content">
                    <h1 id="home-h1">Get your Tickets! </h1>
                    <input className="search-artist" type="text" placeholder="Search for artist" />
                    <button id="lesgo">Find</button>
                    <p className="home-p">Find your own artist or see which artists are popping <br /> off this month <a href="#below" id="jump-below">below</a>.</p>
                </div>

            </div>
            <div className="container2-home">
                <h3 className="popularh3" id="below">Popular artists of the Month</h3>
                <div className="popular-artist">
                    <div className="month">
                        <img src={sza} alt="" className="artist" />
                        <h2 className="popular-artist-name">SZA - <span> $125 </span></h2>
                        <p>SZA is our artist of the month. She is performing on 26th December on Kathmandu. </p>
                        <button className="get-ticket">Get your Tickets</button>
                    </div>
                    <div className="month">
                        <img src={coldplay} alt="" className="artist" />
                        <h2 className="popular-artist-name">Coldplay - <span> $100 </span></h2>
                        <p>Watch Christ Martin and Coldplay live on 3 PM on 17th of December. </p>
                        <button className="get-ticket">Get your Tickets</button>
                    </div>
                    <div className="month">
                        <img src={pilot} alt="" className="artist" />
                        <h2 className="popular-artist-name">21 Pilots - <span> $150 </span></h2>
                        <p>You can watch the duo 21 pilots on New Year's Eve.  </p>
                        <button className="get-ticket">Get your Tickets</button>

                    </div>
                    <div className="month">
                        <img src={radiohead} alt="" className="artist" />
                        <h2 className="popular-artist-name">Radiohead - <span> $300 </span></h2>
                        <p>Your favourite band Radiohead is performing their top albums on New Year's eve.  </p>
                        <button className="get-ticket">Get your Tickets</button>

                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default Home;

