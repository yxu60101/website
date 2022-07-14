import Home1 from "./Home1.jpg"
import Home2 from "./Home2.jpg"
import Home3 from "./Home3.jpg"
import GE from "./Logos/GE.png"
import Goldman_Sachs from "./Logos/Goldman_Sachs.png"
import Meta from "./Logos/Meta.jpg"
import MT from "./Logos/M&T_Bank.png"
import Greenbox from "./Logos/Greenbox.png"
import Eversource from "./Logos/Eversource.jpg"
import GD from "./Logos/GD.png"

const Home = () => {
    return ( 
        <div className="home">

            <div className="topPage">

                {/* Title */}
                <div className="title"><h1>Theta Tau <br /> <h2>Professional Co-Ed Engineering Fraternity at the University At Buffalo</h2></h1></div>

                <body>

                    {/* Image Carousel */}
                    <div id="slider">
                        <figure>
                            <img src={Home1} alt=""/>
                            <img src={Home2} alt=""/>
                            <img src={Home3} alt=""/>
                        </figure>
                    </div>

                </body>
            </div>

            <div className="pillars">
                <div className="brotherhood">
                    <h2 id ="brotherhood_title">Brotherhood</h2>
                    <p id="brotherhood_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="professionalism">
                    <h2 id="professionalism_title">Professionalism</h2>
                    <p id="professionalism_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="service">
                    <h2 id="service_title">Service</h2>
                    <p id="service_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="Companies_Section">
                <center>
                    <h2 className="Companies_Intro">Where our members work...</h2>
                </center>
                <div className="Company_Logos">
                    <center>
                        <img className="Regular" src= {GE} alt="" />
                        <img className="Regular"src= {Goldman_Sachs} alt="" />
                        <img className="Regular" src= {Meta} alt="" />
                        <img className="Regular" src= {Eversource} alt="" />
                        <img className="Regular" src= {GD} alt="" />
                        <img className="Wide_Logo" src= {MT} alt="" />
                        <img className="Wide_Logo" src= {Greenbox} alt="" />
                    </center>
                </div>
            </div>
        </div>
    );
}
 
export default Home;