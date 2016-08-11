import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = ({children}) => (
	<div>
		<Header />

		<div className="content-container">
			{children}
		</div>

		<div className="modal-container">
			{/* modal here */}
		</div>

		<Footer />
	</div>
);


export default Layout;
