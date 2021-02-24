import React, { Component } from 'react'
import { Card, CardItem, Body, Text } from 'native-base'
import { View, Image, StyleSheet } from 'react-native'
import Beach from '../assets/images/greece.jpg'

export default class PlaceCard extends Component {
    render() {
        return (
                <Card style={styles.cardItself}>
                    <CardItem cardBody>
                        <Image source={this.props.img} style={styles.cardImage} />
                    </CardItem>
                    <CardItem>
                        <View>
                            <Text>{this.props.title}</Text>
                            <Text>{this.props.sub}</Text>
                        </View>
                    </CardItem>
                </Card>
        )
    }
}

const styles = StyleSheet.create( {
    cardImage: {
      flex: 1,
      height: 200,
      resizeMode: 'cover',
    },
    cardItself: {
        width: '100%',
    }
  })
  