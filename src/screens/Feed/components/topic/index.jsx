import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import { styles } from './styles'
import { getPost } from '../../../../services/api'

export const Topic = ({ topic, index, pageNum, navigation, colors }) => {
    const username = topic.owner_username
    const coments = topic.children_deep_count
    const tabcoins = topic.tabcoins
    const title = topic.title
    const slug = topic.slug

    const enterTopic = async (username, slug) => {
        const post = await getPost(username, slug)
        navigation.navigate('singlepost', { post: post })
    }
    return (
        <View>
            <TouchableOpacity
                style={styles(colors).container}
                onPress={() => enterTopic(username, slug)}
            >
                <View style={styles(colors).upperContainer}>
                    <Text style={styles(colors).title}>
                        {(pageNum - 1) * 10 + (index + 1)}.{' '}
                    </Text>
                    <Text style={styles(colors).title}>{title}</Text>
                </View>
                <View style={styles(colors).lowerContainer}>
                    <Text style={styles(colors).username}>{username}</Text>
                    <Text style={styles(colors).tabcoins}>
                        {tabcoins} TabCoins
                    </Text>
                    <Text style={styles(colors).lowerTxt}>
                        {coments} Comentários
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
