import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import Tasks from './Components/Tasks';

export default function App()
{
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);
  const handleTask = () =>
  {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  }

  const handleComplete = (index) =>
  {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  }
  return (
    <View style={{backgroundColor:'#eee', height:'100%'}}>
    <View style={{ backgroundColor: '#0091ff', height: 200, width: '100%', borderRadius:10, }}>
     
      <View style={{backgroundColor:'#fff', height:250, width:'80%', alignSelf:'center', marginTop:60, borderRadius:10,}}>
          <TextInput 
            placeholder='Add Task'
            value={task}
            onChangeText={setTask}
            style={{backgroundColor:'#b8ffc8', height:50, width:'80%', alignSelf:'center', marginTop:20, borderRadius:10, padding:15}}
          />
          <TouchableOpacity
            onPress={handleTask}
          style={{backgroundColor:'#0091ff', height:40, width:60, alignSelf:'center', marginTop:20, alignItems:'center', justifyContent:'center', borderRadius:100}}
          >
            <Text style={{color: "#fff", fontSize:30}}>+</Text>
          </TouchableOpacity>
      </View>
     
      </View>
      
      <View style={{backgroundColor:'#fff', height:350, width:'80%', alignSelf:'center', marginTop:140, borderRadius:10,}}>
       <ScrollView showsVerticalScrollIndicator={false}>
          {
            taskItem.map(
              (item, index) =>
              {
                return <TouchableOpacity
                  onPress={() => handleComplete(index)}
                  key={index}
                ><Tasks  text={item} /></TouchableOpacity>

              }
            )
          }

          </ScrollView>
    </View>

  </View>
      );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
