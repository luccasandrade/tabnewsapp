import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        marginBottom: 40
    },
    form: {
        width: 250
    },
    label: {
        fontSize: 30
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 45,
        padding: 10
    },
    btn: {
        marginVertical: 10,
        backgroundColor: 'green',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        fontSize: 20,
        color: 'white'
    }
});