import JWT from "passport-jwt";
import User from "../models/user.js";

const JWTStratergy = JWT.Strategy;
const ExtractJWT = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter_secret'
};

export const passportAuth = (passport) => {
    try {
        passport.use(new JWTStratergy(opts, async(jwt_payload, done) => {
            const user = User.findById(jwt_payload.id);
            if(!user) {
                done(null, false);
            } else {
                done(null, user);
            }
        }));
    } catch (error) {
        console.log(error);
        throw error;
    }
}