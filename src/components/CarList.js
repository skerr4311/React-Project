import React, {Component} from "react";
import { View, Text } from 'react-native';
import axios from 'axios';

import CarDetail from './CarDetail';

class CarList extends Component {
    state = { carList: [] };

    componentDidMount() {
        axios.get('https://givecars.herokuapp.com').then((response) => {
            this.setState({ carList: response.data });
        });
    }

    renderList = () => {
        return this.state.carList.map(brand => {
            return <CarDetail key={brand.model[0].name} brand={brand} />
        })
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderList()}
            </View>
        );
    }
}

export default CarList;