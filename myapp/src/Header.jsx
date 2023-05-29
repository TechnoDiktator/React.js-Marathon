import Footer from "./Footer";
import "./header.css"


//both js and jsx files are valis files for react 
//make sure you name components with first letter as capital letter
//because if the first letter is small ....it may already be part of JSX......so JSX will use its element 



const Header = () =>{
    return (
        <div className="header"> 
            <h1 id="topic">Header</h1>
            <p  style={{color : "yellow"   }}>This is a trial</p>
            <Footer/>
        </div>
        

    )
}

//we can choose any way of defining our fuction componenet
//function Header(){
//}


export default Header;

























