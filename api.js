import axios from "axios";

const URL="https://api.genshin.dev"
export const getMainData = async (type) => {

    console.log(type)
    try {
        const data = await axios.get(
            `${URL}/${type}/all`
        );
        var datos = data.data;
        console.log(datos);
        return datos;
    } catch (error) {
        console.log(error);
    }
};

getMainData("characters");