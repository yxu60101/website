import COA from './COA.png'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Sections">
                <div className="Section1">
                    <div className="Section1_Title">
                        <img src= {COA} alt="" />
                        <h1>Theta Tau</h1>
                    </div>
                    <h2>Mu Gamma Chapter</h2>
                    <h2>University At Buffalo</h2>
                </div>
                <div className="Section2">
                    <h1>General</h1>
                    <h2>National Theta Tau</h2>
                    <h2>Executive Board</h2>
                    <h2>Committee Heads</h2>
                </div>
                <div className="Section3">
                    <h1>Contact</h1>
                    <h2>testing123@gmail.com</h2>
                    <h2>Instagram</h2>
                    <h2>LinkedIn</h2>
                </div>
             </div>
        </div>

    );
}
 
export default Footer;