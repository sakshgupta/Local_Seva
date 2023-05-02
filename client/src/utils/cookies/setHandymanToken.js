import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setHandymanToken = (handyman_token) => {
    console.log("handyman id state value ", handyman_token);
    cookies.set("handyman_token", handyman_token, {
        expires: new Date(Date.now() + 86400000),
        // path: "/", commeting this becoz anurag daddy ne bola :)
    });
};
