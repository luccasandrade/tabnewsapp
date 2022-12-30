import React, { useContext } from 'react'
import { useTheme } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    ScrollView,
    useWindowDimensions,
} from 'react-native'
import { Menu } from '../Menu/index.jsx'
import { Topic } from './components/topic/index.jsx'
import { styles, feedContainer } from './styles'
import { getFeed } from '../../services/api.js'
import { Backdrop, AppBar, IconButton } from '@react-native-material/core'

import MCICONS from '@expo/vector-icons/MaterialCommunityIcons'
import SLICONS from '@expo/vector-icons/SimpleLineIcons'
import IONICONS from '@expo/vector-icons/Ionicons'

const Feed = ({ navigation }) => {
    const colors = useTheme().colors
    const screenSize = useWindowDimensions().width
    const [feed, setFeed] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [strategyState, setStrategyState] = useState('relevant')
    const [strategyTitle, setStrategyTitle] = useState()
    const [revealed, setRevealed] = useState(false)
    const [showMenu, setShowMenu] = useState(true)

    const updateFeed = async (page, perpage, strategy) => {
        let newPage = page
        if (strategyState !== strategy) {
            setPageNum(1)
            newPage = 1
        }
        setStrategyState(strategy)
        if (strategy === 'relevant') {
            setStrategyTitle('Relevantes')
        }
        if (strategy === 'new') {
            setStrategyTitle('Mais Recentes')
        }
        if (strategy === 'old') {
            setStrategyTitle('Mais Antigos')
        }
        const data = await getFeed(newPage.toString(), perpage, strategy)
        setFeed(data)
    }
    const handlePageNum = (direction) => {
        let value = 0
        if (direction === 'prev') {
            value = pageNum <= 1 ? 0 : -1
        } else if (direction === 'next') {
            value = 1
        }
        const total = pageNum + value
        setPageNum(total)
        updateFeed(total.toString(), '10', strategyState)
    }

    useEffect(() => {
        ;(() => {
            updateFeed(1, '10', 'relevant')
        })()
    }, [null])

    return (
        <Backdrop
            subheaderContainerStyle={styles(colors).subheaderContainer}
            subheader={
                <Text style={styles(colors).backdropSubheader}>
                    {strategyTitle}
                </Text>
            }
            revealed={revealed}
            header={
                <AppBar
                    title="TabNews App"
                    color={colors.details}
                    leading={(props) => (
                        <IconButton
                            icon={(props) => (
                                <MCICONS
                                    name={
                                        revealed
                                            ? showMenu
                                                ? ''
                                                : 'close'
                                            : 'menu'
                                    }
                                    {...props}
                                />
                            )}
                            onPress={() => {
                                setShowMenu(false)
                                setRevealed((prevState) => !prevState)
                            }}
                            {...props}
                        />
                    )}
                    trailing={(props) => (
                        <IconButton
                            icon={(props) => (
                                <SLICONS
                                    name={
                                        revealed
                                            ? showMenu
                                                ? 'settings'
                                                : ''
                                            : 'settings'
                                    }
                                    {...props}
                                />
                            )}
                            {...props}
                            onPress={() => {
                                setShowMenu(true)
                                setRevealed((prevState) => !prevState)
                            }}
                        />
                    )}
                />
            }
            backLayer={
                showMenu ? (
                    <Menu navigation={navigation} />
                ) : (
                    <View style={styles(colors).header}>
                        <TouchableOpacity
                            onPress={() =>
                                updateFeed(pageNum, '10', 'relevant')
                            }
                            style={styles(colors).topTags}
                        >
                            <Text style={styles(colors).topTagsTxt}>
                                Relevantes
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => updateFeed(pageNum, '10', 'new')}
                            style={styles(colors).topTags}
                        >
                            <Text style={styles(colors).topTagsTxt}>
                                Recentes
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => updateFeed(pageNum, '10', 'old')}
                            style={styles(colors).topTags}
                        >
                            <Text style={styles(colors).topTagsTxt}>
                                Mais antigas
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        >
            <ScrollView style={feedContainer(screenSize, colors).feedContainer}>
                {feed.map((topic, index) => (
                    <Topic
                        colors={colors}
                        navigation={navigation}
                        key={index}
                        topic={topic}
                        index={index}
                        pageNum={pageNum}
                    />
                ))}
                <View style={styles(colors).pageBtnsContainer}>
                    <TouchableOpacity
                        style={styles(colors).btnPagesContainer}
                        onPress={() => handlePageNum('prev')}
                    >
                        <Text style={styles(colors).pageBtnsTxt}>
                            <IONICONS
                                name="arrow-back"
                                color={colors.primary}
                                size={20}
                            />
                            {`Anterior`}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles(colors).btnPagesContainer}
                        onPress={() => handlePageNum('next')}
                    >
                        <Text style={styles(colors).pageBtnsTxt}>
                            {`Próxima`}
                            <IONICONS
                                name="arrow-forward"
                                color={colors.primary}
                                size={20}
                            />
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Backdrop>
    )
}

export default Feed
