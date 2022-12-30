import { Storage } from "expo-storage";

export const saveTheme = (value) => {
    Storage.setItem({ key: 'theme', value: JSON.stringify(value) })
}

export const getTheme = async () => {
    const data = await Storage.getItem({ key: 'theme' })
    return data ? JSON.parse(data) : false
}