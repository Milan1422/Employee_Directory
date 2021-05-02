import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=15&inc=picture,name,phone,email,dob&nat=us";

export default {
    search: function() {
      return axios.get(BASEURL);
    }
  };
