import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Container, Content, Card, CardItem,Button, Left, Body, Text, Spinner} from 'native-base';
export default class AllNews extends Component {
    static navigationOptions = {
        header: null,
    };


    state = {
        dataSource: [],
        loaded: 0,
        text: ''
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


                <Content style={{paddingHorizontal: 15}}>
                    {this.displaydata()}

                </Content>
                
            </Container>
        );
    }

    displaydata() {

        // alert(Dimensions.get('window').width/3);

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
const styles = StyleSheet.create({
    myTexts: {
        color: 'black'
    },
    myBlocks: {

    }
})










