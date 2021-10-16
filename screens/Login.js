import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";

export default function Login(){
    return(
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
       
        <Image style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            marginBottom: 20,
            
        }}
        source={{
            uri: "https://images.unsplash.com/photo-1519948733100-714ad43ebf5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        }}
    
        />
        <Text style={{color:"black", fontSize: 25}}>Welcome to</Text>
        <Text style={{color:"black", fontSize: 30, fontWeight:"bold"}}>Power Bike Shop</Text>
    </View>
    )
    
}