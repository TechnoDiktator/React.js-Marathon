import Footer from "./Footer";
import { Link , NavLink } from "react-router-dom";


//both js and jsx files are valis files for react 
//make sure you name components with first letter as capital letter
//because if the first letter is small ....it may already be part of JSX......so JSX will use its element 



const Header = () =>{

    const navlinkStyles = ({isActive})=>{
        return {
            fontWeight : isActive ? "bold" : "normal",
            textDecoration : isActive ? "none" : "underline",
            color : isActive ? "red" : "white",
            fontSize : "25px"
        }
    }

    return (
        <div className="header"> 

            <NavLink style={navlinkStyles} to =  {'/'}>Home</NavLink>
            <NavLink style={navlinkStyles} to = {'/about'}>About</NavLink>
            <NavLink style={navlinkStyles} to = {'/contact' } >Contact</NavLink>
        
        </div>
        

    )
}

//we can choose any way of defining our fuction componenet
//function Header(){
//}


export default Header;

























