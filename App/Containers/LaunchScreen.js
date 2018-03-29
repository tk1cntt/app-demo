import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => <Icon size={24} color="white" name="home" />
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

class ScorecardScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Scorecards',
    tabBarIcon: () => <Icon size={24} color="white" name="speaker-notes" />
  }

  render() {
    return (
      <View>
        <Text>Scorecards</Text>
      </View>
    )
  }
}

class HistoryScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'History',
    tabBarIcon: () => <Icon size={24} color="white" name="insert-invitation" />
  }

  render() {
    return (
      <View>
        <Text>History</Text>
      </View>
    )
  }
}

class GCoinScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'GCoin',
    tabBarIcon: () => <Icon size={24} color="white" name="monetization-on" />
  }

  render() {
    return (
      <View>
        <Text>GCoin</Text>
      </View>
    )
  }
}

class MenuScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Menu',
    tabBarIcon: () => <Icon size={24} color="white" name="reorder" />
  }

  render() {
    return (
      <View>
        <Text>Menu</Text>
      </View>
    )
  }
}

const LaunchScreen = TabNavigator(
  {
    HomeTab: { screen: HomeScreen },
    ScorecardTab: { screen: ScorecardScreen },
    HistoryTab: { screen: HistoryScreen },
    GCoinTab: { screen: GCoinScreen },
    MenuTab: { screen: MenuScreen }
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'white',
        rippleColor: 'white',
        tabs: {
          HomeTab: {
            barBackgroundColor: '#37474F'
          },
          ScorecardTab: {
            barBackgroundColor: '#00796B'
          },
          HistoryTab: {
            barBackgroundColor: '#5D4037'
          },
          GCoinTab: {
            barBackgroundColor: '#5D4047'
          },
          MenuTab: {
            barBackgroundColor: '#3E2723'
          }
        }
      }
    }
  }
)

export default LaunchScreen;
