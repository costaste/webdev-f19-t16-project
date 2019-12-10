export const getUrl = () => {
    const prod = true;
    const prodUrl = 'https://webdev-f19-t16-backend.herokuapp.com/';
    const devUrl = 'http://localhost:8080';
    return prod ? prodUrl : devUrl;
};
