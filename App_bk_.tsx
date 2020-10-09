


import React from 'react';

//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, StatusBar} from 'react-native';

import styled from 'styled-components';

import {AntDesign} from '@expo/vector-icons';

export default function App() {
  return (
    <Container>

      <StatusBar barStyle='light-content' />

      <RecipeBackground source={require('./assets/main.jpg')} >
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name='arrowleft' size={24} color='#fff' />
              <Text style={{marginLeft: 10}}Igredients></Text>
            </Back>

            <AntDesign name= 'heart' size={24} color='#fff' />
          </MenuBar>
          <MainRecipe>
            <Text>Spicy Shrimp</Text>
            <Text>80 calories</Text>
          </MainRecipe>
        </SafeAreaView>
      </RecipeBackground>

    </Container>
    
  );
}

const Container = styled.View`
  flex: 1;
  backgroundColor: #fff;
`;

const Text = styled.Text`
   color: #fff;
   font-family: 'AvenirNext-Regular'
`;

const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;

const MenuBar = styled.View`
  flexDirection: 'row;
  justifyContext: space-between;
  paddin: 16px;  
`;

const Back = styled.View`
  flex-direction: row;  
`;

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

