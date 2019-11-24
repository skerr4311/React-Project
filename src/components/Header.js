//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//create component
const Header = () => {
    const { textStyling, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyling}>Cars</Text>
        </View>
    );
}

//styling for given component
const styles = {
    textStyling: {
        fontSize: 22
    },

    viewStyle: {
        backgroundColor: 'gainsboro',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
        //paddingTop: 25 (for iphone)
    }
};

//make component available to other components
export default Header;