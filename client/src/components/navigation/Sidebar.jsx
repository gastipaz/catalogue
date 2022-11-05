import React, {useContext} from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, BackgroundOpacity, ScrollLink } from '../elements/SidebarElements'
import {BiSearchAlt} from 'react-icons/bi'
import FilterContext from '../elements/context/FilterContext';

const Sidebar = ({isOpen, toggle, pathname}) => {

  const {handleChange} = useContext(FilterContext)

  return (
    <div>
      <BackgroundOpacity isOpen={isOpen} onClick={toggle}/>
      <SidebarContainer isOpen={isOpen}>
          <Icon onClick={toggle}>
              <CloseIcon/>
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  {pathname === '/catalog' &&
                    <div className="formContainer">
                        <form className='searchForm' method='post' id='searchForm' onScroll={(event)=> event.preventDefault()}>
                            <input className='searchInput' type="text" placeholder='Search' name='search' required 
                            onChange={(event)=>handleChange(event)}/>
                        </form>
                        <BiSearchAlt style={{color: "gray"}}/>
                    </div>}
                  <SidebarLink to="/" onClick={toggle}>
                    Home
                  </SidebarLink>
                  <SidebarLink to="/catalog" onClick={toggle}>
                    Catalog
                  </SidebarLink>
                  {pathname !== "/" && 
                    <ScrollLink smooth to="/#aboutus" pathname={pathname}>
                        About us
                    </ScrollLink>}
                  <SidebarLink to="/cart" onClick={toggle}>
                    Cart
                  </SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
    </div>
  )
}

export default Sidebar