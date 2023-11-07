const INSTAGRAM_APP_ID = '325387826763751';
const INSTAGRAM_APP_SECRET = '7ea2dfc985180e49999d746c46f81df7';
const INSTAGRAM_APP_REDIRECT_URI = 'https://stasbalan.github.io/test-inst2/';
const API_BASE_URL = 'https://api.instagram.com/';
const AUTH_URL = 'oauth/authorize';
const URL_PARAMS = {
    app_id: INSTAGRAM_APP_ID,
    redirect_uri: INSTAGRAM_APP_REDIRECT_URI,
    scope: 'user_profile,user_media',
    response_type: 'code'
}

const loginBtn = document.getElementById('myBtn');
// console.log(loginBtn);
loginBtn.addEventListener('click', authInInst);

function authInInst() {
    const formatedUrlParams = Object.entries(URL_PARAMS).reduce((res, [key, value], index) => !index ? res + `${key}=${value}` : res + `&${key}=${value}`, '')
    // console.log('authInInst', API_BASE_URL + AUTH_URL + '?' + formatedUrlParams);
    window.location = API_BASE_URL + AUTH_URL + '?' + formatedUrlParams;
}