import axios from 'axios';

const api = axios.create({ 
    baseURL: 'http://localhost:3333',  //emulador android => rodar o cmd adb reverse tcp:3333 tcp:3333 e usar o http://localhost:3333 IOS, mesmca coisa e não precisa rodar o cmd anterior
    //baseURL: 'http://ip do celular na rede', //se tiver usando o celular fisico
 });

 export default api;