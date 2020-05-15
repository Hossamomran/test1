import React, {Component} from 'react';
import { SearchBar, ListItem} from 'react-native-elements';
import {View, Text, FlatList, ActivityIndicator, Image,ImageBackground} from "react-native";
import { Container, Content} from "native-base";

export  default class SearchPlaces extends Component {
    static navigationOptions = {
        header:null,
    };
    constructor(props) {
        super(props);

        this.state = {
            title: "Search Places",
            loading: false,
            data: [],
            error: null,
        };

        this.arrayholder = [];
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const url = `http://reactnative.website/iti/wp-json/wp/v2/posts`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: '',
                    error: res.error || null,
                    loading: false,
                });
                this.arrayholder = res;
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
                    marginLeft: '14%',
                }}
            />
        );
    };

    searchFilterFunction = text => {
        this.setState({
            value: text,
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = item.title.rendered.toUpperCase();
            if(text){
                const textData = text.toUpperCase();

                return itemData.indexOf(textData) > -1;
            }
            else {
                return itemData.indexOf("");
            }

        });
        this.setState({
            data: newData,
        });
    };

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
            />
        );
    };


    ListEmpty = () => {
        return (
            //View to show when list is empty
            <View style={{width: '100%', height: '100%',flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./Assets/Khrogaty-Cuts/Vector_Icons/nosearch-icon.png')} style={{width: 150, height:150,
                   justifyContent: 'center', alignItems: 'center',borderRadius: 400/ 2
             }} />
           
             <Content>
                                     <Text style={{fontSize:20,color:'#000',justifyContent:'center',alignItems:'center'}}> Search For any Places</Text>
            </Content>
            </View>
                             
        );
    };
    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <Container>
                <ImageBackground  source={require('./Assets/Khrogaty-Cuts/Backgrounds/theme-header.png')} style={{
                             justifyContent: 'center',width:'100%',height:130,
                             alignItems: 'center'}}>
                         <Text style={{marginRight:250,fontWeight:'bold',fontSize:30,color:'#fff'}} >
                             Search
                           </Text>
                         </ImageBackground>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            button onPress={() => {
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
                            leftAvatar={{ source: { uri: item.better_featured_image.source_url } }}
                            title={item.title.rendered}
                        />
                    )}

                    ListEmptyComponent={this.ListEmpty}
                    keyExtractor={item => item.title.rendered}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>


            </Container>
        );
    }


}


































//
//    

//     searchFilterFunction = text => {
//         this.setState({
//             value: text,
//         });

//         const newData = this.arrayholder.filter(item => {
//             const itemData = item.title.rendered.toUpperCase();
//             if(text){
//                 const textData = text.toUpperCase();

//                 return itemData.indexOf(textData) > -1;
//             }
//             else {
//                 return itemData.indexOf("");
//             }

//         });
//         this.setState({
//             data: newData,
//         });
//     };

//     renderHeader = () => {
//         return (
//             <SearchBar
//                 placeholder="Type Here..."
//                 lightTheme
//                 round
//                 onChangeText={text => this.searchFilterFunction(text)}
//                 autoCorrect={false}
//                 value={this.state.value}
//             />
//         );
//     };


//     ListEmpty = () => {
//         return (
//             //View to show when list is empty
//             <View style={{width: '100%', height: '100%',flexDirection: 'column',
//             justifyContent: 'center', alignItems: 'center'}}>
//                 <Image source={require('./Assets/Khrogaty-Cuts/Vector_Icons/nosearch-icon.png')} style={{width: 150, height:150,
//                     justifyContent: 'center', alignItems: 'center',borderRadius: 400/ 2
//                 }} />
//                 <Content>
//                           <Text style={{fontSize:20,color:'#000',justifyContent:'center',alignItems:'center'}}> Search For any Places</Text>
//                 </Content>
                
