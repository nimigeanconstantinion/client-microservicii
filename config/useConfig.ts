import {useEffect, useState} from 'react';
import Config from './/Config';

export const useConfig = () => {
    const [config, setConfig] = useState<Config | null>(null);

    useEffect(() => {
        fetch('/config.json')
            .then(response => response.json())
            .then((configData: Config) => setConfig(configData))
            .catch(error => console.error('Failed to load config', error));
    }, []);

    return config;
};