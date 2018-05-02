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

export default {sendMembershiApplication, sendTrainingApplication, sendPongApplication}
