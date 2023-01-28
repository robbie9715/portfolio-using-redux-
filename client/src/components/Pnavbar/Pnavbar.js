import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import log from '../../assets/icons/figma/log.svg'
import searcher from'../../assets/icons/figma/searcher.svg'
import ring from'../../assets/icons/figma/ring.svg'
import bell from'../../assets/icons/figma/bell.svg'
import '../../assets/scss/Pnavbar.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLogout } from '../../redux/actions'
import { useSelector } from 'react-redux';



function Pnavbar(){
    const dispatch =useDispatch();
    const auth = useSelector(state => state.isAuthenticated)
    

    const handleSubmit = (e) => {
      e.preventDefault();
      {
        dispatch(getLogout());
      }
    }

  return (
    
    <Navbar className="Navbar" collapseOnSelect expand="md" variant="dark" >
      <img className="log" src={log} alt="log"/>
    <Container >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
            <div className="LB">
                <div class="searchPanel">
                    <img className="searcher" src={searcher} alt="searcher"/> 
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        </Nav>
        { auth? (
      <>
        <Nav className="me-auto ms-auto">
          <Nav.Link  href="#features">Explore</Nav.Link>
          <NavDropdown title="community" id="collasible-nav-dropdown" bg="dark" variant="dark">
            <NavDropdown.Item href="#action/3.1">Takens</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                <div className="down-2">
                    <p >NFTs</p>
                    <p className="new">new</p>
                </div>
                
            
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">Messages</Nav.Link>
          <Nav.Link href="#deets">Earn</Nav.Link>
        </Nav>
        <div className="logpad" >
            <div className="RB">
                <div className="numPanel">
                    <p className="NT3 white">625.00</p>
                    <p className="NT3 grey">cUSD</p>
                    <div className="numPanel-ch">
                    <img className="ring" src={ring} alt="ring"/>
                        <p className="NT3 white">0x678...469jg</p>
                    </div>
                </div>
                    <div className="circle"/>
                    <div className="bell">
                        <img src={bell} alt="bell"/>
                    </div>
            </div>
                <div className="logpad"
                  onClick={handleSubmit}>
                    <Link className="btn-log NT2" to="/login" >
                      LOG OUT
                    </Link>
                </div>
        </div>
        </>
          ):(
        <Nav className="logpad">
          <Link className="btn-log NT2" to="/login" >
            LOG IN
          </Link>
        </Nav>
        )}
      </Navbar.Collapse>
    </Container>
  </Navbar>
 );  
}  
    


export default Pnavbar
