import express from "express";
import cors from "cors";
import Stripe from "stripe";

const app = express();
const stripe = new Stripe("TU_API_KEY_SECRETA_DE_STRIPE"); // poné tu clave secreta

app.use(cors());
app.use(express.json());

app.post("/create-checkout", async (req, res) => {
  const { email, amount } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Pago personalizado" },
            unit_amount: amount, // en centavos: 5000 = 50.00 USD
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => console.log(" Servidor corriendo en http://localhost:4000"));
