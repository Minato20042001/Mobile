import React, {Component} from "react";
import {View, Text, Button} from 'react-native';
import IMCMsg from "./IMCMsg";


export default class IMCCalc extends Component{
   
    render(){

        const {peso,altura} = this.props
        if(!peso  || !altura) return null 
        const imc = peso/(altura*altura)
        return(
            <View>
                <Text style={ {fontSize: 18}}><strong>Seu IMC é {imc}</strong></Text>
                <IMCMsg imc={imc}></IMCMsg>
            </View>
            
        )
    }
}