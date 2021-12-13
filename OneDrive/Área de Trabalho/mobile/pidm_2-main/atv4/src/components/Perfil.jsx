import React, {Component} from "react";
import {StyleSheet, View, Text, Button, Image} from 'react-native'

export default class Modal extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 24, padding:24, fontWeight:700 }}>
                    Perfil
                </Text>
                <View>

                <Image
                   style={styles_img.container_img}
                    source={{ uri: 'https://s2.glbimg.com/NlBu7nJs77b6D6UuCqsbc3OkL44=/0x0:2400x1600/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/x/k/AD7X7yQ4qAVUU5T8aXqg/02feb20-matue-andre-feltes-10469.jpg'}}
                />
            </View>

                <Text style={{ fontSize: 16, padding: 6}}>
                    Nome: {this.props.route.params.nome}
                </Text>

                <Text style={{ fontSize: 16, padding: 6 }}>
                    Idade: {this.props.route.params.idade}
                </Text>

                <Text style={{ fontSize: 16, padding: 6, paddingBottom: 16 }}>
                    E-mail: {this.props.route.params.email}
                </Text>



                <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
            </View>
        );
    }
}
const styles_img = StyleSheet.create({
    container_img: {

        width: 200,
        height: 200,
        borderRadius: 20,
    },
  });