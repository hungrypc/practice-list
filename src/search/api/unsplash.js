import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6cfec9f6e292d9b4d2295d4dc4fbee0fbfa9b2c4722ad007237878629f9f259f',
    }
});
