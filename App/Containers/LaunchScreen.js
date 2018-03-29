import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{
          height: 56,
          elevation: 8,
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0
        }}
      >
        <Tab
          barBackgroundColor="#37474F"
          label="Home"
          icon={<Icon size={24} color="white" name="home" />}
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Scorecards"
          icon={<Icon size={24} color="white" name="speaker-notes" />}
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="History"
          icon={<Icon size={24} color="white" name="insert-invitation" />}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="Menu"
          icon={<Icon size={24} color="white" name="reorder" />}
        />
      </BottomNavigation>
    )
  }
}
