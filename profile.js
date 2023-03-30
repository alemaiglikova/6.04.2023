function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

async function getUserInfo() {
    const userId = getCookie("user_id");
    const response = await fetch(`https://6419624875be53f451f2dec2.mockapi.io/users/${userId}`);
    if (response.status === 200) {
        const user = await response.json();
        const userInfo = document.getElementById("user-info");
        userInfo.innerHTML = `
            <p>Email: ${user.email}</p>
        `;
    }
    else {
        console.log("Ошибка при получении информации о пользователе");
    }
}

getUserInfo();