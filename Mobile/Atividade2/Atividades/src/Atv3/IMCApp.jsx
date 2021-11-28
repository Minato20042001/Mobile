import React, {Component} from "react";
import {View, Text, Button,StyleSheet,TextInput} from 'react-native';
import IMCCalc from "./IMCCalc";

export default class IMCApp extends Component{

    
    
    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, ativo: false}
        this.Calcular = this.Calcular.bind(this) 
    }

    botao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({ativo: true})
        }
    }

    Calcular (ativo) {
        
        if(ativo === true){
            return(
                <View>
                    <IMCCalc altura={this.state.altura} peso={this.state.peso}> </IMCCalc>
                </View>
            )
        }   
       
    }

    render(){


        return (
            
            <View>
                <Text style={{fontSize:20}}>
                    Digite suas informações abaixo
                </Text>

                <br/>
              
                <Text style={styles.texto}>
                    Peso
                </Text>
                        
                <TextInput
                    onChangeText={(peso)=>{this.setState({peso})}}
                    placeholder="Ex: 60"
                
                />

                <br/>

                <Text style={styles.texto}>
                   Altura
                </Text>
                <TextInput
                    onChangeText={(altura)=>{this.setState({altura})}}
                    placeholder="Ex: 1.67"
                
                />

                <br/>

                <View>
                    <Button
                        
                        title="Calcular"
                        onPress={()=>{
                            this.botao()
                        }}
                    
                    />
                     
                </View>
                <br/>
                {this.Calcular(this.state.ativo)} 

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 16,
        alignItems: 'center',
        
    },
   
})