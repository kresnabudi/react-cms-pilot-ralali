import React 		from 'react'
import { Provider } from 'react-redux'
import ReactDOM 	from "react-dom";
import store 		from "./store"
import BasicRouter 	from './BasicRouter'

ReactDOM.render(
	<Provider store={store}>
		<BasicRouter />
	</Provider>,
	document.getElementById('app')
)