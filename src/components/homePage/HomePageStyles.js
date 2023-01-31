import {StyleSheet} from "react-native";
import COLORS from "../../colors/color";

const createStyles = (theme) => {
    const {
        mainBackgroundColor,
        wrapperShadowColor,
        dotShadowColor,
        imageShadowColor,
        mainColor
    } = COLORS[theme];

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: mainBackgroundColor,
        },

        wrapper: {
            height:600,
            alignItems: 'center',
            width: '90%',
            marginTop: 100,
            marginBottom: 100,
            paddingTop: 40,
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

        section: {
            alignItems: 'center',
            marginTop: 30,
        },

        section__title: {
            fontSize: 24,
            color:mainColor,
        },

        section__score: {
            width: 70,
            padding: 10,

            marginTop: 10,

            textAlign: 'center',
            fontSize: 18,

            color: mainColor,
            backgroundColor: mainBackgroundColor,

            borderRadius: 10,

            shadowColor: dotShadowColor,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.9,
            shadowRadius: 10.00,

            elevation: 24,
        },

        button: {
            paddingHorizontal: 40,
            paddingVertical: 10,

            marginTop: 80,
            textAlign: 'center',
            fontSize: 28,

            color: mainColor,
            backgroundColor: mainBackgroundColor,

            borderRadius: 20,

            shadowColor: dotShadowColor,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.7,
            shadowRadius: 10.00,

            elevation: 24,
        },

        footer__section: {
            flex: 1,
            flexDirection: "row",
            marginTop: 40,
            justifyContent: "space-around",
            paddingHorizontal: 30,
        },

        img: {
            height: 45,
            width: 45,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 45,
            backgroundColor: mainBackgroundColor,

            shadowColor: imageShadowColor,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            elevation: 13,
        },

        hidden: {
            opacity: 0,
        },

        footer: {
            flex: 1,
            flexDirection: "row",
            marginTop: 40,
            justifyContent: "space-around",
        }

    });
}

export default createStyles;