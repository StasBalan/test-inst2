const INSTAGRAM_APP_ID = '325387826763751';
const INSTAGRAM_APP_SECRET = '7ea2dfc985180e49999d746c46f81df7';
const INSTAGRAM_APP_REDIRECT_URI = 'https://stasbalan.github.io/test-inst2/';
const API_BASE_URL = 'https://api.instagram.com/';
const AUTH_URL = 'oauth/authorize';
const URL_PARAMS = {
    client_id: INSTAGRAM_APP_ID,
    redirect_uri: INSTAGRAM_APP_REDIRECT_URI,
    scope: 'user_profile,user_media',
    response_type: 'code'
}
const LOGIN_BTN = document.getElementById('myBtn');

LOGIN_BTN.addEventListener('click', authInInst);

function authInInst() {
    const formatedUrlParams = Object.entries(URL_PARAMS).reduce((res, [key, value], index) => !index ? res + `${key}=${value}` : res + `&${key}=${value}`, '')
    window.location = API_BASE_URL + AUTH_URL + '?' + formatedUrlParams;
}

function getCode() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log('code22', urlParams.get('code'));
    return urlParams.get('code');
}

async function sendAuthReq() {
    const response = await fetch(`${API_BASE_URL}oauth/access_token`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            client_id: INSTAGRAM_APP_ID,
            client_secret: INSTAGRAM_APP_SECRET,
            code: getCode(),
            grant_type: 'authorization_code',
            redirect_uri: INSTAGRAM_APP_REDIRECT_URI,
        }), // body data type must match "Content-Type" header
    });

    const data = response.json();
    console.log('data', data)
}

function init() {
    if (getCode()) {
        console.log('IF');
        sendAuthReq();
    } else {
        console.log('else');
    }
}


init();