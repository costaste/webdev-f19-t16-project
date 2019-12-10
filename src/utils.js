export const setCookie = (cookieName, cookieValue, expireHrs) => {
    const date = new Date();
    date.setTime(date.getTime() + (expireHrs * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue};${expires};SameSite=Lax;path=/`;
};

export const getCookie = (cookieName) => {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let cookie = ca[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
};
