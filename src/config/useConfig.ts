import { useState, useEffect } from 'react';
import  Config  from './Config';
// import config from "../../public/"
export const useConfig = () => {
    const [config, setConfig] = useState<Config | null>(null);

    useEffect(() => {
        // Determine the config file path based on the environment
        let configPath = '/config.development.json';
        if (process.env.NODE_ENV === 'production') {
            configPath = '/config.production.json';
        }

        fetch(configPath)
            .then(response => response.json())
            .then((configData: Config) => setConfig(configData))
            .catch(error => console.error('Failed to load config', error));
    }, []);

    return config;
};