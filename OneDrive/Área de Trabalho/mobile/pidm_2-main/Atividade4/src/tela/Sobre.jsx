import React, {Component} from "react";
import {View, Text} from 'react-native';

export default class Sobre extends Component{

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize:18, fontWeight: 700, marginBottom: 15}}> Matuê</Text>
                <View style={{ width: 340, paddingLeft: 10}}>
                <Text style={{fontSize:20}}>Quem é?</Text>
                <Text style={{fontSize:18, color: 'gray'}}>Matheus Brasileiro Aguiar, mais conhecido como Matuê, é um rapper brasileiro.</Text>
                <Text style={{fontSize:18, marginTop: 20}}>Primeiro hit nacional:</Text>
                <Text style={{fontSize:18, color: 'gray'}}>Ficou conhecido com o single "Anos Luz", lançado em 2017. É considerado um símbolo do trap brasileiro</Text>
                </View>
            </View>
        )
    }
}