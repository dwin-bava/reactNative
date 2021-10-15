import React from "react";
import {View, Text, Image} from "react-native";

export default function Login(){
    return(
    <View style={{flex: 1,}}>
        <View style={{flex: 1, backgroundColor:"green"}}>
            <Image style={{
            width: 200,
            height: 200,
            
        }}
        source={{
            uri: "https://images.unsplash.com/photo-1519948733100-714ad43ebf5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        }}
    
            />
            <Text style={{color:"black" }}>hey there</Text>
        </View>
        <View style={{flex: 1, backgroundColor:"red"}}>
            <Text>Hi</Text>
        </View>
            
    </View>
    )
    
}