import { useEffect, useState } from "react";
import Footer from "./footer";
import "../css/team.css"

const Team = () => {
    const base_url = "https://dummyjson.com/users/?skip=0&limit=35"
    const [mainArr, setmainArr] = useState([])
    const [loading, setLoading] = useState(true)
    const [myValue, setmyValue] = useState("")
    console.log(myValue)


    useEffect(() => {

        fetchData()

    }, [])

    const fetchData = async function () {
        const fetchdata = await fetch(base_url)
        const response = await fetchdata.json()
        const fetchedUsers = response.users

        const fetchedArray = fetchedUsers.map(({ address, age, email, firstName, gender, image, lastName, id }) => {
            return { "userID": id, "userAdd": address, "userAge": age, "userEmail": email, "userFirst": firstName, "userLast": lastName, "userGender": gender, "userImage": image }

        })

        setmainArr(fetchedArray)
        setLoading(false)

    }



    return (
        <>
            
            
            <div className="team-container">
                <h1>OUR TEAM MEMBERS</h1>
                {loading && <div style={{margin:"2rem"}}><h1> Loading...</h1></div>}
                <div className="search-team-container"><input type="text" placeholder="search for members" className="search-team" value={myValue} onChange={(e)=> setmyValue(e.target.value)} />
                </div>
                <div className="user-container">
                    {mainArr.filter((filterName) => {
                        return  filterName.userFirst.toLowerCase().includes(myValue)

                    }).map((play) => {
                        return <div key={play.userID} className="team-members">
                            <img src={play.userImage} id="member-image" />
                            <h2 id="member-name">{play.userFirst} {play.userLast}</h2>
                            <p className="about-members"> Age: {play.userAge} & Gender: {play.userGender} </p> <p className="about-members"> Contact Email: <a href="#" id="member-email">{play.userEmail}</a></p>
                            <p className="about-members">Address: {play.userAdd.address}, Postal Code: {play.userAdd.postalCode}</p> <p className="about-members"> City: {play.userAdd.city},  State: {play.userAdd.state} </p>
                            <p className="about-members">Latitude: {play.userAdd.coordinates.lat}, Longitude: {play.userAdd.coordinates.lng}</p>
                        </div>
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Team;
