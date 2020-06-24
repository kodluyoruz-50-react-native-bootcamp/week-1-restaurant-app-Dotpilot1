import React from 'react'
import {SafeAreaView,Text,View,StyleSheet} from 'react-native'

const Header = props => {
    //designated a header - prop title for any changes..
    return(
        <SafeAreaView style={{backgroundColor:'#cff6cf'}}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
        header:{
            flex:1,
            backgroundColor: '#fb7813',
            padding :20 ,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopStartRadius:7,
            borderTopEndRadius:7,
            marginLeft:5,
            marginRight:5
         },
        headerTitle:{
            color: '#07031a',
            fontSize: 35,
        }
});

export {Header}