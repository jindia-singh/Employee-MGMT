import axios from "axios";

export function getEmployeeBySearch(postData) {
    return (dispatch) => {
        axios.post("http://localhost:3002/getData", {"search":postData})
        .then(response => response)
            .then(data => {
                dispatch(addEmployeeBySearch(data))
            }).catch(err =>{
                console.log(err.message)
            }) 
    }
}

export function addEmployeeBySearch(data){
    return{
        type:"FETCH_EMPLOYEE_BY_SEARCH",
        payload:data
    }
}
