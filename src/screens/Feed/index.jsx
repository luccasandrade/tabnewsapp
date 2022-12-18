import React from 'react'
import { useEffect, useState } from 'react'
import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import { Topic } from './components/topic/index.jsx'
import { styles } from './styles'
import { getFeed } from '../../services/api.js'

const Feed = ({navigation}) => {
    const [feed, setFeed] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [strategyState, setStrategyState] = useState('relevant')
    
    const updateFeed = async (page, perpage, strategy) => {
        let newPage = page
        if (strategyState!==strategy){
            setPageNum(1)
            newPage = 1
        }
        setStrategyState(strategy)
       const data = await getFeed(newPage.toString(), perpage, strategy)
       setFeed(data)
    }
    const handlePageNum = (direction) =>{
        let value = 0
        if (direction==='prev'){
            value = pageNum<=1?0:-1
        }else if (direction==='next'){
            value = 1
        }
        const total = (pageNum + value)
        setPageNum(total)
        updateFeed(total.toString(),'10', strategyState)
    }

    useEffect(() => {
        (() => {
            updateFeed(1,'10','relevant')
        })()
    },[null])
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => updateFeed(pageNum,'10', 'relevant')} style={styles.topTags}>
                    <Text style={styles.topTagsTxt}>Relevantes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateFeed(pageNum,'10', 'new')} style={styles.topTags}>
                    <Text style={styles.topTagsTxt}>Recentes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateFeed(pageNum,'10', 'old')} style={styles.topTags}>
                    <Text style={styles.topTagsTxt}>Mais antigas</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.feedContainer}>
                {feed.map((topic, index) => <Topic navigation={navigation} key={index} topic={topic} index={index} pageNum={pageNum} />)}
                <View style={styles.pageBtnsContainer} >
                    <TouchableOpacity onPress={() => handlePageNum('prev')}><Text style={styles.pageBtnsTxt}>{`<< Anterior`}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePageNum('next')}><Text style={styles.pageBtnsTxt}>{`Próxima >>`}</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Feed
