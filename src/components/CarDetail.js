import React from 'react';
import { View, Text, Image } from 'react-native';

import Item from './Item';
import ItemSection from './ItemSection';
import Button from './Button';

const CarDetail = ({ brand }) => {
    const { headerContainer, headerText, imageStyle } = styles;

    return (
    <Item>
        <ItemSection>
            <View style={headerContainer}>
                <Text style={headerText}>{brand.brand}</Text>
                <Text style={headerText}>{brand.model[0].name}</Text>
            </View>    
        </ItemSection> 
        <ItemSection>
            <Image
                style={imageStyle}
                source={{ uri: brand.model[0].image }} 
            />
        </ItemSection>
        <ItemSection>
            <Button />
        </ItemSection>
    </Item>
    )
}

const styles = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 10,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: 'black'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: 0
    }
};

export default CarDetail;