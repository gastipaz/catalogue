import React, {useContext} from 'react'
import {Nav, NavbarContainer, NavLogo, NavLink, MobileIcon, NavMenu, ScrollLink} from '../elements/NavbarElements'
import {Title, Paragraph} from '../elements/PagesElements'
import {FaBars, FaShoppingCart} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import FilterContext from '../elements/context/FilterContext'
import CartContext from '../elements/context/CartContext'
import './Navbar.css'

const Navbar = ({ toggle, pathname, navigate }) => {

    const {handleChange} = useContext(FilterContext)
    const {inCart} = useContext(CartContext)

return (
    <div>
        <Nav pathname={pathname} id='top'>
            <NavbarContainer>
                <NavLogo className = "logo" to="/" pathname={pathname}>
                    <Title className='logoFont'>Company</Title>
                </NavLogo>
                <MobileIcon onClick={toggle} pathname={pathname}>
                    <FaBars className='sidebarIcon'/>
                </MobileIcon>
                <NavMenu>
                    <div className="formContainer">
                        <form className='searchForm' method='post' id='searchForm' onScroll={(event)=> event.preventDefault()} onSubmit={(event)=> event.preventDefault()}>
                            <input className='searchInput' type="text" placeholder='Search' name='search' required 
                            onClick= {pathname !== '/catalog' ? (()=> navigate('catalog')) : null} 
                            onChange={(event)=>handleChange(event)}/>
                        </form>
                        <BiSearchAlt style={{color: "gray"}}/>
                    </div>
                    <NavLink to="/catalog" pathname={pathname}>
                        Catalog
                    </NavLink>
                    {pathname !== "/" && 
                    <ScrollLink smooth to="/#aboutus" pathname={pathname}>
                        About us
                    </ScrollLink>}                
                    <NavLink to="/cart" pathname={pathname}>
                        <div className='cart-logo-wrapper'>
                            <FaShoppingCart/>
                            {inCart?.length > 0 &&
                                <div className='cart-counter'>
                                    <Paragraph className='count'>{inCart?.length}</Paragraph>
                                </div>}
                        </div>
                    </NavLink>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </div>
)
}

export default Navbar