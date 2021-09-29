import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Disciplina extends Component{
    render(){
        return(
            <View>
                <Text>Disciplina: <strong>{this.props.nome}</strong></Text>
            </View>
        )
    }
}