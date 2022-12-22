import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        backgroundColor: 'aliceblue',
        height: 120,
        // justifyContent: 'space-between'
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 10,
        paddingHorizontal: 10
    },
    lowerContainer: {
        flex: 3,
        flexDirection: 'row',
        marginLeft: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
    },
    username: {
        marginRight: 5,
        color: 'grey',
        fontWeight: 'bold',
    },
    lowerTxt: {
        marginRight: 5
    },
    tabcoins: {
        marginRight: 5,
        color: 'green'

    }

})