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
        justifyContent: 'center',
        width: '90%',
        marginTop: 100,
        marginBottom: 100,
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

        shadowColor: "#262626",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10.00,

        elevation: 24,
    },

    dot_unable: {
        backgroundColor: '#50507722',
        color: '#505077',
    },

    dot_able: {
        backgroundColor: '#f3f3fc',
        color: '#f3f3fc',
    },

    score: {
        width: 70,
        padding: 10,
        marginTop: 30,
        marginRight: 60,
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
    image: {
        width: 320,
        height: 200,
        marginTop: 30,
        marginBottom: 20,
        borderWidth: 10,
        borderColor: '#f3f3fc',

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

        shadowColor: "#343434",
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },

    chosen: {
        backgroundColor: '#b2b2fc'
    },

    correct: {
        backgroundColor: '#5fb683',
    },

    wrong: {
        backgroundColor: '#ed4a74',
    },

    simple: {
        backgroundColor: '#f3f3fc',
    }
});

export default styles;