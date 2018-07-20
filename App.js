
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';

import  NavigationBar from './NavigationBar/NavigationBar'



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View  >
          <NavigationBar
            title={"我是title"}
            statusBar={{//状态栏
              backgroundColor:'#EEC591',
             }}
            style={{
                backgroundColor:'#EEC591',
            }}
            leftButton={
                <TouchableOpacity>
                  <Image style={{height:30,width:30}} source={require('./images/1.png')}/>
                </TouchableOpacity>
            }
            rightButton={
                <TouchableOpacity>
                    <Image style={{height:30,width:30}} source={require('./images/2.png')}/>
                </TouchableOpacity>
            }

          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
