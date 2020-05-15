import React, { Component } from 'react';
import {Image} from "react-native";
import { Container, Header, Left, Body, Footer,FooterTab, Button, Icon, Title, Segment, Content, Text,Spinner, Card, CardItem } from 'native-base';
export default class Resturant extends Component {
    static navigationOptions = {
        header: null,
    };
  
  state={
    loaded:0
  }
  componentDidMount() {

    fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')
        .then((response) =>
        response.json()
    )
        .then((responseJson) => {

            this.setState({
                dataSource: responseJson,
                loaded: 1
            }, function () {
                console.log('hello');
            });
        })
        .catch((error) => {
            console.error(error + " fetch error");
        });

}
  render() {
    return (
      <Container>
        <Header hasSegment >
          <Left>
            <Button transparent onPress={()=>{
                                    this.props.navigation.navigate('HomePage')}}
                                   >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Resturant</Title>
          </Body>
        </Header>
        <Segment>
          <Button first  onPress={()=>{
                                    this.props.navigation.navigate('AllSection')}}>
            <Text>All</Text>
          </Button  >
          <Button active onPress={()=>{
                                    this.props.navigation.navigate('Resturant')}}>
            <Text>Resturant</Text>
          </Button>
          <Button  onPress={()=>{
                                    this.props.navigation.navigate('ToDo')}}>
            <Text>what to do</Text>
          </Button>
        </Segment>
        <Content padder>
         {this.displaydata()}
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
   //Return logic for resturant cards
  displaydata() {
        if(this.state.loaded === 0){
            return(
                <Spinner color="#f00" />
            )
        }else{
            return(
                this.state.dataSource.map((item) => {
                    return (
                        <Card key={item.id}>
                        <CardItem >
                            <Left style={{flex: 2}}>
                                <Image
                                    style={{width: 120, height: 160, borderRadius: 10}}
                                    source={{uri: item.better_featured_image.source_url}}/>
                            </Left>
                            <Body style={{flex: 3}}>
                                <Text style={{fontWeight: 'bold', color: '#000'}}>{item.title.rendered}</Text>
                                <Text numberOfLines={1} style={{color: '#45ca36', marginTop: 8, fontSize:10}}> <Image source={require('./Assets/Khrogaty-Cuts/Icons/map-marker.png')}
                                                                                                                      style={{ width: 10, height: 10}} /> {item.acf.address} </Text>
                                <Text style={{color: '#999', marginTop: 10}}>{item.excerpt.rendered}</Text>

                                <Button success style={{width: 100 ,height: 30,borderRadius:15, marginTop: 10,
                                    justifyContent: 'center'}}
                                        onPress={() => {
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
                                        }}
                                ><Text>Details</Text></Button>
                            </Body>
                        </CardItem>
                    </Card>
                    )
                })

            )
        }
}
}