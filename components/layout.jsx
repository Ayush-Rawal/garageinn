import React from 'react'
import Head from 'next/head'

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

{/* <!--     Fonts and icons     --> */}
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons&display=swap" />

{/* <!-- CSS Files --> */}
<link href="/css/masterStyle.css" rel="stylesheet"/>
		</Head>
		<Navbar/>
		</React.Fragment>
	)
}

function Footer() {
	return (
		<footer class="footer footer-black footer-big">
		<div class="container">

			<div class="content">
				<div class="row">
					<div class="col-md-6">
						<h5>About Us</h5>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, neque doloremque eligendi eaque at fuga unde atque alias quasi a! Sequi tenetur culpa cum, natus sit fugiat iste qui ipsum?</p>
					</div>

					
					<div class="col-md-6">
						<h5>Contact Us</h5>
						<p><b>Call:</b><a href="tel:8648008002"> +91 8648008002</a></p>
						<p><b>Mail:</b><a href="mailto:info@garagein.in"> info@garagein.in</a></p>
					</div>

					
				</div>
			</div>


			<hr />

			<ul class="pull-left">
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

			<div class="copyright pull-right">
				Copyright &copy; <script>document.write(new Date().getFullYear())</script> GarageInn.
			</div>
		</div>
	</footer>	
	)
}

function Navbar() {
	return (
		<nav class="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll" color-on-scroll="100" id="sectionsNav">
				<div class="container">
					{/* <!-- Brand and toggle get grouped for better mobile display --> */}
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<img href="./index.html" class="navbar-brand" src="/Img/GarageInn.png" />
						<a href="./index.html" class="navbar-brand">Garagein</a>
					</div>
		
					<div class="collapse navbar-collapse">
						<ul class="nav navbar-nav navbar-right">
								<li>
										<a href="index.html">
												<i class="material-icons">home</i>Home
										</a>
									</li>
							<li class="dropdown" id="headerNavigationItems">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">
									Our Services
									<b class="caret"></b>
								</a>
								<ul class="dropdown-menu dropdown-with-icons">
									<li>
										<a href="#headers">
											Car Service
										</a>
									</li>
									<li>
										<a href="#features">
											Dent Paint 
										</a>
									</li>
									<li>
										<a href="#blogs">
											Car Cleaninig
										</a>
									</li>
									<li>
										<a href="#teams">
											Wheel Care 
										</a>
									</li>
									<li>
										<a href="#projects">
											AC Service
										</a>
									</li>
									<li>
										<a href="#pricing">
											Car Wrapping
										</a>
									</li>
									<li>
										<a href="#testimonials">
											Nano Coating
										</a>
									</li>
									
		
								</ul>
							</li>
							<li>
								<a href="index.html">
									Blog
								</a>
							</li>
							<li>
								<a href="index.html">
									Partner
								</a>
							</li>
							<li>
								<a href="index.html">
									Refer and Earn
								</a>
							</li>
							<li>
								<a href="index.html">
									Car Granth
								</a>
							</li>
							<li class="dropdown" id="headerNavigationItems">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown">
										More
										<b class="caret"></b>
									</a>
									<ul class="dropdown-menu dropdown-with-icons">
										<li>
											<a href="#headers">
												About Us
											</a>
										</li>
										<li>
											<a href="#features">
												Contact Us 
											</a>
										</li>
										<li>
											<a href="#blogs">
												FAQs
											</a>
										</li>
										<li>
											<a href="#teams">
												Corporate 
											</a>
										</li>
									</ul>
								</li>
							<li>
								<a class="btn btn-danger btn-round">
									<i class="material-icons">fingerprint</i> Login
								</a>
							</li>
		
							<li class="button-container">
								<a class="btn btn-primary btn-round">
									<i class="material-icons">shopping_cart</i> Buy Now
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
	)
}