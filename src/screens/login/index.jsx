import { useEffect, useState } from 'react'
import { TouchableOpacity, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { CreateSession } from '../../services/api'
import { Storage } from 'expo-storage'
import { useTheme } from '@react-navigation/native'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const colors = useTheme().colors

    useEffect(() => {
        ;(async () => {
            const storageData = await Storage.getItem({ key: 'session' })
            if (storageData) {
                const jsonData = JSON.parse(storageData)
                const now = new Date()
                const tokenDate = new Date(jsonData.expires_at)
                tokenDate.getTime() > now.getTime()
                    ? navigation.navigate('feed')
                    : ''
            }
        })()
    }, [])

    const handleLogin = async () => {
        const status = await CreateSession(email, password)
        status === 201 ? navigation.navigate('feed') : ''
    }

    return (
        <View style={styles(colors).container}>
            <Text style={styles(colors).title}>Login</Text>
            <View style={styles(colors).form}>
                <Text style={styles(colors).label}>Email</Text>
                <TextInput
                    onChangeText={setEmail}
                    maxLength={32}
                    blurOnSubmit={true}
                    textContentType="email"
                    style={styles(colors).input}
                    value={email}
                />
                <Text style={styles(colors).label}>Password</Text>
                <TextInput
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    maxLength={32}
                    blurOnSubmit={true}
                    textContentType="password"
                    style={styles(colors).input}
                    value={password}
                />
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles(colors).btn}
                >
                    <Text style={styles(colors).btnTxt}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
