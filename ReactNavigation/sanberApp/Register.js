import React, { useState } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    View, 
    Text,
     StyleSheet,
     Image,
     TouchableOpacity,
     TextInput,
     ScrollView,
     Button,

    } from 'react-native';


// export default class App extends React.Component
export default function App ({route, navigation}) {
    // _onPressButton(){

    //     <About/>
    
    //   };
    // constructor(props) {

    //     super(props);
    
    //     this.state = {text: ''};
    
    //   }

    
        
        return(
          
            <View style={styles.container}>
              <ScrollView >
                
                <View style={{ marginHorizontal:10, marginTop:36}}>
                    <Text style={{fontSize: 30,textAlign :'left', color:'#7A5B3E'}} >Welcome </Text>
                    <Text style={{fontSize: 15, paddingBottom:30,textAlign :'left', color:'#7A5B3E'}} >SignUp to Continue </Text>
                </View>

                <View style={{flexDirection:'column'}}>
                <Text style={{paddingLeft :15}}> Nama</Text>
                   <TextInput 
                   style={styles.input}
                   placeholder=""/>
                   <Text style={{paddingLeft :15}}> Email</Text>
                   <TextInput 
                   style={styles.input}
                   placeholder=""/>
                   
                   <Text style={{paddingLeft :15}}> Phone Number</Text>
                   <TextInput 
                   style={styles.input}
                   placeholder=""/>
                   <Text style={{paddingLeft :15}}> Password</Text>
                   <TextInput 
                   style={styles.input}
                   placeholder=""/>
                </View>
            

                <View style={styles.SubmitButton}>
                <TouchableOpacity
               onPress={() => navigation.navigate('Home')}
               
                >
                    <Text style={styles.SubmitButtonText}> SignUp </Text>
                </TouchableOpacity>
                
                </View>
                <View style={{paddingTop :30, flexDirection:'row', justifyContent :'center'}}>
                        <Text >Already have an  account ?</Text>
                        <Text >    </Text>
                        <TouchableOpacity activeOpacity = { 0.5 }
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{color:'#13747D'}}>Login!</Text>
                        </TouchableOpacity>

                    </View>
               
                {/* <Vew> */}
                {/* <Button
                    title="Menuju Screen Lain"
                    onPress={() => navigation.navigate('NamaRute')}
                />
                <Button
                    title="Menuju Screen Lain"
                    onPress={() => navigation.navigate('NamaRute', {key:'value'})}
                /> */}
                {/* <Text>{route.params.key}</Text>  */}
                {/* </View> */}
                </ScrollView>

            </View>
        )
    
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor :'#FEFEFE' ,
        
      },
      header :{
        backgroundColor : 'black',
      },
      body :{
        flexDirection :'column', 
        padding :'7%',

      },
      footer :{
        top :10,
        backgroundColor :'gray',
        marginBottom :'0%',
      },
    
      inputname :{
        backgroundColor :'#E0E0E0', 
        borderRadius:3
      },
      inputpass :{
        marginTop :10,
        backgroundColor :'#E0E0E0',  
        borderRadius:3
      },
      inputNameText :{
        paddingLeft :10,
        paddingVertical:10, 
        justifyContent:'flex-start', 
        color:'#1F1F1F',
      },
      SubmitButton: {
        marginTop:40,
        paddingVertical:10,
        backgroundColor:'#F77866',
        borderRadius:8,
      },
      
      SubmitButtonText:{
        color:'#FAFAFA',
        textAlign:'center',
        fontSize :20,
        fontFamily :'AnticSlab-Regular'
        
    },
    
   

    input :{
        marginVertical:8,
        marginHorizontal :15,
        justifyContent:'flex-start', 
        fontSize :15,
        borderBottomWidth:1,
        marginHorizontal :15,
        borderBottomColor :'#CDBDAE'


    },
    add :{
        marginHorizontal:15,
        flexDirection: 'row'
        
    },
    
    icons :{
        flexDirection :'column',
        padding:4,
        justifyContent : 'center',
        color : '#CDBDAE'
        
        
    },
    lines :{
        borderBottomWidth:1,
        marginHorizontal :15,
        borderBottomColor :'#CDBDAE'
    }



})