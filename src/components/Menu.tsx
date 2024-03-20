import React, {useState, useEffect, useRef} from 'react';
import { Link} from "react-router-dom";
import {DropdownBar, MenuButton, MenuStyle} from './styled/Menu.styled';

//const myFunction2 = (data: string) => {}

const Menu = () => {

  const [open, SetOpen] = useState(false);
  
  let menuRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let handler = (e: any) => {
        if(!menuRef.current?.contains(e.target)){
          console.log('lucien')
          SetOpen(false);
        }

    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [])

  return (
  <MenuStyle> 
    <MenuButton ref = {menuRef} onClick = {()=>{SetOpen(!open)}} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="4 4 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/></MenuButton>
    <DropdownBar className = {`dropdown ${open? 'active' : 'inactive'}`} >
      <Link id = 'menuitem1' to = "/"> ILLUSTRATIONS <br></br> | </Link>
      <Link id = 'menuitem2' to = "/"> ANIMATIONS <br></br> | </Link>
      <Link id = 'menuitem3' to = "/"> CHAR DESIGNS <br></br> | </Link>
      <Link id = 'menuitem4' to = "/"> COMMISSIONS <br></br> | </Link>
      <Link id = 'menuitem5' to = "/"> ABOUT </Link>
    </DropdownBar>
  
  </MenuStyle>
  )
}

export default Menu