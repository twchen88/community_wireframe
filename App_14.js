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
                <Text style={{fontFamily: "Times New Roman", color: "white", fontSize: 35, fontWeight: "bold", marginTop: 50, marginLeft: 4.5}}> Community </Text>

                <TouchableOpacity>
                    <Image source={listIcon}
                    style={{width: 30, height: 30,
                    marginLeft: 135, marginTop: 55
                    }}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
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
