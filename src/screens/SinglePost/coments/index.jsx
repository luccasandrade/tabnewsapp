import { View, Text } from "react-native"
import { styles } from "./styles"

export const Coments = ({coment}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>{coment.owner_username}</Text>    
            <Text style={styles.txt}>{coment.body}</Text>    
            <Text style={styles.tabcoins}>{coment.tabcoins} tabcoins</Text>    
        </View>
    )
}