import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../views/Home';

const Tab = createBottomTabNavigator()

function AppNavigation(): React.JSX.Element {
  return (
    <NavigationContainer >
      <Tab.Navigator  screenOptions={{tabBarStyle:{borderRadius:20,backgroundColor:'#000',position:'absolute',left:'5%',bottom:'5%',width:'90%'}}}>
        <Tab.Screen component={Home} name={"Home"} />
        <Tab.Screen component={Home} name={"Communitity"} />
        <Tab.Screen component={Home} name={"settings"} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
