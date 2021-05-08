import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput} from  'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {LinearGradient} from 'expo-linear-gradient'
import DashScreen from './dashboard'
import HelpScreen from './Help'
import DeleteScreen from './deleteScreen'
import CheckScreen from './check'
function HomeScreen({navigation}) {
   return(
      <LinearGradient
       colors={['rgb(255,228,196)', 'rgb(123,104,238)']}
       style={{flex:1, backgroundColor:'rgb(123,104,238)'}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text
          style={{fontSize:50, color:'white', justifyContent:'center', alignItems:'center'}}>
            SalatKeeper
          </Text>
          <Text
          style={{fontSize:30, color:'white', justifyContent:'center', alignContent:'center', marginBottom:900}}>
            Guard your Prayer today!
          </Text>
         <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Dashboard")}>
           <Text
          style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'purple', marginLeft:7}}>
            Welcome
          </Text>   
            </TouchableOpacity>
        </View>
       </LinearGradient>
   )
}

function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate("Home")
  },3000)
  return(
     <ImageBackground style={{flex:1}} source={require('./cash.png')}/>
  )
}
function MessageScreen() {
  return(
    <LinearGradient
    colors={['rgb(255,228,196)', 'rgb(123,104,238)']}
    style={{flex:1, backgroundColor:'rgb(123,104,238)'}}>
    <View>
    <Text
       style={{fontSize:50, flex:1, color:'gold', justifyContent:'center', alignContent:'center'}}>Enter your email adress below</Text>
      <TextInput
       style={{fontSize:30, flex:1, color:'gold', justifyContent:'center', alignContent:'center', marginTop:300}}>Email...</TextInput>
       <TouchableOpacity
        style={styles.press}>
          <Text
       style={{fontSize:30, flex:1, color:'red', justifyContent:'center', alignContent:'center'}}>Submit</Text>
        </TouchableOpacity>
    </View>
    </LinearGradient>
  )
}

const Stack = createStackNavigator();
function MyStack() {
  return(
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
    <Stack.Screen name="Splash" component={SplashScreen}/>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Dashboard" component={DashScreen}/>
    <Stack.Screen name="Help" component={HelpScreen}/>
    <Stack.Screen name="Delete" component={DeleteScreen}/>
    <Stack.Screen name="Message" component={MessageScreen}/>
    <Stack.Screen name="Check" component={CheckScreen}/>
    </Stack.Navigator>
  )
  
}

export default function App() {
  return(
  
    <NavigationContainer>
    <MyStack/>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
   tap: {
     width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginLeft: 40,
    marginBottom: 750,
    color: 'white',
    marginRight: 40
   },
   spam: {
    width: "80%",
   borderRadius: 25,
   height: 50,
   alignItems: "center",
   justifyContent: "center",
   backgroundColor: "white",
   marginLeft: 40,
   marginTop: 300,
   color: 'white',
   marginRight: 40,
   margin:15
   },
   touch: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
    marginTop: -700,
    marginRight: 40,
    margin:15,
    width: "70%",
    backgroundColor: "rgb(255,228,196)",
    borderRadius: 25,
    height:50
   },
   press:{
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 740,
    backgroundColor: "white",
    marginLeft: 43
  }
})
