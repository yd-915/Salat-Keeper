import React from 'react'
import {ImageBackground,Text, TouchableOpacity, View, StyleSheet} from 'react-native'
const image = { uri: "https://wallpapertag.com/wallpaper/full/0/6/3/49612-mountains-wallpaper-1920x1080-for-android-40.jpg" };
 export default function ReachScreen() {
   return(
    <ImageBackground
    source={image} style={styles.image}>
      <View style={{flex:1, justifyContent:'center', alignItems: 'center', }}>
   
        <Text style={{fontSize:50, color:'white', alignItems:'center', justifyContent:'center'}}>Contact Us</Text>
        <TouchableOpacity style={{fontSize:50, color:'white', alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:20, color:'rgb(0,191,255)', alignItems:'center', justifyContent:'center'}}>help@salatkeeper.com</Text>
        </TouchableOpacity>

      </View>
      </ImageBackground>
   )
 }

const styles = StyleSheet.create({
    image:{
        flex:1,
        resizeMode: 'cover',
        justifyContent:'center'
      },
})
