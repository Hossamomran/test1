import React, { Component } from 'react';
import { Image, ImageBackground,Dimensions} from 'react-native';
import { View,  Button ,Icon,Text, Title} from 'native-base';
export default class IntroOne extends Component {
    // remove navigation header
    static navigationOptions = {
        header: null,
    };
    
    render(){
        
        return( 
            
            <ImageBackground source={require('./Assets/Khrogaty-Cuts/Backgrounds/onboarding-bg-left.png')} style={{flexDirection: 'column',
                justifyContent: 'center',width:'100%',height:'100%',
                alignItems: 'center'}}>
                 <Image 
                source={require('./Assets/Khrogaty-Cuts/Logo/khrogaty-logo.png')}
                style={{width: 100, height: 100}}
                />
                
                    <View style={{
                        flexDirection: "column", flex: 1, position: "absolute",bottom:'8%',
                        justifyContent: 'space-between', alignItems:'center'}}>

                        <Image source={require('./Assets/Khrogaty-Cuts/Vector_Icons/onboard-first-icon.png')}
                               style={{ width: 55, height: 55}} />
                        <Text style={{color:'black' ,fontWeight:'bold',fontSize:18,marginTop:7}}>Places for going out.</Text>
                        <Text style={{paddingLeft:10 ,paddingRight:10 ,textAlign:'center', fontSize:15, color: 'gray'}}>
                        is simply dummy text of the printing and typesetting industry
                             </Text>

                    </View>
        
                    <View style={{
                        flexDirection: "column", flex: 1, position: "absolute", bottom: 0 ,left:'68%',
                        justifyContent: 'space-between', padding: '1%' }}>

                        <Button transparent style={{backgroundColor:'transparent'}}  onPress={() => {
                          this.props.navigation.navigate('IntroTwo')
                        }}>

                            <Text style={{color:'black'}}>Next</Text>
                            <Icon name="arrow-forward" style={{color:'black'}}/>
                        </Button>

                    </View>

            </ImageBackground>

        );
    }
   
}

