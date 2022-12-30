import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Button, Switch } from '@react-native-material/core'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { useContext, useState, useEffect } from 'react'
import { Storage } from 'expo-storage'
import ThemeContext from '../../Contexts/ThemeProvider'
import { getTheme, saveTheme } from '../../services/storageTheme'
import { useTheme } from '@react-navigation/native'

export const Menu = ({ navigation }) => {
    const colors = useTheme().colors
    const [toggleSwitch, setToggleSwitch] = useState()
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const handleSwitch = async () => {
        await setDarkMode((prevState) => {
            saveTheme(!prevState)
            return !prevState
        })
        setToggleSwitch((prevState) => !prevState)
    }

    useEffect(() => {
        ;(async () => {
            const themeData = await getTheme()
            setToggleSwitch(themeData)
        })()
    }, [])

    const handleLogout = () => {
        Storage.removeItem({ key: 'session' })
        navigation.navigate('login')
    }
    return (
        <View style={styles(colors).container}>
            <Button
                style={styles(colors).listItem}
                title="Tema Escuro"
                leadingMode="avatar"
                color={colors.background}
                tintColor={colors.primary}
                leading={
                    <Switch value={toggleSwitch} onChange={handleSwitch} />
                }
            />
            <Button
                style={styles(colors).listItem}
                title="Sair"
                leadingMode="avatar"
                color={colors.background}
                tintColor={colors.primary}
                leading={
                    <Icon name="logout" size={40} color={colors.primary} />
                }
                onPress={handleLogout}
            />
        </View>
    )
}
