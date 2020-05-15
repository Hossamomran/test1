import React, {Component} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {Container, Text, Card, CardItem, Content, Left, Body, Right, Button, Header, Title,Footer,FooterTab} from 'native-base';
export default class AllNews extends Component {
    //Hide navigation Header
   
        // state variables ..changed automated in render 
        state = {
            dataSource: [],
            dataResturant:[],
            dataToDo: [],            
            text: ''
        };
        static navigationOptions = {
            header: null,
        };
    componentDidMount(){

    //fetching data from Api

        fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4')
            .then((response) =>
            response.json()
        )
            .then((responseJson) => {

                this.setState({
                    dataSource: responseJson, 
                }, function () {
                    console.log('hello from fetch 1');
                });
            })
            .catch((error) => {
                console.error(error + " fetch error");
            });
            this.RestaurantsContetnt();
            this.ToDoContent();
        }
        /**
        * Restaurant Data fetch
         */
    
    RestaurantsContetnt = () => {
      
        fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')
        .then((response) =>
        response.json()
    )
        .then((responseJson) => {

            this.setState({
                dataResturant: responseJson,
            }, function () {
                console.log('hello from resturants');
            });
        })
        .catch((error) => {
            console.error(error + " fetch error");
        });
    };
         /**
        *ToDo data fech
         */
    ToDoContent = () => {
        
        fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2')
        .then((response) =>
        response.json()
    )
        .then((responseJson) => {

            this.setState({
                dataToDo: responseJson,
            }, function () {
                console.log('hello from to do');
            });
        })
        .catch((error) => {
            console.error(error + " fetch error");
        });
    };


    render() {
        return (
            <Container>
                
                <ImageBackground  source={require('./Assets/Khrogaty-Cuts/Backgrounds/home-header.png')} style={{
                            justifyContent: 'center',width:'100%',height:130,
                            alignItems: 'center'}}>
                        <Image source={require('./Assets/Khrogaty-Cuts/Logo/khrogaty-logo.png')}
                               style={{width: 100, height: 100}} />
                        </ImageBackground>
                   
               
             <Content style={{paddingHorizontal:10}}>
                   
                <Header noShadow style={{backgroundColor: "#FFF"}}>
                            <Left>
                                <Image source={require('./Assets/Khrogaty-Cuts/Vector_Icons/HomePageOne.png')}
                                       style={{ width: 40, height: 40}} />
                            </Left>
                            <Body>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}} >
                                   Places For Going Out
                                </Text>
                            </Body>

                            <Right>
                                <Button transparent  onPress={() => {
                                    this.props.navigation.navigate('AllSection')
                                }}>
                                <Text style={{fontSize:12,color:'black'}}>
                                    View More
                                </Text>
                                </Button>
                            </Right>
                </Header>
                <Content horizontal={true}>
                    {this.returnData()}
                </Content>
               
