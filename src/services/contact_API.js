import Axios from 'axios'
const baseUrl = 'https://vk-enhanced.herokuapp.com/api/messages'

const sendMessage = async (name, email, details) => {
    const res = await Axios.post(baseUrl, {name: name, email: email, details: details})
    return res
}

export default {sendMessage}
