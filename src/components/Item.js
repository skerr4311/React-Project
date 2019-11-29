import React from 'react';
import { View, Text } from 'react-native';

const Item = (props) => {
    return (
    <View style={styles.viewStyle}>
        {props.children}
    </View>);
};

const styles = {
    viewStyle: {
        borderWidth: 1,
        borderColor: 'gainsboro',
        shadowColor: 'black',
        borderBottomWidth: 0,
        shadowOffSet: { width: 1, height:1 },
        opacity: 0.8,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Item;