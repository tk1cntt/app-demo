import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

// import screen
import HomeScreen from './LoginScreen'
import ScoreCardScreen from './ScoreCardScreen'
import HistoryScreen from './HistoryScreen'
import GCoinScreen from './GCoinScreen'
import MenuScreen from './MenuScreen'

const LaunchScreen = TabNavigator(
  {
    HomeTab: { screen: HomeScreen },
    ScoreCardTab: { screen: ScoreCardScreen },
    HistoryTab: { screen: HistoryScreen },
    GCoinTab: { screen: GCoinScreen },
    MenuTab: { screen: MenuScreen }
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    initialRouteName: 'HomeTab',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'white',
        rippleColor: 'white',
        tabs: {
          HomeTab: {
            barBackgroundColor: '#37474F'
          },
          ScoreCardTab: {
            barBackgroundColor: '#00796B'
          },
          HistoryTab: {
            barBackgroundColor: '#37474F'
          },
          GCoinTab: {
            barBackgroundColor: '#00796B'
          },
          MenuTab: {
            barBackgroundColor: '#37474F'
          }
        }
      }
    }
  }
)

export default LaunchScreen;
