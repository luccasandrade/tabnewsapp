import { StyleSheet } from "react-native";

export const styles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        borderColor: colors.border,
        borderWidth: 1,
        backgroundColor: colors.background
    },
    username: {
        color: colors.details,
        fontWeight: 'bold',
        margin: 5
    },
    txt: {
        margin: 10,
        color: colors.primary
    },
    tabcoins: {
        marginHorizontal: 10,
        color: colors.notification
    },
    innercomments: {
        marginTop: -13,
        marginLeft: 40
    },
})