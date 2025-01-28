import { AppConfig } from '../models/AppConfig';

export async function loadConfig(): Promise<AppConfig> {
    const response = await fetch('/ui/config/config.json');
    console.log("****************** SUNT IN LOADcONFIG **************");
    console.log(response);
    console.log("///// raspuns");

    if (!response.ok) {
        console.error('Failed to load configuration', response.statusText);
        return { BASE_URL: '',REACT_APP_API_URL: '' };
    }

    const config: AppConfig = await response.json();
    return config;
}