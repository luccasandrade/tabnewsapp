import { StyleSheet } from "react-native";

export const styles = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            alignItems: 'flex-start',
            justifyContent: 'center',
            alignItems: 'center'
        },
        header: {
            flexDirection: 'row',
            backgroundColor: colors.details,
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        backdropSubheader: {
            fontSize: 20,
            marginLeft: 10,
            marginVertical: 10,
            color: colors.border
        },
        subheaderContainer: {
            backgroundColor: colors.background
        },
        topTags: {
            padding: 15,

        },
        topTagsTxt: {
            fontSize: 20,
            fontWeight: '500',
            color: 'white',
        },

        pageBtnsTxt: {
            fontSize: 20,
            fontWeight: '500',
            color: colors.primary,
            padding: 15,
            marginVertical: 5,
        },

        pageBtnsContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: colors.background,
        },
        btnPagesContainer: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    })



export const feedContainer = (screenSize, colors) => StyleSheet.create({
    feedContainer: {
        backgroundColor: colors.background,
        width: screenSize,
    },
})