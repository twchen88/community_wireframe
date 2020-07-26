import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: "#B60303"
    },
    modalView: {
        flex: 0.95,
        backgroundColor: "white",
        borderRadius: 10,
        top: 62.5
    },
    closeButton: {
        backgroundColor: "white",
        borderRadius: 50,
        width: 20,
        height: 25
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
    },
    title:{
        fontWeight: "600",
        fontSize: 15,
        color: "#B60303",
        paddingLeft: 5,
        paddingTop: 7.5
    },
    person: {
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    pfp: {
        borderRadius: 100
    }
})

export default styles;