                <Header noShadow style={{backgroundColor: "#FFFFFF"}}>
                    <Left>
                        <Image source={require('./Assets/Khrogaty-Cuts/Vector_Icons/homeTwo.png')}
                               style={{ width: 40, height: 40}} />
                    </Left>
                    <Body>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}} >
                            Restaurants & Coffee shops
                        </Text>
                    </Body>

                    <Right>
                        <Button transparent  onPress={() => {
                            this.props.navigation.navigate('Resturant')
                        }}>
                            <Text style={{fontSize:12,color:"black"}}>
                                View More
                            </Text>
                        </Button>
                    </Right>
                </Header>
                        
                <Content horizontal={true}>
                {this.RestruData()}

                </Content>
                        
                <Header noShadow style={{backgroundColor: "#FFFFFF"}}>
                    <Left>
                        <Image source={require('./Assets/Khrogaty-Cuts/Vector_Icons/Homethree.png')}
                               style={{ width: 40, height: 40}} />
                    </Left>
                    <Body>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}} >
                           To do things
                        </Text>
                    </Body>

                    <Right>
                        <Button transparent  onPress={() => {
                            this.props.navigation.navigate('ToDo')
                        }}>
                            <Text style={{fontSize:12,color:'black'}}>
                                View More
                            </Text>
                        </Button>
                    </Right>
                </Header>

                <Content horizontal={true}>
                {this. ToDoContentData()}

                </Content>
                </Content>
                <Footer >
                    <FooterTab>
                        <Button  onPress={()=>{
                                    this.props.navigation.navigate('HomePage')
                                }}
                                style={{backgroundColor:"#fff"}}>
                            <Image source={require('./Assets/Khrogaty-Cuts/Icons/home.png')}
                            style={{width:"30%",height:"50%"}}/>
                            <Text style={{fontSize:7}}>Home</Text>
                        
                        </Button>
                        <Button style={{backgroundColor:"#fff"}}
                        onPress={()=>{
                            this.props.navigation.navigate('SearchMe')
                        }}
                        >
                            <Image source={require('./Assets/Khrogaty-Cuts/Icons/filter.png')} 
                            style={{width:"30%",height:"50%"}}
                            />
                            
                        <Text style={{fontSize:7}}>Filter</Text>
                        </Button>
                        <Button style={{backgroundColor:"#fff"}}
                        onPress={()=>{
                            this.props.navigation.navigate('AllSection')
                        }}
                        >
                            <Image source={require('./Assets/Khrogaty-Cuts/Icons/find-places.png')} 
                            style={{width:"30%",height:"50%"}}
                            />
                            
                        <Text style={{fontSize:7}}>Find places</Text>
                        </Button>
                        <Button style={{backgroundColor:"#fff"}}
                        onPress={()=>{
                            this.props.navigation.navigate('Resturant')
                        }}
                        >
                            <Image source={require('./Assets/Khrogaty-Cuts/Icons/restaurants.png')} 
                            style={{width:"30%",height:"50%"}}
                            />
                            
                        <Text style={{fontSize:6}}>Resturants</Text>
                        </Button>
                        <Button style={{backgroundColor:"#fff"}}
                        onPress={()=>{
                            this.props.navigation.navigate('ToDo')
                        }}
                        >
                            <Image source={require('./Assets/Khrogaty-Cuts/Icons/todo.png')} 
                            style={{width:"30%",height:"50%"}}
                            />
                            
                        <Text style={{fontSize:5}}>Things To Do</Text>
                        </Button>
                        
                        
                    </FooterTab>
                </Footer>
            </Container>
        );
    }

    //Return Api Data for All Section
    returnData(){
            return(
                this.state.dataSource.map((item) => {
                    return (
                        <View key={item.id} style={{height: 200}}>
                        <Card transparent style={{ padding: 0, margin: 0}}>
                            <CardItem style={{width:160}} button onPress={() => {
                                this.props.navigation.navigate('CardDetails', {
                                    title: item.title.rendered,
                                    image: item.better_featured_image.source_url,
                                    content: item.content.rendered,
                                    map: item.acf.map_location,
                                    phone_number:item.acf.phone_number,
                                    email_address:item.acf.email_address,
                                    address:item.acf.address,
                                    placeId:item.id,
                                })
                            }}>
    
                                <Body>
                                    <Image
                                        style={{width:160, height: 120, borderRadius: 10}}
                                        source={{uri: item.better_featured_image.source_url}}/>
                                    <Text numberOfLines={1} style={{fontWeight: 'bold', color: '#000',fontSize:12}}>{item.title.rendered}</Text>
                                    <Text numberOfLines={1} style={{color: '#999', marginTop: 8, fontSize:10}}> 
                                    <Image source={require('./Assets/Khrogaty-Cuts/Icons/map-marker.png')}
                                    style={{ width: 10, height: 10}} /> {item.acf.address} </Text>
                                </Body>
                            </CardItem>
    
                        </Card>
                        </View>
                    )
                })
    
            ) 
        }
    //Return Api Data for Resturant

        RestruData() {
            return(
                this.state.dataResturant.map((restru) => {
                    return (
                        <View key={restru.id} style={{height: 200}}>
                            <Card transparent style={{padding: 0, margin: 0}}>
                                <CardItem style={{width:160}} button onPress={() => {
                                    this.props.navigation.navigate('CardDetails', {
                                        title: restru.title.rendered,
                                        image: restru.better_featured_image.source_url,
                                        content: restru.content.rendered,
                                        map: restru.acf.map_location,
                                        phone_number:restru.acf.phone_number,
                                        email_address:restru.acf.email_address,
                                        address:restru.acf.address,
                                        placeId:restru.id,
                                    })
                                }}>
    
                                    <Body>
                                        <Image
                                            style={{width:160, height: 120, borderRadius: 10}}
                                            source={{uri: restru.better_featured_image.source_url}}/>
                                        <Text numberOfLines={1} style={{fontWeight: 'bold', color: '#000',fontSize:12}}>{restru.title.rendered}
                                        </Text>
                                        <Text numberOfLines={1} style={{color: '#999', marginTop: 8, fontSize:10}}>
                                             <Image source={require('./Assets/Khrogaty-Cuts/Icons/map-marker.png')}
                                            style={{ width: 10, height: 10}} /> {restru.acf.address} </Text>
                                    </Body>
                                </CardItem>
    
                            </Card>
                        </View>
                    )
                })
    
            )
        };
    //Return Api Data for ToDo
    
       ToDoContentData() {
        return(
            this.state.dataToDo.map((DoItem) => {
                return (
                    <View key={DoItem.id} style={{height: 200}}>
                        <Card transparent style={{padding: 0, margin: 0}}>
                            <CardItem style={{width:160}} button onPress={() => {
                                this.props.navigation.navigate('CardDetails', {
                                    title: DoItem.title.rendered,
                                    image: DoItem.better_featured_image.source_url,
                                    content: DoItem.content.rendered,
                                    map: DoItem.acf.map_location,
                                    phone_number:DoItem.acf.phone_number,
                                    email_address:DoItem.acf.email_address,
                                    address:DoItem.acf.address,
                                    placeId:DoItem.id,
                                })
                            }}>

                                <Body>
                                    <Image
                                        style={{width:160, height: 120, borderRadius: 10, paddingRight: 10}}
                                        source={{uri: DoItem.better_featured_image.source_url}}/>
                                    <Text numberOfLines={1} style={{fontWeight: 'bold', color: '#000',fontSize:12}}>{DoItem.title.rendered}</Text>
                                    <Text numberOfLines={1} style={{color: '#999', marginTop: 8, fontSize:10}}>
                                         <Image source={require('./Assets/Khrogaty-Cuts/Icons/map-marker.png')}
                                    style={{ width: 10, height: 10}} /> {DoItem.acf.address} </Text>
                                </Body>
                            </CardItem>

                        </Card>
                    </View>
                )
            })

        )


    }
}

   







