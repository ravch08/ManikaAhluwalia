import { SocialIcons } from "../utils/helper";

const CopyrightBar = () => {
	return (
		<div className="copyright-bar">
			<div className="container">
				<div className="copyright-wrapper">
					<p>
						©2022 <span>MAIKA AHLUWALIA</span>. All Rights Reserved
					</p>
					<SocialIcons />
				</div>
			</div>
		</div>
	);
};

export default CopyrightBar;
