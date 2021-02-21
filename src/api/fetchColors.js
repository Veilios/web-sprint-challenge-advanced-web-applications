import { axiosWithAuth } from "../helpers/axiosWithAuth";

export const fetchColors = () => {
    return axiosWithAuth()
        .get(`http://localhost:5000/api/colors`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error("Cannot retrieve colors error: ", err.message);
            return err;
        });
};