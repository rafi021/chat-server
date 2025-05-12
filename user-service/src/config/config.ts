import { config } from "dotenv";

const configFile = `./.env`;
config({ path: configFile });

const { MONGO_URI, PORT, JWT_SECRET, NODE_ENV, MESSAGE_BROKER_URL } = process.env;

export default{
    mongoUri: MONGO_URI || "mongodb://localhost:27017",
    port: PORT || 3000,
    jwtSecret: JWT_SECRET || "$2y$10$iQ6sK.ZyNS5iYa9MxHuofe.hP.7yImg38JzFq4Ymmd4KPRFob.RiO",
    nodeEnv: NODE_ENV || "development",
    messageBrokerUrl: MESSAGE_BROKER_URL || "amqp://localhost:5672",
}