import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import ReachScreen from './contact'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
 
function HelpScreen({navigation}) {
      return(
       <LinearGradient
       colors={['rgb(218,165,32)', 'rgb(255,182,193)']}
       style={{flex:1, backgroundColor:'rgb(255,182,193)'}}>
         <View style={styles.container}>
           <Text style={{fontSize:50, color:'white', justifyContent:'center', textAlign:'center',letterSpacing: 10,marginTop: 45,}}>FAQ</Text>
           <Text style={styles.bold}>Is the app completly free?</Text>
           <Text style={styles.light}>The app is free to download however the pro version would cost 3.99 CAD.</Text>
           <Text style={styles.bold}>Can I use the app offline?</Text>
           <Text style={styles.light}>Most features work offline but to get accurate times from your location
         internet connection is required.</Text>
           <Text style={styles.bold}>How do I change my location?</Text>
           <Text style={styles.light}>The app changes location automatically if you have internet access.</Text>
           <Text style={styles.bold}>Can I request a specific athan?</Text>
           <Text style={styles.light}>You can make any suggestions through our feedback page found in the settings.</Text>
           <Text style={styles.bold}>Got a specific question? Email us at help@salatkeeper.com</Text>
           <Text style={styles.light}>(Link is in the contact page).</Text>
           <TouchableOpacity
             onPress={() => navigation.navigate("Reach")}
             style={{borderRadius: 50, justifyContent:'center', alignItems:'center'}}>
               <Text style={{fontSize:20, color:'white', justifyContent:'center', textAlign:'center'}}>Contact</Text>
             </TouchableOpacity>
   
         </View>
       </LinearGradient>
      )
    }
const Stacks = createStackNavigator();
function MyStacks() {
    return(
      <Stack.Navigator>
      <Stack.Screen name='Help' component={HelpScreen}/>
      <Stack.Screen name='Reach' component={ReachScreen}/>
    </Stack.Navigator>
    )
}

export default function App() {
  return(
    <NavigationContainer>
      <MyStacks/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  bold:{
    marginTop: 20,
    flex:1,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent:'flex-start',
    alignItems:'flex-end',
    marginRight:90
  },
  light:{
    flex:1,
    fontSize: 14,
    fontWeight: 'normal',
    justifyContent:'flex-start',
    alignItems:'flex-end',
    marginRight:10
    
  }
})
