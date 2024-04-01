import Config from './Config';

export let globalConfig: Config | null = null;

export const loadConfig = async () => {
    try {

        alert("Din config loader: "+process.env.NODE_ENV);

        let configPath = '/config.development.json';
        // console.log("-- --0000 ATENTIE   "+process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'production') {
            configPath = '/config.production.json';
        }

        const response = await fetch(configPath);

        globalConfig = await response.json() as Config;
        alert("din load config ies cu url=:");
        alert(globalConfig.apiUrl);
    } catch (error) {
        console.error('Failed to load config', error);
    }
};