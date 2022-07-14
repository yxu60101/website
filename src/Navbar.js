import COA from './COA.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar"> 
        <img src={ COA } alt="" style={{width: '45px', height: 'auto'}}/>
            <h1>Theta Tau 
                <br />
                <h2>Mu Gamma Chapter</h2>
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Rush" >Rush</Link>
                
                
                <div className='dropdown'>
                    <Link to="/Brothers">Brothers</Link>
                    <div className='dropdown-menu'>
                        <Link to="/Brothers" className="dropdown-select" style={{top: "5px"}}>Actives</Link>
                        <br />
                        <Link to="/Alumni" className="dropdown-select">Alumni</Link>
                        <br />
                        <Link to="/FamilyTree" className="dropdown-select" style={{top: "-5px"}} >Family Tree</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;