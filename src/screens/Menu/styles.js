import { StyleSheet } from "react-native";

export const styles = (colors) => StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: colors.primary
    },
    listItem: {
        paddingVertical: 20,
        borderWidth: 0.2,
        borderColor: colors.border,
        alignItems: 'flex-start',
    }
})