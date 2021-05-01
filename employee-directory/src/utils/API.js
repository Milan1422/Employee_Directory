import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=15&inc=picture,name,phone,email,dob";

function search () {
    const data = axios.get(BASEURL);
    return data;
};

export default search;
