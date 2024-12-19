// pages/api/auth/register.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    // create a login request to the Express.js API using fetch
    const response = await fetch("http://localhost:7465/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body), 
    });

    const data = await response.json();

    if (!response.ok) {
        return res.status(response.status).json(data);
    }

    // pass the response data back to the client
    return res.status(response.status).json(data);
}
