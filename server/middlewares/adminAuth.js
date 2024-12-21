import jwt from 'jsonwebtoken'

const isAdmin = async (req, res, next) => {

    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: "Not authorized Token not found, Login again" });
    }

    try {

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (process.env.ADMIN_EMAIL === decodedToken.id) {
            
        } else {
            return res.json({ success: false, message: "Not authorized, Login again" });
        }

        next();

    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

export default isAdmin;