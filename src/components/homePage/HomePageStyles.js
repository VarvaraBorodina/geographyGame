import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3fc',
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
        marginTop: 100,
        marginBottom: 100,
        paddingTop: 40,
        backgroundColor: '#f3f3fc',
        borderRadius: 20,
        shadowColor: "#696969",
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
    },

    section__score: {
        width: 70,
        padding: 10,
        marginTop: 10,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#f3f3fc',
        borderRadius: 10,

        shadowColor: "#262626",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10.00,

        elevation: 24,
    },

    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,

        marginTop: 80,
        textAlign: 'center',
        fontSize: 28,
        backgroundColor: '#f3f3fc',
        borderRadius: 20,

        shadowColor: "#262626",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10.00,

        elevation: 24,
    },

    theme: {
        width: "90%",
        flex: 1,
        flexDirection: "row",
        marginTop: 40,
        justifyContent: "space-around",
    },

    img: {
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 65,
        backgroundColor: "#f3f3fc",

        shadowColor: "#4e4e4e",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 13,
    },

    hidden: {
        opacity: 0,
    }

});

export default styles;