import React, { Component } from 'react'
import { Text, View, FlatList, Image, SafeAreaView } from 'react-native'
import {Icon} from './icon'
import {Images} from './image'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


export class HomeScreen extends Component {
    renderItem = ({item} )=>{
        return(
            <View style={{alignItems :'center'}} >
                <Image source={item.Image} style ={{width:45, height :45}}/>
                <Text >{item.IconName}</Text>
            </View>
        )
    }
    renderItemImage =({item}) =>{
        return(
            <View style={{alignItems :'center'}} >
                <Image source={item.Image} style ={{width:wp ('30'), height :hp ('26'), marginHorizontal :6}}/>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView>
            <View>
                <Text> home </Text>
                <FlatList
                        //style ={styles.tabSkill}
                        data={Icon.items}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal ={true}
                        showsHorizontalScrollIndicator ={false}
                        //numColumns ={3}
                       
                        
                    />
                <FlatList
                        //style ={styles.tabSkill}
                        data={Images.items}
                        renderItem={this.renderItemImage}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator ={false}
                        numColumns ={3}
                        
                    />
            </View>
            </SafeAreaView>
        )
    }
}

export default HomeScreen
