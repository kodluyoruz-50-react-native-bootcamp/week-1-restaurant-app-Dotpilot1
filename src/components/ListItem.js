import React from 'react'
import {SafeAreaView,StyleSheet,View,Text,Dimensions,Image} from 'react-native'

const ListItem = props => {
     
    //Image-> at the most top, we take it as prop from data
    //Content-> Name and then likes
    // if it is popular we take it as ternary operator..
    //at the very bottom location..

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#cff6cf'}}>
           
            <View style={styles.outerFrame}>
                <Image style={styles.imageFrame} source={{uri:props.myData.image}} />

                <View style={styles.contentFrame}>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.nameText}>{props.myData.name}</Text>
                            {
                            props.myData.isPopular ?
                            <Image style={{width:25,height:25,marginLeft:8}} source ={require('../assets/hot.png')} /> 
                            : <Text></Text>
                            }
                        </View>

                        <Text style={styles.locationText}>{props.myData.location}</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:27,height:27}} source={require('../assets/heart.png')}/>
                        <Text style={{fontSize:20}}>{props.myData.likes}</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        outerFrame:{
            flex:1,
            borderRadius:7,
            backgroundColor:'#cfe5cf',
            margin:5
        },
        imageFrame:{
            flex:1,
            height:250,
            resizeMode:'cover',
            width:Dimensions.get('window').width*0.94,
            borderRadius:7,
            margin:5
        },
        contentFrame:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#cfe5cf',
            padding: 6,
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
        },
        nameText:{
            marginLeft:5,
            padding:2,
            fontSize:20,
            fontWeight: 'bold',
            color:'#204051',
            fontFamily: 'Open Sans',
        },
        locationText:{
            marginLeft:6, 
            marginBottom:10,
            color:'#204051'
        },

    });

    export default ListItem