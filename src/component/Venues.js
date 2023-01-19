import Footer from "./footer";
import "../css/venues.css"
import { useState } from "react";


const Venues = () => {

    const [currentSort, setcurrentSort]= useState("asc")
    
    const myVenues = [{"id":1,"name":"Prive Nepal","type":"Night Club","about":"Privé Night Club by Encore Entertainment Pvt. Ltd. is an 18,000 square foot multi-faceted partying space in the Soaltee Crowne Plaza, Kathmandu.","location":"Ground Floor, Casino Mahjong The Soaltee, Tahachal Marg44600 Kathmandu, Kathmandu, Nepal","image":"https://www.aafnoticket.com/media/cache/thumbnail/rc/mIB7kfsO/uploads/venues/638fd8d4031b6619441440.jpg"},
    {"id":2,"name":"St Lukes - Event Cinemas","type":"Theater","about":"Level 2, Westfield St Lukes, 80 St Lukes Rd, St LukesThere's 240 minutes free parking within Westfield St Lukes Mall, or off-street parking available on Morningside Drive ","location":"Event St Lukes. Level 2, Westfield St Lukes1025 Auckland, Auckland, New Zealand","image":"https://www.aafnoticket.com/media/cache/thumbnail/rc/z4eQR72j/uploads/venues/638fe0e0dfd98295239434.jpg"},
    {"id":3,"name":"Club Fahrenheit","type":"Night Club","about":"Night Club for You All. Fahrenheit Presents you the best service and best music in town.Club Fahrenheit a place where you could party almost whole night, located in the heart","location":"Keshar Mahal Marg,, Kathmandu44600 Kathmandu, Kathmandu, Nepal","image":"https://www.aafnoticket.com/media/cache/thumbnail/rc/2XM4nkGg/uploads/venues/638fe39d09ff6189206474.jpg"},
    {"id":4,"name":"The Last Resort Pvt Ltd","type":"Other","about":"The Last Resort in Nepal is set amidst sprawling terraced slopes, suspended on a high cliff-top gorge above the wild Bhote Kosi River and surrounded by dense jungle and pristi...","location":"Nayapul Listikot, Araniko Highway, Panglang45301 Sindhupalchowk, Tatopani, Nepal","image":"https://www.aafnoticket.com/media/cache/thumbnail/rc/FVRETFs4/uploads/venues/6321b3c0df297351844054.jpg"},
    {"id":5,"name":"Central Court Hamilton Garden","type":"large","about":"Central Court is a large multipurpose space suitable for large dinners, presentations, shows, expos, and conventions. It can be joined to the Exhibition Hall to create a large...","location":"Hamilton Garden3216 Hamilton, Waikato, New Zealand","image":"https://www.aafnoticket.com/media/cache/thumbnail/rc/z0JFYdIV/uploads/venues/638fe57fc7b0d206148469.jpg"},
    {"id":6,"name":"Studio The Venue","type":"Event Space","about":"The best entertainment venue in Auckland. Studio The Venue K-rd.For 15 years, Auckland has seen the heart and soul of its live entertainment scene being housed in what is an i...","location":"340 Karangahape Road1010 Auckland, Auckland, New Zealand","image":"https://www.aafnoticket.com/media/cache/thumbnail/rc/E165RZvy/uploads/venues/62cd3f4127fa3352116349.JPG"}]

    

    const handleSorting = myVenues.sort((a,b)=> {
         const isReversed = (currentSort === "asc") ? 1 : -1; 
         return isReversed * a.name.localeCompare(b.name)
        
    
        
    })

    function onSort(a) {
        return setcurrentSort(a)
        
    }
    
    

    return (
        <>
            <div className="venues-sorting-container">
                <h3>6 venue(s)</h3>
                <div>
                    <button className="sort-button" onClick={() => {onSort("asc")}}><i className="fa-solid fa-arrow-up-a-z sorting-icon"></i>Ascending</button>
                    <button className="sort-button" onClick={() => {onSort("desc")}}><i className="fa-solid fa-arrow-up-z-a sorting-icon"></i>Descending</button>
                </div>
            </div>
            <div className="main">
                {handleSorting.map((mapped) => {
                    return <div key={mapped.id} className="venues-container">
                        <div className="venue-image-container"><img src={mapped.image} className="venue-image" alt="venues" /></div>
                        
                        <div className="venue-description">
                        <p className="venue-name">{mapped.name}</p>
                        <p className="venue-type">{mapped.type}</p>
                        <p className="venue-about">{mapped.about}</p>
                        <p className="venue-location">Location - {mapped.location}</p>
                        </div>
                    </div>
                })}
            </div>
            <Footer />
        </>
    );
}

export default Venues;