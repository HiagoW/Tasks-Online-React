import {Alert, Platform} from 'react-native'

const server = Platform.OS === 'ios'
    ? 'http://localhost:3000' : 'http://192.168.15.12:3000'

function showError(err) {
    err.response && err.response.data ?
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err.response.data}`) :
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

function showSuccess(msg){
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }