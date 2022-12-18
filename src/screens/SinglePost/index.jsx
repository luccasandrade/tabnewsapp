import { TouchableOpacity, Text, TextInput, View, ScrollView } from 'react-native'
import { styles } from './styles'
// import HTMLView from 'react-native-htmlview';



const SinglePost = ({route}) => {
    const {post} = route.params

    return(
        <ScrollView>
            <Text style={styles.title}>{post.title}</Text>
            {/* <HTMLView value={post.body}/> */}
        </ScrollView>
    )
}

export default SinglePost