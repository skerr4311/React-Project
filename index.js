//import libraries
import React from "react";
import {Text, AppRegistry} from "react-native";

import Header from './src/components/Header';

//create component
const App = () => {
    return <Header />;
    //this fuction must return an object that 
    //describes what it should look like on a device
}

//render component to screen
AppRegistry.registerComponent('cars', () => App); 