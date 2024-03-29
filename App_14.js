import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, ImagePropTypes } from 'react-native';
import styles from './styles.js';
import listIcon from './assets/list.png';

const Button1 = (props) => {
    return (
        <TouchableOpacity style={[
            styles.button1,
            {
                backgroundColor: props.color
            }
        ]}>
            <Text style = {{color: "white", fontWeight: "bold", 
            fontSize: 20}} >
                Study Group {props.groupNum}
            </Text>
            <Text style = {{color: "white", textAlign: "center", fontSize: 15}}>
                {props.class} {"\n"}
                {props.numParticipants} Participants
            </Text>
        </TouchableOpacity>
    );
}

const Button2 = () => {
    return (
        <TouchableOpacity style={[
            styles.button2
        ]}>
            <Text style = {{color: "white", fontWeight: "bold",
            fontSize: 15}}>  + Create A New Group </Text>
        </TouchableOpacity>    
    );
}


const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontFamily: "Times New Roman", color: "white", fontSize: 35, fontWeight: "bold", bottom: 5}}> Community </Text>

                <TouchableOpacity>
                    <Image source={listIcon}
                    style={{width: 30, height: 30, bottom: 5, right: 5
                    }}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={{backgroundColor: "#EFE8E8", padding: 15, flexDirection: "row", justifyContent: "space-around"}}>
                    <Image source={require("./assets/Vector_46.png")} style={{marginTop:7, marginLeft: -15}}></Image>
                    <Text style={{fontSize: 30, fontWeight: "600", marginLeft: -15}}> Collaboration Group</Text>
                </TouchableOpacity>
                <Button2> </Button2>
                <Button1 groupNum="2"
                        class="Communication Studio II"
                        numParticipants="5"
                        color="#EDD55C"
                        />
               <Button1 groupNum="2"
                        class="Design for Social Innovation"
                        numParticipants="3"
                        color="#EBAB58"
                        />
            </View>
        </View>
    );
}

export default App; 
