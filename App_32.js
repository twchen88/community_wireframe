import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, ImagePropTypes, Modal, FlatList } from 'react-native';
import styles from './styles.js';
import listIcon from './assets/list.png';
import bigMessage from './assets/messagi1.png';
import calendar from './assets/Vector.png';
import smallMessage from './assets/messaginero1.png';

const Button1 = (props) => {
    return (
        <TouchableOpacity style={[
            styles.button1,
            {
                backgroundColor: props.color
            }
        ]}
            onPress={ () => {
                props.f(!props.b);
            }}
        >
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
    const [group1Visible, setGroup1Visible] = useState(false);
    const [group2Visible, setGroup2Visible] = useState(false);
    const [group3Visible, setGroup3Visible] = useState(false);
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
                    visible={group3Visible}
                >
                    <View style={styles.modalView}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
                            <Text style={{fontSize: 25, marginTop: 7.5, marginLeft: 7.5}}> Moving Picture </Text>
                            
                            <View style={{marginRight: 10, marginTop: 5}}>

                                <TouchableOpacity style={styles.closeButton}
                                onPress={ () => {setGroup3Visible(!group3Visible); }}>
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
                            <View style={{flex: 0.9, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between'}}> 
                                <View style={{flexDirection: 'row', paddingLeft: 7.5}}>
                                    <Image source={bigMessage}
                                            style={{width: 41,
                                                height: 39}}></Image>
                                    <Text style={styles.title}> Group chat </Text>
                                </View>
                                <View style={{flexDirection: 'row', paddingRight: 7.5}}>
                                    <Image source={calendar}></Image>
                                    <Text style={styles.title}> Add Schedule </Text>
                                </View>
                            </View>
                        </View>

                        <View style={{flex: 10, paddingTop: 25}}> 

                            <FlatList>

                            </FlatList>
                        </View>


                    </View>
                </Modal>
                <Button2> </Button2>
                <Button1 groupNum="2"
                        class="Communication Studio II"
                        numParticipants="5"
                        color="#EDD55C"
                        f={setGroup1Visible}
                        b={group1Visible}
                        />
               <Button1 groupNum="2"
                        class="Design for Social Innovation"
                        numParticipants="3"
                        color="#EBAB58"
                        f={setGroup2Visible}
                        b={group2Visible}
                        />
                <Button1 groupNum="3"
                         class="Moving Picture"
                         numParticipants="3"
                         color="#A8B05F"
                         f={setGroup3Visible}
                         b={group3Visible}
                         />
            </View>
        </View>
    );
}

export default App; 
