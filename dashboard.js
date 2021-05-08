import React, { useState, useEffect, useRef } from 'react'
import {View, Text, StyleSheet,TouchableOpacity,ImageBackground,Platform, Image} from 'react-native'
import {WebView} from 'react-native-webview'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
function DashScreen() {
  const navigation = useNavigation();
  return( 
     <ImageBackground
       source={{uri:'https://wallpapercave.com/wp/wp2006341.jpg'}}
       style={styles.face}>
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
     <Text style={{flex:1, marginTop:100, fontSize:50, color: 'white'}}>Dashboard</Text>
     <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Check")}>
        <Text 
         style={{fontSize:20, justifyContent:'center', alignItems:'center', color:'purple'}}>Check List</Text>
      </TouchableOpacity>
     </View>
     <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={{ height: 500, width: 700, backgroundColor:'transparent'}}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> 
                    <body>
                      <div id="baseDiv">${'<iFrame style="width: 452px; height: 658px; margin: 10px 50px; mmarginbottom: 90;border: 1px solid #ddd;" scrolling="no" src="https://www.islamicfinder.org/prayer-widget/"> </iFrame>'}</div> 
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
     </ImageBackground>
  )
}


function AboutScreen() {
  return( 
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <LinearGradient
    colors ={['rgb(65,105,225)','rgb(218,112,214)']}
    style ={{backgroundColor:'rgb(218,112,214)', flex:1}}>
      <Text style={{flex:1, fontSize:30, color:'white', justifyContent:'center', margin:10,alignItems:'center',marginTop: 60}}>Assalamualaikum dear brothers and sisters,</Text>
      <Text style={{flex:1, fontSize:11, color:'white', justifyContent:'center', alignItems:'center',margin: 10, marginBottom: 200}}>The religion of Islam is based on five pillars, with the second pillar being the 
    salah(prayer). The salah is the primary form of worship after the shahadah(declaration of faith).
    It's importance is so grand that our beloved Prophet (peace and blessings be upon him) mentioned it as the main
    point of difference between the Muslims and the disbelievers. 
    Jabir reported: The Prophet, peace and blessings be upon him, said, “Verily, between a man and idolatry and unbelief is abandoning the prayer.”
    
    Source: Ṣaḥīḥ Muslim 82
    
    Grade: Sahih (authentic) according to Muslim.
    With that being said, it has become unfortunate that many brothers and sisters particularly from the west are abandoning the salah
    and not taking heed, Allah's refuge is sought! And we see that it has become bad enough that a reminder 
    such as the hadith of the Prophet (peace and blessings be upon him) mentioned above is not enough for people to recommit 
    to this obligation. Here at Salat Keeper, we decided to offer an modern solution to help our brothers and sisters around the
    world get back to practicing this fundamental aspect of their religion.
</Text>
 </LinearGradient>
    </View>
  )
  }

