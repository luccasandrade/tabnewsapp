import { TouchableOpacity, Text, TextInput, View, SafeAreaView, ScrollView } from 'react-native'
import { styles } from './styles'
import Markdown from 'react-native-showdown';
import { useEffect, useState } from 'react';
import { getComents } from '../../services/api';
import { Coments } from './coments';
const SinglePost = ({route}) => {
    const [visible, setVisible] = useState (false)
    const {post} = route.params
    const slug = post.slug
    const user = post.owner_username
    const [coments, setComents] = useState([])
    useEffect(() => {
        (async () => {
            const allcoments = await getComents(user,slug)
            setComents(allcoments)
            })()
    }, [])


    
    async (user,slug) => {
        comentsArray = await getComents(user,slug)
        console.log(comentsArray)
    }
 
    return(
        <View style={styles.container}>
            <Text style={styles.title} >{post.title}</Text>
            <Markdown style={styles.markdown} markdown={post.body}></Markdown>
            <TouchableOpacity onPress={() => setVisible(!visible)}>
                <Text style={styles.title}>{visible?"↓ Comentários:":'↑ Comentários:'}</Text>      
            </TouchableOpacity>
            <ScrollView style={visible?styles.comentsContainer:styles.hidden}>
                {(coments.map((coment)=> <Coments coment={coment}/>))}                
            </ScrollView>
        </View>
    )
}

export default SinglePost