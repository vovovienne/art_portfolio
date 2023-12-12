import React, {useState, useEffect, useRef} from 'react';
import { Link} from "react-router-dom";
import {DropdownBar, MenuButton, MenuStyle} from './styled/Menu.styled';

//const myFunction2 = (data: string) => {}

const Menu = () => {

  const [open, SetOpen] = useState(false);
  
  let menuRef = useRef<HTMLDivElement>(null);

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
    <MenuButton ref = {menuRef} onClick = {()=>{SetOpen(!open)}}></MenuButton>
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