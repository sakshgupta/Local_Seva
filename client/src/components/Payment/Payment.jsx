import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
// import CheckoutForm from "./CheckoutForm";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
    });
    const total = new URLSearchParams(location.search).get("total");

    useEffect(() => {
        // if (name && price && event_id) {
        setProduct({
            name: "Handyman",
            price: { total } * 100,
            description: `Pay Rs. ${
                total * 100
            } for the most awaited event, Handyman`,
        });
        // }
    }, [total]);

    const handleToken = async (event, token, addresses) => {
        // Fetching user_token cookie value in user_id
        // const user_id = getUserToken();

        // console.log("Payment gateway cookie fetch - ", user_id);
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BACKEND_API}/api/config`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token,
                        product,
                        addresses,
                    }),
                }
            );
            const data = await response.json();
            // console.log(data);
            if (data.status === "success") {
                alert("Payment Successful");
                navigate("/");
            } else {
                console.error(`Failed with status code ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container pt-20 lg:pt-8">
            <div className="flex flex-col m-6 ">
                <div className="payment-texts text-3xl">
                    Pay using{" "}
                    <span
                        className="text-4xl font-bold"
                        style={{ color: "#5F57F7" }}
                    >
                        stripe
                    </span>
                </div>
                <div className="payment-texts text-sm text-gray-400">
                    Payment is currently in{" "}
                    <span
                        className="text-4xl font-bold"
                        style={{ fontWeight: "bold" }}
                    >
                        Test Mode
                    </span>
                </div>

                <div className="payment-texts-2 m-6 flex flex-col ">
                    <div>Use the following test credentials: </div>

                    <div className="relative mb-6 overflow-x-auto shadow-md sm:rounded-lg w-full lg:w-1/3 ">
                        <table className="table-main w-full text-sm text-left my-2">
                            <thead className="payment-texts text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Field
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                        Card Number
                                    </th>
                                    <td
                                        className="px-6 py-4"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                "4242 4242 4242 4242"
                                            );
                                        }}
                                        title="Click to copy"
                                    >
                                        4242 4242 4242 4242
                                    </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                        Expiry
                                    </th>
                                    <td className="px-6 py-4">
                                        Any future date (eg: 03/25)
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                        CVC
                                    </th>
                                    <td className="px-6 py-4">
                                        Any 3 digit number (eg: 345)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <StripeCheckout
                        className="flex justify-center w-max"
                        stripeKey={process.env.REACT_APP_STRIPE_KEY}
                        amount={total * 100}
                        token={handleToken}
                        name="Handyman"
                        currency="INR"
                        billingAddress
                        shippingAddress
                    />
                </div>
            </div>
        </div>
    );
}

export default Payment;
