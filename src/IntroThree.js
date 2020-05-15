import React, { Component } from 'react';
import { Image, ImageBackground,Dimensions} from 'react-native';
import { View, Button ,Icon,Text} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';



export default class IntroThree extends Component {
    //remove navigation header
    static navigationOptions = {
        header: null,
    };
    

    render(){
        // var {height, width} = Dimensions.get('window'); 
        return(
       
            <ImageBackground source={require('./Assets/Khrogaty-Cuts/Backgrounds/onboarding-bg-right.png')} style={{flexDirection: 'column',
                justifyContent: 'center',width:'100%',height:'100%',
                alignItems: 'center'}}>
                  <Image 
                source={require('./Assets/Khrogaty-Cuts/Logo/khrogaty-logo.png')}
                style={{width :100,height:100}}
            />   
            
                <View style={{
                    flexDirection: "column", flex: 1, position: "absolute",bottom:'11%',
                    justifyContent: 'space-between', alignItems:'center'}}>

                    <Image source={require('./Assets/Khrogaty-Cuts/Vector_Icons/Homethree.png')}
                            style={{ width: 55, height: 55}} />
                    <Text style={{color:'black' ,fontWeight:'bold',fontSize:18,marginTop:7}}>What Do I Do ?</Text>
                    <Text style={{paddingLeft:10 ,paddingRight:10 ,textAlign:'center', fontSize:15, color: 'gray'}}>
                    is simply dummy text of the printing and typesetting industry..</Text>

                </View> 

                <View style={{
                    flexDirection: "column", flex: 1, position: "absolute", bottom: 0 ,left:'0%',
                    justifyContent: 'space-between', padding: '1%' }}>

                    <Button transparent style={{backgroundColor:'transparent'}}  onPress={() => {
                        this.setState({tutorialPage:1})
                    }}>
                        <Icon name="arrow-back" style={{color:'black'}}/>
                        <Text style={{color:'black'}}>Prev</Text>

                    </Button>

                </View>

                <Button success style={{width:'28%',height:'4%',borderRadius:10,
                    flexDirection: "column", flex: 1, position: "absolute", bottom: '2%' ,left:'37%',
                    justifyContent: 'center', padding: '1%' }}
                        onPress={() => {
                            this.props.navigation.navigate('HomePage');
                        }}
                ><Text> Start </Text></Button>

                 {this.saveUser()}
             </ImageBackground>
                    
        );

    }
     //Async set User data
     saveUser(){
        AsyncStorage.setItem('user','1');
    }
}