//             </View>
//         );
//     };
//     render() {
//         if (this.state.loading) {
//             return (
//                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                     <ActivityIndicator />
//                 </View>
//             );
//         }
//         return (
//             <Container>
//                <ImageBackground  source={require('./Assets/Khrogaty-Cuts/Backgrounds/theme-header.png')} style={{
//                             justifyContent: 'center',width:'100%',height:130,
//                             alignItems: 'center'}}>
//                         <Text style={{marginRight:250,fontWeight:'bold',fontSize:30,color:'#fff'}} >
//                             Search
//                           </Text>
//                         </ImageBackground>
                   
//             <View style={{ flex: 1 }}>
//                 <FlatList
//                     data={this.state.data}
//                     renderItem={({ item }) => (
//                         <ListItem
//                             button onPress={() => {
//                             this.props.navigation.navigate('HomePage', {
//                                 title: item.title.rendered,
//                                 image: item.better_featured_image.source_url,
//                                 content: item.content.rendered,
//                                 map: item.acf.map_location,
//                                 phone_number:item.acf.phone_number,
//                                 email_address:item.acf.email_address,
//                                 address:item.acf.address,
//                                 placeId:item.id,
//                             })
//                         }}
//                             leftAvatar={{ source: { uri: item.better_featured_image.source_url } }}
//                             title={item.title.rendered}
//                         />
//                     )}

//                     ListEmptyComponent={this.ListEmpty}
//                     keyExtractor={item => item.title.rendered}
//                     ItemSeparatorComponent={this.renderSeparator}
//                     ListHeaderComponent={this.renderHeader}
//                 />
//             </View>
//             <Footer >
//                     <FooterTab>
//                         <Button  onPress={()=>{
//                                     this.props.navigation.navigate('HomePage')
//                                 }}
//                                 style={{backgroundColor:"#fff"}}>
//                             <Image source={require('./Assets/Khrogaty-Cuts/Icons/home.png')}
//                             style={{width:"30%",height:"50%"}}/>
//                             <Text style={{fontSize:7}}>Home</Text>
                        
//                         </Button>
//                         <Button style={{backgroundColor:"#fff"}}
//                         onPress={()=>{
//                             this.props.navigation.navigate('SearchMe')
//                         }}
//                         >
//                             <Image source={require('./Assets/Khrogaty-Cuts/Icons/filter.png')} 
//                             style={{width:"30%",height:"50%"}}
//                             />
                            
//                         <Text style={{fontSize:7}}>Filter</Text>
//                         </Button>
//                         <Button style={{backgroundColor:"#fff"}}
//                         onPress={()=>{
//                             this.props.navigation.navigate('AllSection')
//                         }}
//                         >
//                             <Image source={require('./Assets/Khrogaty-Cuts/Icons/find-places.png')} 
//                             style={{width:"30%",height:"50%"}}
//                             />
                            
//                         <Text style={{fontSize:7}}>Find places</Text>
//                         </Button>
//                         <Button style={{backgroundColor:"#fff"}}
//                         onPress={()=>{
//                             this.props.navigation.navigate('Resturant')
//                         }}
//                         >
//                             <Image source={require('./Assets/Khrogaty-Cuts/Icons/restaurants.png')} 
//                             style={{width:"30%",height:"50%"}}
//                             />
                            
//                         <Text style={{fontSize:6}}>Resturants</Text>
//                         </Button>
//                         <Button style={{backgroundColor:"#fff"}}
//                         onPress={()=>{
//                             this.props.navigation.navigate('ToDo')
//                         }}
//                         >
//                             <Image source={require('./Assets/Khrogaty-Cuts/Icons/todo.png')} 
//                             style={{width:"30%",height:"50%"}}
//                             />
                            
//                         <Text style={{fontSize:5}}>Things To Do</Text>
//                         </Button>
                        
                        
//                     </FooterTab>
//                 </Footer>
                        
//             </Container>
//         );
//     }


// }
