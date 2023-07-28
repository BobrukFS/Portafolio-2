
import React, { useState } from 'react';
import ButtonMenu from './ButtonMenu/ButtonMenu';
import Nav from './Nav/Nav';
function Header() {
	const [menuDesplegado, setMenuDesplegado] = useState(false);

	const handleButtonMenuClick = () => {
	  setMenuDesplegado(!menuDesplegado);
	};

	const handleLinkClick = () => {
		setMenuDesplegado(false);
	  };

	return (
		<>
			<div className='header'>
				<div className="header__logo">Bobruk</div>
				<ButtonMenu onClick={handleButtonMenuClick}></ButtonMenu>
				<Nav menuDesplegado={menuDesplegado} onLinkClick={handleLinkClick}></Nav>
			</div>
		</>
	);
}
export default Header;

