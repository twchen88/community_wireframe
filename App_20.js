import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, ImagePropTypes, Alert, Modal, TouchableHighlight } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './styles.js';
import listIcon from './assets/list.png';

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.modalView}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Text style={{fontSize: 25, marginTop: 7.5, marginLeft: 7.5}}> Create a New Group </Text>
                        </View>
                        <View style={{flex: 11}}>
                            <SearchBar
                                    placeholder="Search"
                                    platform="ios"
                            > </SearchBar>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity style={[styles.button2]}
                    onPress={ () => {
                        setModalVisible(!modalVisible);
                    }}>
                    <Text style = {{color: "white", fontWeight: "bold",
                    fontSize: 15}}> + Create A New Group </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default App; 