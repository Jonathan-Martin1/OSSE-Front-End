import axios from 'axios'
// import jwt from 'jwt-simple'

// const API = process.env.REACT_APP_API_REGISTRATION_LOGIN || "http://localhost:5000";
const API = "http://localhost:5000/registration"
export async function axoisJson(API, loginData) {
    console.log("loginData line 7 API: ", loginData)
    try {
        const response = await axios.get(API, loginData);
        console.log('response line 10: ', response)
        if (response.status === 204) {
            return null
        }
        const payload = await response.json();
        if (payload.error) {
            return Promise.reject({ message: payload.error });
        }
        return payload.data;
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            throw error;
        }
        return Promise.resolve({ message: payload.error });
    }
}


export async function createLogin(loginData) {
    const url = `${API}/login`;
    const { username, password } = loginData;
    
    console.log("loginData line 32 createRegistration API: ", loginData)
    return await axoisJson(url, loginData)
}
    // await axios.get(`${API}`).then((response) => {}
    // axios.get(`${API}`).then((response) => {
    //     // Gets the data from the database
    //     for (const [index, value] of response.data.data.entries()) {
    //       const { registration_id, username, password, email } = value
    //       if (
    //         (formData.userName === index,
    //         value.username && formData.password === index,
    //         value.password)
    //       ) {
    //         // Checks if the username and password match
    //         const token = jwt.encode(
    //           {
    //             registration_id,
    //             username,
    //             email,
    //             password,
    //           },
    //           'secret'
    //         )
    //         }
// }