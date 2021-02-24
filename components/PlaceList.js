import React, { Component } from 'react'
import { List, ListItem } from 'native-base'
import { Text, View, StyleSheet } from 'react-native'
import PlaceCard from './PlaceCard';

import Beach from '../assets/images/beach.jpg';
import Castle from '../assets/images/castle.jpg';
import Rome from '../assets/images/colleseum.jpg';
import Fuji from '../assets/images/fuji.jpg';
import Jamaica from '../assets/images/jamaica.jpg';
import OtherBeach from '../assets/images/overhead-beach.jpg';
import Switzerland from '../assets/images/switz.jpg';
import ThaiBeach from '../assets/images/thai-beach.jpg';
import Thailand from '../assets/images/thailand.jpg';
import Tokyo from '../assets/images/tokyo.jpg';
import Venice from '../assets/images/venice.jpg';



export default class PlaceList extends Component {
    render() {
        return (
            <View style={styles.placeList}>
                <List>
                    <ListItem>
                        <PlaceCard img={Beach} title={"The Beach"} sub={"Like. Anywhere."} />
                    </ListItem>
                    <ListItem>
                        <PlaceCard img={Castle} title={"Awesome Castles"} sub={"Just no."} />
                    </ListItem>
                    <ListItem>
                        <PlaceCard img={Rome} title={"Rome"} sub={"They said nah"} />
                    </ListItem>
                    <ListItem>
                        <PlaceCard img={Fuji} title={"Mt Fuji"} sub={"They cancelled the Olympics. No."} />
                    </ListItem>
                    <ListItem>
                        <PlaceCard img={Jamaica} title={"Jamaica"} sub={"No, Mon. It not Irie"} />
                    </ListItem>
                    <ListItem>
                        <PlaceCard img={OtherBeach} title={"The Beach (again)"} sub={"Still no, Plague Boi"} />
                    </ListItem>
                    <ListItem>
                        <PlaceCard img={Switzerland} title={"Switzerland"} sub={"Not even the Swiss want us."} />
                    </ListItem>
                    <ListItem>
                        <PlaceCard img={Thailand} title={"Thailand"} sub={"Surprisingly, no."} />
                    </ListItem>
                    <ListItem>
                        <PlaceCard img={ThaiBeach} title={"Thai Beaches"} sub={"Not just the temples, but the beaches too. No."} />
                    </ListItem>
                    <ListItem>
                        <PlaceCard img={Tokyo} title={"Tokyo"} sub={"Japan? Still no."} />
                    </ListItem>
                    <ListItem>
                        <PlaceCard img={Venice} title={"Venice"} sub={"Seriously, no."} />
                    </ListItem>
                </List>

            </View>
        )
    }
}

const styles = StyleSheet.create( {
    placeList: {
      justifyContent: "center",
      alignItems: 'center',
    }
})
  