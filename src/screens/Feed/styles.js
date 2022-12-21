import { StyleSheet, useWindowDimensions } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'black',
    },
    topTags: {
        padding: 15,
        borderColor: 'white',
        borderWidth: 1
    },
    topTagsTxt: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
    },

    pageBtnsTxt: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        padding: 15,
        marginVertical: 5,
        borderColor: 'white',
        borderWidth: 1
    },
    pageBtnsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'black',
    }
})


export const feedContainer = (screenSize) => StyleSheet.create({
    feedContainer: {
        backgroundColor: 'white',
        width: screenSize,
    },
})