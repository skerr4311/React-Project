import React, {Component} from "react";
import { View, Text } from 'react-native';
import axios from 'axios';

class CarList extends Component {
    state = { carList: [] };

    componentDidMount() {
        axios.get('https://givecars.herokuapp.com').then((response) => {
            this.setState({ carList: response.data });
        });
    }

    renderList = () => {
        return this.state.carList.map(brand => {
            return <Text>{brand.model[0].name}</Text>
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