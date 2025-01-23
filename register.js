const bcrypt = require('bcrypt');
const { getClient } = require('../../db/client');

exports.handler = async (event) => {
    const { email, password } = JSON.parse(event.body);
    const hashedPassword = await bcrypt.hash(password, 10);

    const client = getClient();
    await client.connect();

    try {
        const query = 'INSERT INTO users (email, password) VALUES ($1, $2)';
        await client.query(query, [email, hashedPassword]);
        return { statusCode: 201, body: JSON.stringify({ message: "User registered!" }) };
    } catch (error) {
        return { statusCode: 400, body: JSON.stringify({ error: error.message }) };
    } finally {
        await client.end();
    }
};