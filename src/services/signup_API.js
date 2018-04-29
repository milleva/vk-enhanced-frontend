import Axios from 'axios'
const baseUrl = 'https://vk-enhanced.herokuapp.com/api/signup'

const sendMembershiApplication = async (firstname, lastname, address, birthday, phone, email, parentphone, details) => {
    const res = await Axios.post(baseUrl,
        {
            firstname: firstname,
            lastname: lastname,
            address: address,
            birthday: birthday,
            phone: phone,
            email: email,
            parentphone: parentphone,
            details: details
        })
    return res
}

export default {sendMembershiApplication}
