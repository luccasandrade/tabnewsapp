import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        backgroundColor: 'aliceblue'
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 10
    },
    lowerContainer: {
        flexDirection: 'row',
        marginLeft: 20
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
    },
    lowerTxt: {
        marginRight: 5
    }

})