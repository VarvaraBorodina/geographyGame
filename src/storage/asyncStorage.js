import AsyncStorage from '@react-native-async-storage/async-storage';

export const setHighScore = async (score) => {
    await AsyncStorage.setItem("highScore", JSON.stringify(score));
};

export const getHighScore = async () => {
    let highScore = await AsyncStorage.getItem("highScore");
    if(!highScore){
        await AsyncStorage.setItem("highScore", JSON.stringify(0));
        highScore = 0;
    }
    return highScore;
};


