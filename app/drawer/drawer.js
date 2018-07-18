import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import User from '../user/user';
import Logout from '../user/logout';
import Home from '../homepage';
import App from '../../App';
const DrawerPage = DrawerNavigator(
    {
        Welcome : {

              path: '/',
              screen : App,
        },
        Logout : {

          path:'/sent',
          screen : Logout,

        },
    },
    {
          initialRouteName : 'Welcome',
          drawerPosition : 'left'

    }

);
export default DrawerPage;
