import * as FileSystem from "expo-file-system";
const FILE_URI = FileSystem.documentDirectory + "todos.json";

export const loadFile = async () => {
    const info = await FileSystem.getInfoAsync(FILE_URI);
    if(info.exists){
        const jsonData = await FileSystem.readAsStringAsync(FILE_URI);
        return JSON.parse(jsonData);
    }
    else {
        return [];
    }
};

export const saveFile = async (todos) => {
    await FileSystem.writeAsStringAsync(FILE_URI,JSON.stringify(todos));
};