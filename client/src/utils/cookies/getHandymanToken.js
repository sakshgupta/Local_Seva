import Cookies from "universal-cookie";

const cookies = new Cookies();

export const gethandymanToken = () => {
    return cookies.get("handyman_token");
};
