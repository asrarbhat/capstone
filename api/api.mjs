import axios from "axios";
let url = "http://localhost:8080/"
let login = async function (username, password) {
    let r = await axios.post(url + "get", { "username": username, "password": password })
    console.log(r.data);
}
let registration = async function (username, password) {
    let r = await axios.post(url + "registration", { "username": username, "password": password })
    console.log(r.data.username);
}
let update = async function (data) {
    let r = await axios.post(url + "update", data)

}

login("66", "8");