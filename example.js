// App.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const Button = (props) => {
    return (
        <TouchableOpacity style={[
            styles.button,
            {
                backgroundColor: props.color
            }
        ]}>
            <Text> {props.name} </Text>
        </TouchableOpacity>
    );
}

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontFamily: "Times New Roman", color: "white", fontSize: 30, fontWeight: "bold"}}> Community </Text>
            </View>
            <View style={styles.body}>
                <Button name="BUDDIES"
                        color="yellow"
                        />
               <Button name="SCHEDULE"
                        color="orange"
                        /> 
                <Button name="COLLABORATION"
                        color="red"
                        />
                <Button name="RESOURCES"
                        color="green"
                        />
            </View>
        </View>
    );
}

export default App; 

//styles.js
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    header: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        bottom: 10,
        backgroundColor: "red"
    },
    body: {
        flex: 5.8,
        backgroundColor: "purple",
        flexDirection: "column"
    },
    button: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles; 