import { AppConfig } from '../models/AppConfig';

export async function loadConfig(): Promise<AppConfig> {
    const response = await fetch('/config/config.json');
    if (!response.ok) {
        console.error('Failed to load configuration', response.statusText);
        return { BASE_URL: '',REACT_APP_URL: '' };
    }

    const config: AppConfig = await response.json();
    return config;
}