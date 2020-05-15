import React, { Component } from 'react';
import { Image, ImageBackground,Dimensions,Text} from 'react-native';
import { View} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
export default class Splash extends Component {
    // check if the user joined for first time or not ..
    static navigationOptions = {
        header: null,
    };
    settime=()=>{
    setTimeout(()=>{
        AsyncStorage.getItem('user').then((response)=>{
            if(response === '1'){
                this.props.navigation.navigate('HomePage')
                // if the user joined for 2nd time he will go direct to HomePage

            }else {
                this.props.navigation.navigate('IntroOne')
                // if Not he will return to IntroOne Untill he Press Start In introThree
                // Unless He press Start He will return to IntroOne Every Time.
            }
        })

    },1500)
}

    render(){
    
        return(
            <View>
            <ImageBackground source={require('./Assets/Khrogaty-Cuts/Backgrounds/splash-bg.png')} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
         
                 <Image source={require('./Assets/Khrogaty-Cuts/Logo/khrogaty-logo.png')}
                       style ={{width: 120 , height: 120, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginVertical: 150}}/>
                <Text style={{fontWeight: 'bold',fontSize:24,color:"#fff"}}> Made BY Hossam Omran</Text>
           </ImageBackground>
           {
               /**
                * Here it will take 1.5 secs ..
                */
           }
           {this.settime()}
            </View>
                

        );

    }
}

