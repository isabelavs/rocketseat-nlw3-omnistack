import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import PlacesMap from './pages/PlacesMap';
import PlaceDetails from './pages/PlaceDetails';

import SelectMapPosition from './pages/CreatePlace/SelectMapPosition';
import PlaceData from './pages/CreatePlace/PlaceData';
import Header from './components/Header';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }}>
        <Screen 
          name="PlacesMap" 
          component={PlacesMap} 
        />
        
        <Screen 
          name="PlaceDetails" 
          component={PlaceDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Lares" />
          }} 
        />
        
        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition} 
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />
          }} 
        />
        
        <Screen 
          name="PlaceData" 
          component={PlaceData} 
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }} 
        />
      </Navigator>
    </NavigationContainer>
    );
  }
  