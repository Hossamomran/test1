
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from "./src/Splash";
import IntroOne from"./src/IntroOne";
import IntroTwo from"./src/IntroTwo";
import IntroThree from"./src/IntroThree";
import SearchMe from"./src/SearchMe";
import HomePage from"./src/HomePage";
import Resturant from"./src/Restuarnats";

import ToDo from"./src/ToDo";
import AllSection from "./src/All";

import CardDetails from "./src/CardDetails";


const AppNavigator = createStackNavigator({
   Home:Splash,
   HomePage:HomePage,
   IntroOne:IntroOne,
   IntroTwo:IntroTwo,
   IntroThree:IntroThree,
   SearchMe:SearchMe,
   Resturant:Resturant,
   ToDo:ToDo,
   AllSection:AllSection,
   CardDetails:CardDetails


});


export default createAppContainer(AppNavigator);