import React, {Component} from 'react';
import {Image} from 'react-native';
import {  View, Image,Header} from 'native-base';
export default class MyHeader extends Component{
    render(){
        return( <Image source={require('../Khrogaty-Cuts/Backgrounds/home-header.png') }/>
    }
}

  );
//              <Header> 
//                 {/* <ImageBackground source={require('./Assets/khrogaty_Cuts/Backgrounds/home-header.png')} style={{width: '100%', height: '100%'}}>
//             </ImageBackground> */}
//                 <Left>
//                     <Button transparent onPress={()=>{
//                         this.props.navigation.navigate('HomePage');
//                     }}>
//                         <Icon name='menu'/>
//                     </Button>
//                 </Left>
//                 <Body>
//                 <Title>{this.props.title}</Title>
//                 </Body>
//                 <Right>

//                     {this.backFunction()}

//                 </Right>
//             </Header>

//         );
//     }
//     backFunction(){
//         if(!this.props.Home){
//             return(
//                 <Button transparent onPress={()=>{
//                     this.props.navigation.goBack();
//                 }}>
//                     <Icon name="arrow-back" type="MaterialIcons" />
//                 </Button>

//             )
//         }
//     }
// }





















