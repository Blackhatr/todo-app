import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Tasks(props) {
  return (
      <View style={{ marginTop: 30, width: '80%', height:50, backgroundColor: '#b8ffc8', borderRadius:10, alignSelf:'center', justifyContent:'space-between', flexDirection:'row', paddingRight:10}}>
          <Text style={{ padding: 15 }}>{props.text}</Text>
          <View style={{backgroundColor:'#e0e0e0', height:20, width:20, alignSelf:'center', borderRadius:5} }>

          </View>
    </View>
  );
}

const styles = StyleSheet.create({});
