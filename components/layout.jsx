import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'

export default function (props) {
	return (
		<React.Fragment>
			<Header/>
			{props.children}
			<Footer />
		</React.Fragment>

	)
}

function Header() {
	return (
		<React.Fragment>
		<Head>
		<meta charSet="utf-8" />
<link rel="apple-touch-icon" sizes="76x76" href="/Img/GarageInn.png"/>
<link rel="icon" type="image/png" href="/Img/GarageInn.png"/>
<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<title>GarageInn</title>
<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />

		<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
		</Head>
		<Navbar/>
		</React.Fragment>
	)
}

function Footer() {
	return (
		<footer className="footer footer-black footer-big">
		<div className="container">

			<div className="content">
				<div className="row">
					<div className="col-md-6">
						<h5>About Us</h5>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, neque doloremque eligendi eaque at fuga unde atque alias quasi a! Sequi tenetur culpa cum, natus sit fugiat iste qui ipsum?</p>
					</div>

					
					<div className="col-md-6">
						<h5>Contact Us</h5>
						<p><b>Call:</b><a href="tel:8648008002"> +91 8648008002</a></p>
						<p><b>Mail:</b><a href="mailto:info@garagein.in"> info@garagein.in</a></p>
					</div>

					
				</div>
			</div>


			<hr />

			<ul className="pull-left">
				<li>
					<a>
					   Privacy Policy
					</a>
				</li>
				<li>
					<a>
						Refund Policy
					</a>
				</li>
				
			</ul>

			<div className="copyright pull-right">
				Copyright &copy; <script>document.write(new Date().getFullYear())</script> GarageInn.
			</div>
		</div>
	</footer>	
	)
}

