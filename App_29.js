import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, ImagePropTypes, Modal, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './styles.js';
import listIcon from './assets/list.png';
import Profiles from './Profiles.js';



const AddButton = () => {
    return (
        <TouchableOpacity style={styles.addbutton}>
            <Text style={{color: "white", fontSize: 14}}> +Add </Text>
        </TouchableOpacity>
    )
}

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
                <TouchableOpacity style={{backgroundColor: "#EFE8E8", padding: 15, flexDirection: "row", justifyContent: "space-around"}}>
                    <Image source={require("./assets/Vector_46.png")} style={{marginTop:7, marginLeft: -15}}></Image>
                    <Text style={{fontSize: 30, fontWeight: "600", marginLeft: -15}}> Collaboration Group</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.modalView}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
                            <Text style={{fontSize: 25, marginTop: 7.5, marginLeft: 7.5}}> Create a New Group </Text>
                            
                            <View style={{marginRight: 10, marginTop: 5}}>

                                <TouchableOpacity style={styles.closeButton}
                                onPress={ () => {setModalVisible(!modalVisible); }}>
                                    <Text style={{color: "#B60303", fontSize: 25, fontWeight: "bold"}}> x </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>

                        <View style={{flex: 1}}>
                            <View
                                style={{
                                borderBottomColor: '#CBCBCB',
                                borderBottomWidth: 1,
                                marginLeft: 7.5,
                                marginRight: 7.5,
                                bottom: 7.5
                                }} />
                            <SearchBar
                                    placeholder="Search"
                                    platform={Platform.OS}
                                    searchIcon={{size: 24}}
                                    round
                            > </SearchBar>
                        </View>

                        <View style={{flex: 10, paddingTop: 25}}> 
                            <Text style={{fontWeight: "bold", fontSize: 16, paddingLeft: 7.5}}> Select Participants </Text>
                            <FlatList
                                data={Profiles}
                                keyExtractor={(item, index) => item.id}
                                renderItem={({item}) => (
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", paddingBottom: 10}}>
                                        <View style={styles.person}>
                                            <Image source={item.src} style={styles.pfp} />
                                            <Text style={{paddingLeft: 20}} >{item.name}</Text>
                                        </View>
                                        <AddButton style={{right: 20}}></AddButton>
                                    </View>
                                )}
                            />
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
