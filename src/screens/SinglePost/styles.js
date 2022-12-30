import { StyleSheet } from "react-native";

export const styles = (colors) => StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: colors.details,
        fontSize: 25,
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: colors.border
    },
    markdown: {
        flex: 1,
        marginHorizontal: 10
    },
    commentsTitle: {
        fontSize: 20,
    },
    commentsContainer: {
        flex: 0,
    },
    hidden: {
        display: 'none'
    }
})