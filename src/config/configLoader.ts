import Config from './Config';

export let globalConfig: Config | null = null;

export const loadConfig = async () => {
    try {
        let configPath='';
        console.log("NODE_ENV=");
        console.log("------"+process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'production') {
            console.log("Extrag production")
            configPath = '/config.production.json';
        }
        if (process.env.NODE_ENV === 'development') {
            configPath = '/config.development.json';
        }

        const response = await fetch(configPath);
        globalConfig = await response.json() as Config;
    } catch (error) {

        console.error('Failed to load config', error);
    }
};