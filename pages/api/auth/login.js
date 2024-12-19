// pages/api/auth/login.js
import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const { email, password } = req.body;

        // Forward the login request to the Express.js API using axios
        const response = await axios.post("http://localhost:7465/api/auth/login", {
            email,
            password,
        });

        // Pass the response data back to the client
        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error("Error during login:", error);
    
        if (error.response) {
            console.error("Response Data:", error.response.data);
            console.error("Status Code:", error.response.status);
            return res
                .status(error.response.status)
                .json({ message: error.response.data.message || "Login failed" });
        } else if (error.request) {
            console.error("No response received from server:", error.request);
            return res.status(500).json({ message: "No response from the server" });
        } else {
            console.error("Error setting up request:", error.message);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
