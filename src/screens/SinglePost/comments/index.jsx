import { View, Text } from 'react-native'
import { styles } from './styles'

export const Comments = ({ comment }) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.username}>{comment.owner_username}</Text>
                <Text style={styles.txt}>{comment.body}</Text>
                <Text style={styles.tabcoins}>{comment.tabcoins} tabcoins</Text>
            </View>
            <View>
                {comment.children.map((children, index) => {
                    return (
                        <View
                            key={index}
                            style={[styles.innercomments, styles.container]}
                        >
                            <Text style={styles.username}>
                                {children.owner_username}
                            </Text>
                            <Text style={styles.txt}>{children.body}</Text>
                            <Text style={styles.tabcoins}>
                                {children.tabcoins} tabcoins
                            </Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
