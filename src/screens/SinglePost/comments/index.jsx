import { useTheme } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const Comments = ({ comment }) => {
    const colors = useTheme().colors
    return (
        <View>
            <View style={styles(colors).container}>
                <Text style={styles(colors).username}>
                    {comment.owner_username}
                </Text>
                <Text style={styles(colors).txt}>{comment.body}</Text>
                <Text style={styles(colors).tabcoins}>
                    {comment.tabcoins} tabcoins
                </Text>
            </View>
            <View>
                {comment.children.map((children, index) => {
                    return (
                        <View
                            key={index}
                            style={[
                                styles(colors).innercomments,
                                styles(colors).container,
                            ]}
                        >
                            <Text style={styles(colors).username}>
                                {children.owner_username}
                            </Text>
                            <Text style={styles(colors).txt}>
                                {children.body}
                            </Text>
                            <Text style={styles(colors).tabcoins}>
                                {children.tabcoins} tabcoins
                            </Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
