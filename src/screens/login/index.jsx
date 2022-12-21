import { useEffect, useState } from 'react'
import { TouchableOpacity, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { CreateSession } from '../../services/api'
import { Storage } from "expo-storage";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        ( async()=>{
            const storageData = await Storage.getItem({key: 'session',})
            if(storageData){
                const jsonData = JSON.parse(storageData)
                const now = new Date()
                const tokenDate = new Date(jsonData.expires_at)
                tokenDate.getTime()>now.getTime()?navigation.navigate('feed'):''
            }
        })()    
    }, [])
    

    const handleLogin = async () => {
        const status = await CreateSession(email, password)
        console.log(status)
        console.log(typeof(status))
        status===201?navigation.navigate('feed'):''
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    onChangeText={setEmail}
                    maxLength={32}
                    blurOnSubmit={true}
                    textContentType="email"
                    style={styles.input}
                    value={email}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    maxLength={32}
                    blurOnSubmit={true}
                    textContentType="password"
                    style={styles.input}
                    value={password}
                />
                <TouchableOpacity onPress={handleLogin} style={styles.btn}>
                    <Text style={styles.btnTxt}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
