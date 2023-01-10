
import logo from "../assets/logo.svg"
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person3';
import CallIcon from '@mui/icons-material/Call';
import "../css/liststyle.css"



const List = () => {

    return (

        <header>
            <div className="container container2">
                <div >
                    <NavLink to="/"><img src={logo} alt="" className="logo" /></NavLink>
                </div>
                <nav>
                    <div className="list">
                        <NavLink to="/" className="listitem">Home</NavLink>
                        <NavLink to="/albums" className="listitem">Albums</NavLink>
                        <NavLink to="/contact" className="listitem">Contact</NavLink>
                        <NavLink to="/services" className="listitem">Services</NavLink>
                    </div>
                </nav>
                <div className="icons">
                    <SearchIcon id="icon"></SearchIcon>
                    <PersonIcon id="icon"></PersonIcon>
                    <CallIcon id="icon"></CallIcon>
                </div>
            </div>
        </header>

    );
}

export default List;