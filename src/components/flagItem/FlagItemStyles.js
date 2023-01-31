import {StyleSheet} from "react-native";
import COLORS from "../../colors/color";
const createStyles = (theme) => {

    const {
        mainBackgroundColor,
        mainColor,
        wrapperShadowColor,
        dotShadowColor,
        dotEnableBackgroundColor,
        dotEnableColor,
        optionTextShadowColor,
        chosenBackgroundColor,
        correctBackgroundColor,
        wrongBackgroundColor,
    } = COLORS[theme];
    
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: mainBackgroundColor,
        },
        wrapper: {
            height:500,
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
            marginTop: 20,
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

            paddingVertical: 8,
            marginVertical: 10,

            textAlign: 'center',
            fontSize: 16,
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

export default createStyles;