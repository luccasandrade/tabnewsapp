import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
    },
    topTags: {
        margin: 15
    },
    topTagsTxt: {
        fontSize: 20,
        fontWeight: '500'
    },
    feedContainer: {
        backgroundColor: 'aliceblue',
        width: 400
    },
    pageBtnsTxt: {
        fontSize: 22,
        marginVertical: 5,
        marginHorizontal: 10
    },
    pageBtnsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5
    }
})