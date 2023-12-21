// import { EnvVariables } from '../types/env';
import {EnvVariables} from "../types/env";

export const getEnvVariables = (): EnvVariables => {
    const {
        REACT_APP_API_URL

    } = process.env;

    if (!REACT_APP_API_URL) {
        console.error("Missing required environment variables");
    }

    return {
        REACT_APP_API_URL: REACT_APP_API_URL || 'default_api_url'
    };
};