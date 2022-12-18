import { useState } from 'react'
import { TouchableOpacity, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { CreateSession } from '../../services/api'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        CreateSession(email, password)
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
