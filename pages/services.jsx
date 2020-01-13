import React, { useState, Fragment, useEffect } from 'react'
import Layout from '../components/layout'
import api from "../utils/api"

export default function services() {
	let [pricings, setPricings] = useState([{name: "Loading Plan"}, {name: "Loading Plan"}, {name: "Loading Plan"}])
	useEffect(fetchPricing)
	return (
		<Layout>
			{!Object.keys(pricings).length && PricingLoader()}
			{Object.keys(pricings).length && 
				<div container spacing={5}>
					{pricings.map(el => (
						<div item>
							{PricingCard(el)}
						</div>	
					))}
				</div>
			
			}
			<div>
				<ServiceCard image="/poor_people.png" heading="asdasd" body="asdasda"/>
				<ServiceCard image="/poor_people.png" heading="asdsad" body="asdasda"/>
				<ServiceCard image="/poor_people.png" heading="sadasd" body="asdasda"/>
				<ServiceCard image="/poor_people.png" heading="sadasd" body="asdasda"/>
			</div>
		</Layout>
	)
	
	function fetchPricing(cart) {
		api.get("/getPricing")
		.then(res => {
			setPricings(res.data)
		})
	}
}

function PricingCard(plan) {
	let classes = {}
	return (
		<div className={classes.card}>
			<div>
				<div>
					<p>
						{plan.name}
					</p>
					<p gutterBottom >
						{plan.pricing}
					</p>
					
						<div>
						{/* <Clear /> */}
						<p>
							Lele
							</p>
						</div>
				</div>
			</div>
			<div>
				<button size="small">
					Add to Cart
				</button>
			</div>
		</div>
	)
}

function PricingLoader() {
	return (
		<p>Fetching pricing...</p>
	)
}

function ServiceCard(props) {
	return (
		<div>
			<div>
				<div>
					<p gutterBottom variant="h5" component="h2">
						{props.heading}
					</p>
					<p variant="body2" color="textSecondary" component="p">
						{props.body}
					</p>
				</div>
			</div>
			<div>
				<button size="large">
					<AddShoppingCart/>
					Add to Cart
					</button>
			</div>
		</div>
	)
}