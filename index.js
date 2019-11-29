//import libraries
import React from "react";
import { View, AppRegistry } from "react-native";

import Header from './src/components/Header';
import CarList from './src/components/CarList';

//create component
const App = () => {
    return (
    <View style={ {flex: 1} }>
        <Header title={'Cars'}/>
        <CarList />
    </View>);
    //this fuction must return an object that 
    //describes what it should look like on a device
}

//render component to screen
AppRegistry.registerComponent('cars', () => App); 