import React, { useState } from "react";
import { Link } from "react-router-dom";

import SocialIcons from "./SocialIcons";

const Sidebar = () => {
	const [isSidebar, setIsSidebar] = useState(false);

	const openSidebarHandler = () => (!isSidebar ? setIsSidebar(true) : setIsSidebar(false));
	const closeSidebarHandler = () => (isSidebar ? setIsSidebar(false) : setIsSidebar(true));

	const sidebarClass = isSidebar ? `open sidebar` : "sidebar";

	return (
		<React.Fragment>
			<div className="hamburger-menu" onClick={openSidebarHandler}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>

			<div className={sidebarClass}>
				<div className="sidebar-wrapper">
					<nav aria-labelledby="Secondary Navigation">
						<ul className="nav-list">
							<li className="nav-item">
								<Link to="#!" className="nav-link">
									HOME
								</Link>
							</li>
							<li className="nav-item">
								<Link to="#!" className="nav-link">
									WOMEN's
								</Link>
							</li>
							<li className="nav-item">
								<Link to="#!" className="nav-link">
									MEN's
								</Link>
							</li>
							<li className="nav-item">
								<Link to="#!" className="nav-link">
									THE MONOGRAM SHOP
								</Link>
							</li>
							<li className="nav-item">
								<Link to="#!" className="nav-link">
									GIFTING
								</Link>
							</li>
						</ul>
					</nav>

					<SocialIcons />

					<Link to="#!" className="close-sidebar" onClick={closeSidebarHandler}>
						<span>close</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" fill="#fff" viewBox="0 0 352 512">
							<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
						</svg>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Sidebar;
