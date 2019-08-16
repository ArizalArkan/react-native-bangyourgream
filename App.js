import React, { Component } from 'react'
import MainNavigator from './src/public/MainNavigator'
import { Provider } from 'react-redux'
import store from './src/public/redux/store'

class App extends Component {
    render(){
        return(
            <Provider store={store}>
            <MainNavigator screenProps={this.state} />  
            </Provider>
        )
    }
}

export default App