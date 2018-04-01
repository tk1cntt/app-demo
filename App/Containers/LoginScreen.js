import React, { Component } from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Container, Content, Form, Header, Item, Input, Icon, Button, Text } from 'native-base';

import Email from '../Components/Email'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => <MaterialIcons size={24} color="white" name="home" />
  }

  render () {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Input search keyword" />
            <Icon name="ios-people" />
          </Item>
          <Button>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Icon name="md-mail" />
              <Input
                blurOnSubmit={false}
                returnKeyType="next"
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email"
              />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
