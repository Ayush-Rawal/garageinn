import React, { useState } from 'react'

export const CartContext = React.createContext()

export function CartWrapper(props) {
	// TODO: Implement max cart limit
	let [cart, setCart] = useState(new Set())
	function addToCart(plan) {
		if(!cart.has(plan)) {
			setCart(cart.add(plan))
		} else {
			return false
		}
	}
	function removeFromCart(plan) {
		if(cart.has(plan)) {
			cart.contents.delete(plan)
			setCart(cart)
		}
		return false
	}
	return (
		<CartContext.Provider value={{
			cart,
			addToCart,
			removeFromCart
			}}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartWrapper