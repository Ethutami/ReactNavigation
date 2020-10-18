import React, { Component } from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import {Icon} from './icon'


export class HomeScreen extends Component {
    renderItem = ({item} )=>{
        return(
            <View style={{alignItems :'center'}} >

                <Image source={item.Image} style ={{width:45, height :45}}/>
                <Text >{item.IconName}</Text>
            </View>
        )
    }

    render() {
        return (
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
            </View>
        )
    }
}

export default HomeScreen
