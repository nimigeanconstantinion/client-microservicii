import  Config  from './Config';

export let globalConfig: Config | null = null;

export const loadConfig = async () => {
    try {
        let configPath = '/config.development.json';
        if (process.env.NODE_ENV === 'production') {
            configPath = '/config.production.json';
        }

        const response = await fetch(configPath);
        globalConfig = await response.json() as Config;
    } catch (error) {
        console.error('Failed to load config', error);
    }
};