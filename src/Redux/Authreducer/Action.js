import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./Action_Type"



export const logindata = (data) => dispatch => {
    dispatch({ type: LOGIN_REQUEST })
    axios.post("https://bored-train-boa.cyclic.app/signin/",data)
      .then((response) => {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data})
        console.log(response)
        if(response.data.msg){
          alert(response.data.msg)
        }else{
          alert("successfuly Login")
          localStorage.setItem("token",JSON.stringify(response.data.token))
        }
      }).catch((e) => {
        dispatch({ type: LOGIN_FAILURE })
        console.log(e)
        alert('failed')
      })
  }

