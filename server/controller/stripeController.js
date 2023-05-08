const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// test
const stripe = require("stripe")(process.env.STRIPE_KEY);

const uuid = require("uuid").v4;

const payment = async (req, res) => {
    let charge, status;
    var { product, token } = req.body;

    var key = uuid();

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        });

        charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: "INR",
                customer: customer.id,
                receipt_email: token.email,
                description: `Booked Ticket for ${product.name}`,
                shipping: {
                    name: token.billing_name,
                    address: {
                        line1: token.shipping_address_line1,
                        line2: token.shipping_address_line2,
                        city: token.shipping_address_city,
                        country: token.shipping_address_country,
                        postal_code: token.shipping_address_zip,
                    },
                },
            },
            {
                idempotencyKey: key,
            }
        );

        console.log("Charge: ", { charge });
        status = "success";
    } catch (error) {
        console.log(error);
        status = "success";
    }
    res.send({ status });
};

module.exports = {
    payment,
};
