import { StyleSheet } from "react-native";

export const styles = (colors) => StyleSheet.create({
    container: {
        padding: 15,
        borderColor: colors.border,
        borderWidth: 1,
        margin: 10,
        backgroundColor: colors.background,
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
        color: colors.primary
    },
    username: {
        marginRight: 5,
        color: colors.details,
        fontWeight: 'bold',
    },
    lowerTxt: {
        marginRight: 5,
        color: colors.primary
    },
    tabcoins: {
        marginRight: 5,
        color: colors.notification

    }

})