import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Corpo extends Component{

    render(){
        let img = {uri :'https://i.scdn.co/image/ab6761610000e5ebf9f3437fe3ca3a832e6bd096'}
        return(

            <Image
                source={img}
                style={ {width:240,height:320} }
            />

        )
    }
}