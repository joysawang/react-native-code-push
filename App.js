/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import codePush from 'react-native-code-push';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
const deploymentKeys = {
  staging: "hkTaCsZqlgm6imARNczJog_Qc-3jHy1ZHE-LE",
  production: "mlBRrx2aGJHUvIfLJpTUeFEbadrzHJxGBNbUV"
}

class App extends Component<Props> {
  checkUpdates() {
    codePush.sync({
      deploymentKey: (__DEV__) ? deploymentKeys.staging : deploymentKeys.production,
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }

  render() {
    return (
      <ScrollView>
        <Text style={{margin: 10, fontSize: 16, fontWeight: 'bold'}}>Logs Application</Text>
        <View style={{marginLeft: 10, marginRight: 10, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.75, borderBottomColor: 'rgba(0, 0, 0, 0.5)'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Initial</Text>
          <Text>Create React Native Application</Text>
        </View>
        {
          // <View style={{marginLeft: 10, marginRight: 10, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.75, borderBottomColor: 'rgba(0, 0, 0, 0.5)'}}>
          //   <Text style={{fontSize: 16, fontWeight: 'bold'}}>Update</Text>
          //   <Text>Test update react native by code push</Text>
          // </View>
        }
        <View style={{margin: 10}}>
          <Button onPress={this.checkUpdates.bind(this)} title="Check for Updates" />
        </View>
      </ScrollView>
    );
  }
}

export default codePush(codePushOptions)(App);
