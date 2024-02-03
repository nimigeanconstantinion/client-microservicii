import Config from './Config';

export let globalConfig: Config | null = null;

export const loadConfig = async () => {
    try {


      //  let configPath = '/config.development.json';
        let configPath='';
        // console.log("-- --0000 ATENTIE   "+process.env.NODE_ENV);
        if (process.env.REACT_APP_PATH_TO === 'production') {
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