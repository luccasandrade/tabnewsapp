import {
    TouchableOpacity,
    Text,
    TextInput,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native'
import { styles } from './styles'
import Markdown from 'react-native-showdown'
import { useEffect, useState } from 'react'
import { getComments } from '../../services/api'
import { Comments } from './comments'
import { useTheme } from '@react-navigation/native'

const SinglePost = ({ route }) => {
    const colors = useTheme().colors
    const [visible, setVisible] = useState(false)
    const { post } = route.params
    const slug = post.slug
    const user = post.owner_username
    const [comments, setComments] = useState([])
    useEffect(() => {
        ;(async () => {
            const allcomments = await getComments(user, slug)
            setComments(allcomments)
        })()
    }, [])

    return (
        <View style={styles(colors).container}>
            <Text style={styles(colors).title}>{post.title}</Text>
            <Markdown
                style={styles(colors).markdown}
                markdown={post.body}
            ></Markdown>
            <TouchableOpacity onPress={() => setVisible(!visible)}>
                <Text
                    style={[styles(colors).title, styles(colors).commentsTitle]}
                >
                    {visible ? '- Comentários' : '+ Comentários'}
                </Text>
            </TouchableOpacity>
            <ScrollView
                style={
                    visible
                        ? styles(colors).commentsContainer
                        : styles(colors).hidden
                }
            >
                {comments.map((comment, index) => (
                    <Comments key={index} comment={comment} />
                ))}
            </ScrollView>
        </View>
    )
}

export default SinglePost
