import React from 'react'
import {View,FlatList} from 'react-native'
import data from '../data.json'// takes data from data.json
import ListItem from './ListItem'

const List = (item) => {
    //keyExtractor for indexing
    //data comes from data.json
    //rendering all data inside ListItem
    return(
        <View>
            <FlatList
                keyExtractor={(item,index) => index.toString()}
                data={data}
                renderItem={({item}) => <ListItem myData={item}/>} 
            />

        </View>
    )
}

export {List} 