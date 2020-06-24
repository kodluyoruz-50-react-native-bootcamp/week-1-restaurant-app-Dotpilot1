import React from 'react'
import {SafeAreaView,Text,View,Image} from 'react-native'
import {List,Header} from './components/index'

const App = () => {
    //Header-title prop added.
    //List comes as we imported.
    return (
        <SafeAreaView style={{flex:1}}>
            <Header title="Restaurants List"/> 
            <List/>
        </SafeAreaView>
    )
}

export default App