import React from 'react';
import { Box, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import styles from "./navbar.module.css";
import {FiDollarSign, FiTag, FiUser, FiGift, FiSettings} from 'react-icons/fi';
import {TbDiscount} from 'react-icons/tb';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineQuestionCircle} from 'react-icons/ai';
import { navlinks } from "./navlinks.js";
import { NavLink, useNavigate} from 'react-router-dom';
import Router from '../../../Routers/Admin/AdminRouter';
import logo from "../Images/logo.png";
import { activeStyle } from './activeStyles';
import { noActiveStyle } from './activeStyles';
import { useEffect } from 'react';







const NavbarAdmin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.document.title = "Welcome Admin";
  },[])


  return (<>
    <Box className={styles.container}>
        {/* side navbar */}
        <Box className={styles.sideNavbar}>
            <Box className={styles.box}>
                  <Image src={logo} className={styles.navbarImg} />
                  <Text className={styles.name}>HomeDecor</Text> 
            </Box>
            
            {/* navlinks */}
            <Box className={styles.sideIcons}>
             {navlinks.map((nav, index) => {
              const {to, title} = nav;
               return <NavLink key={index} to={to}   style={({isActive})=>(isActive?activeStyle:noActiveStyle)} end>
                 
                   {(index===0 && <FiDollarSign className={styles.reactIcons}/>) || (index===1 && <FiTag className={styles.reactIcons}/>) || (index===2 && <FiUser className={styles.reactIcons}/>) || (index===3 && <TbDiscount className={styles.reactIcons}/>) || (index===4 && <FiGift className={styles.reactIcons}/>) || (index===5 && <HiOutlineCurrencyDollar className={styles.reactIcons} />) || (index===6 && <FiSettings className={styles.reactIcons}/>)}
                   <Text className={styles.sideNames}>{title}</Text>
                  
                </NavLink>
             })}
             
            </Box>
            <hr style={{borderTop:"1px solid rgba(27, 31, 35, 0.15)"}}/>
        </Box>
          
        {/* search top navbar */}
        <Box className={styles.topNavbarBox}>
          <Box className={styles.topNavbar}>
          
            <IoMdNotificationsOutline className={styles.icons}/>
            <AiOutlineQuestionCircle className={styles.icons}/>
            <Menu>
              
             
               <MenuButton>
                <Image src={logo} alt="homedecor" className={styles.sideImage}/>
              </MenuButton>
              
              <MenuList mr="1.5rem" minW="0" w={'150px'}>
                
                <MenuItem  className={styles.edit_box} onClick={()=>navigate("/signin")}>
                  <FiUser className={styles.reactIcons} />
                  <Text>Sign Out</Text>
                </MenuItem>
                <MenuItem className={styles.edit_box}>
                  <FiSettings className={styles.reactIcons} />
                  <Text>Setting</Text>
                </MenuItem>
              
              </MenuList>
            </Menu>
          </Box>
          
          {/* All the routers  here */}
          <Box className={styles.content}>
          
           <Router />
          
          </Box>
        </Box>
    </Box>
    </>
  )
}

export default NavbarAdmin;
