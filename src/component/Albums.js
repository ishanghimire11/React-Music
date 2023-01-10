import Footer from "./footer";
import "../css/albums.css"

const Albums = () => {
    return (
        <div className="Albums-mainContainer">
            <div className="critiques"><h1>Critically Acclaimed Albums</h1></div>
            <div className="Albums-container">
                <div className="albums">

                    <div style={{ textAlign: "center" }} className="image-container">
                        <img className="album-cover" src="https://e.snmc.io/i/300/w/819f6c8d9dc68af88e83be0a0ba5d1fb/8862252/Radiohead%20-%20OK%20Computer%2C%20Cover%20art.webp" alt="" />
                    </div>

                    <div>
                        <p className="album-name">OK Computer</p>
                        <p className="artist-name">Radiohead</p>
                        <p className="release-date">16 June 1997</p>
                        <p className="album-genre">Alternative Rock, Art Rock</p>
                        <p className="album-about">The album's lyrics depict a world fraught with rampant consumerism, social alienation, emotional isolation and political malaise; in this capacity, OK Computer has been said to have prescient insight into the mood of 21st-century life.</p>
                        <span className="listen">Listen On: <i class="fa-brands fa-spotify"></i> <i class="fa-brands fa-soundcloud"></i><i class="fab fa-youtube"></i><i class="fa-brands fa-napster"></i></span>
                    </div>


                </div>

                <div className="albums">

                    <div style={{ textAlign: "center" }} className="image-container">
                        <img className="album-cover" src="https://e.snmc.io/i/300/w/b14876e444855e5f7136aeef78ed03e5/8121875/Kendrick%20Lamar%20-%20To%20Pimp%20a%20Butterfly%2C%20Cover%20art.webp" alt="" />
                    </div>

                    <div>
                        <p className="album-name">To Pimp A Butterfly</p>
                        <p className="artist-name">Kendrick Lamar</p>
                        <p className="release-date">15 March 2015</p>
                        <p className="album-genre">Conscious Hip Hop, West Coast Hip Hop, Jazz Rap</p>
                        <p className="album-about">TPAB is an album that deals with materialism, racism, oppression, and above all else, self-love. The album's title To Pimp a Butterfly, while a clever nod to Harper Lee's To Kill a Mockingbird, is also a metaphor for the literal pimping of something as beautiful/free as a butterfly.</p>
                        <span className="listen">Listen On: <i class="fa-brands fa-spotify"></i> <i class="fa-brands fa-soundcloud"></i><i class="fab fa-youtube"></i><i class="fa-brands fa-napster"></i></span>
                    </div>


                </div>
                <div className="albums">

                    <div style={{ textAlign: "center" }} className="image-container">
                        <img className="album-cover" src="https://e.snmc.io/i/300/w/51cc5bc7926feefc1ce57cba85ffed0e/10140301/Pink%20Floyd%20-%20The%20Dark%20Side%20of%20the%20Moon%2C%20Cover%20art.webp" alt="" />
                    </div>

                    <div>
                        <p className="album-name">The Dark Side of the Moon</p>
                        <p className="artist-name">Pink Floyd</p>
                        <p className="release-date">23 March 1973</p>
                        <p className="album-genre">Art Rock, Progressive Rock</p>
                        <p className="album-about">
                            The Dark Side of the Moon explores themes such as conflict, greed, time, death and mental illness. Snippets from interviews with the band's road crew are featured alongside philosophical quotations.</p>
                        <span className="listen">Listen On: <i class="fa-brands fa-spotify"></i> <i class="fa-brands fa-soundcloud"></i><i class="fab fa-youtube"></i><i class="fa-brands fa-napster"></i></span>
                    </div>


                </div>
                <div className="albums">

                    <div style={{ textAlign: "center" }} className="image-container">
                        <img className="album-cover" src="https://e.snmc.io/i/300/w/3bb3f5880c39f44b7e1c6aef17838696/6617288/The%20Beatles%20-%20Abbey%20Road%2C%20Cover%20art.webp" alt="" />
                    </div>

                    <div>
                        <p className="album-name">Abbey Road</p>
                        <p className="artist-name">The Beatles</p>
                        <p className="release-date">26 September 1969</p>
                        <p className="album-genre">Psychedelic Pop, Progressive Pop, Art Pop</p>
                        <p className="album-about">Abbey Road incorporates styles such as rock, pop, blues, singer-songwriter, and progressive rock, and makes prominent use of the Moog synthesizer and guitar played through a Leslie speaker unit.</p>
                        <span className="listen">Listen On: <i class="fa-brands fa-spotify"></i> <i class="fa-brands fa-soundcloud"></i><i class="fab fa-youtube"></i><i class="fa-brands fa-napster"></i></span>
                    </div>


                </div>
                <div className="albums">

                    <div style={{ textAlign: "center" }} className="image-container">
                        <img className="album-cover" src="https://e.snmc.io/i/300/w/cf7888c3c5d45ef556e74ee560887f8b/6988068/The%20Velvet%20Underground%20%26%20Nico%20-%20The%20Velvet%20Underground%20%26%20Nico%2C%20Cover%20art.webp" alt=""/>
                    </div>

                    <div>
                        <p className="album-name">
                            The Velvet Underground & Nico</p>
                        <p className="artist-name">
                            The Velvet Underground & Nico</p>
                        <p className="release-date">12 March 1967</p>
                        <p className="album-genre">Art Rock,Experimental Rock</p>
                        <p className="album-about">Musically, The Velvet Underground & Nico has generally been described by writers as art rock, experimental rock, proto-punk, psychedelic rock, and avant-pop. Much of the album's sound was conceived by John Cale, who stressed the experimental qualities of the band.</p>
                        <span className="listen">Listen On: <i class="fa-brands fa-spotify"></i> <i class="fa-brands fa-soundcloud"></i><i class="fab fa-youtube"></i><i class="fa-brands fa-napster"></i></span>
                    </div>

                    

                </div>

                <div className="button-container">
                        <button className="load-more">Load more..</button>
                </div>
            
            </div>


            <Footer />

        </div>
    );
}

export default Albums;