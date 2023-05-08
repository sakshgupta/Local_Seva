import Cookies from "universal-cookie";

const cookies = new Cookies();

export const removeHandymanToken = () => {
    cookies.remove("handyman_token", {
        path: "/handyman",
    });
};
