import {StyleSheet} from "react-native";

const themes = {
    light: {
        mainBackgroundColor: '#f3f3fc',
        mainColor:'#000000',
        wrapperShadowColor: "#696969",
        dotShadowColor: "#262626",
        dotEnableBackgroundColor: '#50507722',
        dotEnableColor: '#505077',
        optionTextShadowColor:  "#343434",
        chosenBackgroundColor: '#e6e6f5',
        correctBackgroundColor: '#5fb683',
        wrongBackgroundColor: '#ed4a74',
    },
    dark: {
        mainBackgroundColor: '#2c2c5c',
        mainColor:'#ffffff',
        wrapperShadowColor: "#000000",
        dotShadowColor: "#000000",
        dotEnableBackgroundColor: 'rgba(3,3,3,0.2)',
        dotEnableColor: '#ffffff',
        optionTextShadowColor:  "#000000",
        chosenBackgroundColor: '#23234a',
        correctBackgroundColor: '#5fb683',
        wrongBackgroundColor: '#ed4a74',
    },
}

const createStyles = (theme) => {

    const {mainBackgroundColor,
        mainColor,
        wrapperShadowColor,
        dotShadowColor,
        dotEnableBackgroundColor,
        dotEnableColor,
        optionTextShadowColor,
        chosenBackgroundColor,
        correctBackgroundColor,
        wrongBackgroundColor,
    } = themes[theme];
    
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: mainBackgroundColor,
        },
        wrapper: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            marginTop: 100,
            marginBottom: 100,
            backgroundColor: mainBackgroundColor,
            borderRadius: 20,
            shadowColor: wrapperShadowColor,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.7,
            shadowRadius: 16.00,

            elevation: 24,
        },

        header: {
            flexDirection: "row",
            justifyContent: "space-around",
        },

        dot: {
            width: 30,
            height: 30,
            marginLeft: 10,
            marginTop: 37,
            textAlign: 'center',
            fontSize: 18,
            borderRadius: 65,

            shadowColor: dotShadowColor,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.7,
            shadowRadius: 10.00,

            elevation: 24,
        },

        dot_unable: {
            backgroundColor: dotEnableBackgroundColor,
            color: dotEnableColor,
        },

        dot_able: {
            backgroundColor: mainBackgroundColor,
            color: mainBackgroundColor,
        },

        score: {
            width: 70,
            padding: 10,
            marginTop: 30,
            marginRight: 60,
            textAlign: 'center',
            fontSize: 18,
            backgroundColor: mainBackgroundColor,
            borderRadius: 10,

            shadowColor: dotShadowColor,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.7,
            shadowRadius: 10.00,
            color: mainColor,
            elevation: 24,
        },
        image: {
            width: 320,
            height: 200,
            marginTop: 30,
            marginBottom: 20,
            borderWidth: 10,
            borderColor: mainBackgroundColor,

        },

        option: {
            width: 300,
            alignItems: 'center',
        },

        option__text: {
            width: 280,

            paddingVertical: 10,
            marginVertical: 10,

            textAlign: 'center',
            fontSize: 18,
            borderRadius: 10,

            shadowColor:  optionTextShadowColor,
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
            color:mainColor,
        },

        chosen: {
            backgroundColor: chosenBackgroundColor
        },

        correct: {
            backgroundColor: correctBackgroundColor,
        },

        wrong: {
            backgroundColor: wrongBackgroundColor,
        },

        simple: {
            backgroundColor: mainBackgroundColor,
        }
    });
}

export default createStyles('dark');