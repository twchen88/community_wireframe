import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header: {
        flex: 1, 
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-end',
        bottom: 5,
        backgroundColor: "#B60303"
    },
    topButton: {
        backgroundColor: "red",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        bottom: 10,
    },
    body: {
        flex: 5.8,
        backgroundColor: "white",
        flexDirection: "column"
    },
    button1: { // groups
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15
    },
    button2: { // create
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B60303",
        padding: 10,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 5
    }
})

export default styles; 