const back = {uri:'https://wallpapertag.com/wallpaper/full/e/f/2/28983-amazing-night-sky-wallpaper-3840x2160-for-hd-1080p.jpg'};
function ProScreen() {

  return( 
   <ImageBackground
     source={back} 
     style={styles.back}>
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text
        style={{flex:1, justifyContent:'center', alignItems:'center', fontSize:50, color:'white', marginTop: 80}}>PRO</Text>
      <Text
        style={{flex:1, justifyContent:'center', alignItems:'center', fontSize:20, color:'white'}}>Smoother Experience!</Text>
      <Text
      style={{flex:1, justifyContent:'center', alignItems:'center', fontSize:20, color:'white'}}>With More Timezones!</Text>
      <Text
      style={{flex:1, justifyContent:'center', alignItems:'center', fontSize:20, color:'white'}}>And More Athans!</Text>
      <Text
       style={{flex:1, justifyContent:'center', alignItems:'center', fontSize:20, color:'white'}}>Early Access to new features!</Text>
      <Text style={{fontSize:50, color:'gold', alignItems:'center', justifyContent:'center', margin:40, marginBottom: 40}}>
        Coming Soon</Text>
    </View>
    </ImageBackground>
  )
}
const image = { uri: "https://wallpapertag.com/wallpaper/full/0/6/3/49612-mountains-wallpaper-1920x1080-for-android-40.jpg" };
 function ContactScreen() {
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

 Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
    
      function TimeScreen() {
      const [expoPushToken, setExpoPushToken] = useState('');
      const [notification, setNotification] = useState(false);
      const notificationListener = useRef();
      const responseListener = useRef();
    
      useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener);
          Notifications.removeNotificationSubscription(responseListener);
        };
      }, []);
    
      return (
        <LinearGradient
          colors={['#28AFCE', 'rgb(255,228,196)']}
          style={{flex:1, background:'rgb(255,228,196)'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text>Your expo push token: {expoPushToken}</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop:200}}>
         <Text style={{fontSize:30, color:'rgb(255,228,196)', justifyContent:'center', alignItems:'center', marginLeft:35, marginTop:30}}>Get notified so you don't forget to check your tasks! ( See "Dashboard") </Text>
         <Image 
          source={require('./noti-removebg-preview.png')}
          style={{justifyContent:'center', alignContent:'center', height: 300, width:300, marginTop:60}}></Image>
          </View>
          <TouchableOpacity
           style={{ width: "80%",
                    borderRadius: 25,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 240,
                    backgroundColor: "#28AFCE",
                    marginRight:0,
                    marginBottom:120}}
            onPress={async () => {
              await schedulePushNotification();
            }}>
            <Text
              style={{fontSize:20, color:'rgb(255,228,196)', justifyContent:'center', alignContent:'center',marginLeft:7}}>Set Notification</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
      );
    }
    
    async function schedulePushNotification() {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Checkup",
          body: 'Remember to check your todo list to see what you acheived today!',
        },
        trigger: { seconds: 7200, repeats:true},
      });
    }
  
    async function registerForPushNotificationsAsync() {
      let token;
      if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
      } else {
        alert('Must use physical device for Push Notifications');
      }
    
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    
      return token;
    }
  function HelpScreen() {
  const navigation = useNavigation();
    return(
     <LinearGradient
     colors={['#28AFCE', 'rgb(123,104,238)']}
     style={{flex:1, backgroundColor:'rgb(123,104,238)'}}>
       <View style={styles.container}>
         <Text style={{fontSize:50, color:'rgb(255,228,196)', justifyContent:'center', textAlign:'center',letterSpacing: 10,marginTop: 45,}}>FAQ</Text>
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
           onPress={() => navigation.navigate("Contact")}
           style={{borderRadius: 50, justifyContent:'center', alignItems:'center'}}>
             <Text style={{fontSize:20, color:'white', justifyContent:'center', textAlign:'center'}}>Contact</Text>
           </TouchableOpacity>
 
       </View>
     </LinearGradient>
    )
  }
  
const Tab = createBottomTabNavigator();
function MyTabs() {
return(
  <Tab.Navigator style={styles.tab}>
    <Tab.Screen name='Dashboard' component={DashScreen}/>
    <Tab.Screen name='About' component={AboutScreen} style={styles.screen}/>
    <Tab.Screen name='Pro' component={ProScreen} style={styles.screen}/>
    <Tab.Screen name='Contact' component={ContactScreen} style={styles.screen}/>
    <Tab.Screen name='Time' component={TimeScreen} style={styles.screen}/>
    <Tab.Screen name='Help' component={HelpScreen} style={styles.screen}/>
  </Tab.Navigator>
)
}
export default function App() {
 
  return(

      <MyTabs/>
  )
}

const styles = StyleSheet.create({
  tab: {
    flex:1,
    color:'transparent',
    backgroundColor:'red',
    borderRadius:10
  },
  screen:{
    backgroundColor:'white'
  },
  press:{
    flex:1,
    backgroundColor:'rgb(0,191,255)',
    borderRadius: 35,
    maxHeight:50,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    flex:1,
    resizeMode: 'cover',
    justifyContent:'center'
  },
  back:{
    flex:1,
    resizeMode: 'cover',
    justifyContent:'center'
  },
  face:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
  bold: {
    color:'black',
    fontWeight:'bold'
  },
  light: {
    color: 'black',
    fontWeight: 'normal'
  },
 container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
},
root: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
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
  marginRight:90,
  color: 'white'
},
light:{
  flex:1,
  fontSize: 14,
  fontWeight: 'normal',
  justifyContent:'flex-start',
  alignItems:'flex-end',
  marginRight:10,
  color: 'white'
},
button:{
  width: "80%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  marginLeft: 40,
  color: 'white',
  marginRight: 40,
  margin:15
}
})


