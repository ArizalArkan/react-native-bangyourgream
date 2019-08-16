import React, { Component } from 'react'
import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation'
import  Home from '../screen/Home'
import Leaderboard from '../screen/Leaderboard'
import Drawer from '../screen/Drawer'
import Login from '../screen/Login'
import Register from '../screen/Register'

const DrawerNavigator = createDrawerNavigator(
    {
        Home: Home,
        Login: Login,
        Register: Register,
        Leaderboard: Leaderboard
    },
    {
        hideStatusBar: false,
        contentComponent: Drawer,
        contentOptions: {
          activeTintColor: '#fff',
          activeBackgroundColor: '#6b52ae',
        },
    },
)


export default createAppContainer(DrawerNavigator)
