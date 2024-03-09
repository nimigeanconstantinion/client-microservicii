import Config from './Config';

export let globalConfig: Config | null = null;

export const loadConfig = async () => {
    try {
        let configPath='';
        if (process.env.REACT_APP_PATH_TO === 'production') {
            console.log("Extrag production")
            configPath = '/config.production.json';
        }
        if (process.env.REACT_APP_PATH_TO === 'development') {
            configPath = '/config.development.json';
        }

        const response = await fetch(configPath);
        globalConfig = await response.json() as Config;
    } catch (error) {

        console.error('Failed to load config', error);
    }
};