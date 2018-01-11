
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';
import { ParseInt } from 'core-js/library/web/timers';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

	constructor(){
		super();
		this.state = {
      currentValue: '',
      previousValue: '',
      arithmetic: '',
      firstNum: 0,
      secondNum: 0,
      total: 0,
      screen: ''
    }    
    this.buttonValue = this.buttonValue.bind(this);
    this.equate = this.equate.bind(this);
    this.clear = this.clear.bind(this);
  }  

  clear(){
    this.setState({
      previousValue: '',
      arithmetic: '',
      firstNum: 0,
      secondNum: 0,
      total: 0,
      screen: ''
    })
  }

  equate(){
      this.setState({        
        secondNum: parseFloat(this.state.screen)
      }, function(){
        switch(this.state.arithmetic){
          case '+':
            this.state.total = this.state.firstNum + this.state.secondNum
            this.setState({
              screen: this.state.total.toString(),
              previousValue: this.state.total.toString()
              });
            break;
          case '-':
            this.state.total = this.state.firstNum - this.state.secondNum
            this.setState({
              screen: this.state.total.toString(),
              previousValue: this.state.total.toString()
              });
              break;
          case 'x':
            this.state.total = this.state.firstNum * this.state.secondNum
            this.setState({
              screen: this.state.total.toString(),
              previousValue: this.state.total.toString()
              });
              break;
          case '/':
            this.state.total = this.state.firstNum / this.state.secondNum
            this.setState({
              screen: this.state.total.toString(),
              previousValue: this.state.total.toString()
              });
              break;
        }
      });

  }

  buttonValue(val){
    if(val === '+' || val === '-' || val === 'x' || val === '/'){
      this.setState({
        arithmetic: val,
        firstNum: parseFloat(this.state.screen),
        screen: '',
        previousValue: ''
      })
    }
    else{
      this.setState({
        previousValue: `${this.state.previousValue}${val}`,
        screen: `${this.state.previousValue}${val}`
      })      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Calculator</Text>
        <TextInput style={styles.valueScreen} placeholder="0.0" value={this.state.screen} editable={false} textAlign="right" />
        <View style={styles.buttonRow}>
          <View style={styles.buttons}>
            <Button title="9" onPress={() => this.buttonValue(9)} />
          </View>
          <View style={styles.buttons}>
            <Button title="8" onPress={() => this.buttonValue(8)} />
          </View>
          <View style={styles.buttons}>
            <Button title="7" onPress={() => this.buttonValue(7)} />
          </View>
        </View>   
        <View style={styles.buttonRow}>
          <View style={styles.buttons}>
            <Button title="6" onPress={() => this.buttonValue(6)} />
          </View>
          <View style={styles.buttons}>
            <Button title="5" onPress={() => this.buttonValue(5)} />
          </View>
          <View style={styles.buttons}>
            <Button title="4" onPress={() => this.buttonValue(4)} />
          </View>
        </View> 
        <View style={styles.buttonRow}>
          <View style={styles.buttons}>
            <Button title="3" onPress={() => this.buttonValue(3)} />
          </View>
          <View style={styles.buttons}>
            <Button title="2" onPress={() => this.buttonValue(2)} />
          </View>
          <View style={styles.buttons}>
            <Button title="1" onPress={() => this.buttonValue(1)} />
          </View>
        </View>   
        <View style={styles.buttonRow}>
          <View style={styles.buttons}>
            <Button title="0" onPress={() => this.buttonValue(0)} />
          </View>
        </View>  
        <View style={styles.buttonRow}>
          <View style={styles.arithmenticButtons}>
            <Button title="." onPress={() => this.buttonValue('.')} />
          </View>
        </View> 
        <View style={styles.buttonRow}>
          <View style={styles.arithmenticButtons}>
            <Button title="+" onPress={() => this.buttonValue('+')} />
          </View>
        </View>   
        <View style={styles.buttonRow}>
          <View style={styles.arithmenticButtons}>
            <Button title="-" onPress={() => this.buttonValue('-')} />
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.arithmenticButtons}>
            <Button title="x" onPress={() => this.buttonValue('x')} />
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.arithmenticButtons}>
            <Button title="/" onPress={() => this.buttonValue('/')} />
          </View>
        </View>  
        <View style={styles.buttonRow}>
          <View style={styles.arithmenticButtons}>
            <Button title="=" color="green" onPress={() => this.equate()} />
          </View>
        </View>  
        <View style={styles.buttonRow}>
          <View style={styles.arithmenticButtons}>
            <Button title="Clear" color="red" onPress={() => this.clear()} />
          </View>
        </View>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	  flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
		textAlign: 'center',
    margin: 10,
  },
  valueScreen: {
    fontSize: 20,
    marginTop: 5
  }, 
  buttons: {
    paddingLeft: 5,
    paddingRight: 5,
    width: 125,
    borderRadius: 100
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    height: 40
  },
  arithmenticButtons: {
    paddingLeft: 5,
    paddingRight: 5,
    width: 370
  }

});
