import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Separator } from 'native-base';

// More info here: https://facebook.github.io/react-native/docs/flatlist.html
import MenuItem from '../Components/MenuItem'

// Styles
import styles from './Styles/MenuScreenStyle'

class MenuScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'Menu',
    tabBarIcon: () => <Icon ios='ios-menu' android="md-menu" style={{fontSize: 24, color: 'white'}}/>
  }

/*
  {title: 'Home', icon: 'home'},
      {title: 'User profile', icon: 'home'},
      {title: 'History', icon: 'insert-invitation'},
      {title: 'Account', icon: 'insert-invitation'},
      {title: 'ScoreCards', icon: 'speaker-notes'},
      {title: 'Friends', icon: 'insert-invitation'},
      {title: 'Member', icon: 'insert-invitation'}
*/
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Menu</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="home" />
              </Left>
              <Body>
                <Text>Home</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="person" />
              </Left>
              <Body>
                <Text>User profile</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="calendar" />
              </Left>
              <Body>
                <Text>History</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="card" />
              </Left>
              <Body>
                <Text>Account</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="list-box" />
              </Left>
              <Body>
                <Text>Scorecards</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="contacts" />
              </Left>
              <Body>
                <Text>Friends</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ribbon" />
              </Left>
              <Body>
                <Text>Members</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text>Terms of service</Text>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>Terms and Policies</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
