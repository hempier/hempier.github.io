import React from 'react'
// import Breadcrumb from '../components/Breadcrumb'
// import Categories from '../components/Categories'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default props => {
	console.log(JSON.stringify(props, null, 4)) 
	// const [ status, setStatus ] = useShoppingBag()
	return (
		<Layout>
			<div>{props.pageContext.page.title}	</div>
		</Layout>

	)
}