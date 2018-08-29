import Axios from 'axios'
const baseUrl = 'https://vk-enhanced.herokuapp.com/api/signup'

const sendMembershiApplication = async (details) => {
    const res = await Axios.post(baseUrl, details)
    return res
}

const sendTrainingApplication = async (details) => {
    const res = await Axios.post(`${baseUrl}/training`, details)
    return res
}

const sendPongApplication = async (details) => {
    const res = await Axios.post(`${baseUrl}/pong`, details)
    return res
}

const sendLoscabaSignup = async (details) => {
    return await Axios.post(`${baseUrl}/loscaba`, details)
}

export default {sendMembershiApplication, sendTrainingApplication, sendPongApplication, sendLoscabaSignup}
