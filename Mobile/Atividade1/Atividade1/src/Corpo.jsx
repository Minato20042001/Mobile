import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Corpo extends Component{

    render(){
        let img = {uri :'https://pbs.twimg.com/profile_images/1426058507288199168/gWuvefhB.jpg'}
        return(

            <Image
                source={img}
                style={ {width:240,height:320} }
            />

        )
    }
}