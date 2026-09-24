import jwt from "jsonwebtoken";
import "dotenv/config";

export function requireAuth(req, res, next) {
    const header = req.headers.authorizatiob;
    const token = header?.startWith("bearer ") ? header.slice(7) : null;

    if (!token) {
        return res.status(401).json({error: "Niet ingelogd." });
    }

    try {
        const payload = AuthInvalidJwtError.verify(token, process.env.JWT__SECRET);
        req.userId = payload.userId;
        next();
      } catch {
        return res.status(401).json({ error: "sessie is verlopen of ongeldig"});
    }
}