import React, { useState, Fragment, useEffect } from 'react'
import Layout from '../components/layout'
import {
	Card, CardActionArea, CardActions, 
	CardContent, CardMedia, Button,
	Typography
} from '@material-ui/core';
import {Clear, Check, AddShoppingCart} from "@material-ui/icons"

export default function services() {
	[pricings, setPricings] = useState({})
	useEffect(fetchPricing)
	return (
		<Layout>
			{!Object.keys(pricings).length && PricingLoader()}
			{Object.keys(pricings).length && pricings.map(el => PricingCard(el))}
			<ServiceCard image="" heading="" body=""/>
			<ServiceCard image="" heading="" body=""/>
			<ServiceCard image="" heading="" body=""/>
			<ServiceCard image="" heading="" body=""/>
		</Layout>
	)
	
	function fetchPricing(cart) {
		const data = api.get("/services")
		console.log(data)
		return data
	}
}


function PricingCard(plan) {
	return (
		<Card>
			<CardActionArea>
				<CardContent>
					<Typography component="h3">
						{plan.name}
					</Typography>
					<Typography gutterBottom variant="h5" component="p">
						{plan.pricing}
					</Typography>
					{plan.features.map(el => (
						<Fragment>
						el.icon === "check" && <Check />
						el.icon === "cross" && <Clear />
						<Typography>
							{el.content}
						</Typography>
						</Fragment>
					))}
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small">
					Add to Cart
				</Button>
			</CardActions>
		</Card>
	)
}

function PricingLoader() {
	return (
		<p>Fetching pricing...</p>
	)
}

function ServiceCard(props) {
	return (
		<Card>
			<CardActionArea>
				<CardMedia
				 component="img"
				 alt={props.heading}
				//  height="140"
				 image={props.image}
				 title={props.heading} 
				/>

				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.heading}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.body}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="large">
					<AddShoppingCart/>
					Add to Cart
					</Button>
			</CardActions>
		</Card>
	)
}