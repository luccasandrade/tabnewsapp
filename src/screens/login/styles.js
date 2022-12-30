import { StyleSheet } from "react-native";

export const styles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        marginBottom: 40,
        color: colors.primary
    },
    form: {
        width: 250
    },
    label: {
        fontSize: 30,
        color: colors.primary
    },
    input: {
        borderColor: colors.border,
        borderWidth: 1,
        height: 45,
        padding: 10,
        color: colors.primary
    },
    btn: {
        marginVertical: 10,
        backgroundColor: colors.details,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        fontSize: 20,
        color: 'white'
    }
});