import axios from "axios";

const baseUrl = 'http://13.235.16.107:8080/bookings-management';
//const baseUrl = 'http://13.235.16.107:8080/bookings-management';

export const UploadCars = (uploadData) => {
    var data = {
        isSuccess: false,
        data:'',
    };
   return axios.post(`${baseUrl}/api/v4/addvehicle`, uploadData)
    .then( (response) => {
        data.isSuccess = true;
        data.data = response.data;
        return data
    } )
    .catch(err => {
        data.isSuccess = false;
        data.data = err
        return data
    })

}

export const AddBooking = (uploadData) => {
    var data = {
        isSuccess: false,
        data:'',
    };
   return axios.post(`${baseUrl}/api/v4/addbook`, uploadData)
    .then( (response) => {
        data.isSuccess = true;
        data.data = response.data;
        return data
    } )
    .catch(err => {
        data.isSuccess = false;
        data.data = err
        return data
    })

}

