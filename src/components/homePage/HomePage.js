import {Pressable, Text, View} from "react-native";
import styles from "./HomePageStyles";
import NightSvg from "./svg/NightSvg";
import DaySvg from "./svg/DaySvg";
import createStyles from "./HomePageStyles";

const HomePage = ({theme, score, highestScore, setTheme, setPage}) => {

    const styles = createStyles(theme);

    const changeTheme = (newTheme) => {
        if(newTheme !== theme) {
            setTheme(newTheme);
        }
    }

    const handlePlay = () => {
        setPage('game');
    }

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.section}>
                    <Text style={styles.section__title}>Highest score:</Text>
                    <Text style={styles.section__score}>{highestScore}</Text>
                </View>

                <View style={(score !== -1 ? [styles.section] : [styles.section, styles.hidden])}>
                    <Text style={styles.section__title}>Your score:</Text>
                    <Text style={styles.section__score}>{score}</Text>
                </View>
                <Pressable onPress={handlePlay.bind(this)} >
                    <Text style={styles.button}>PLAY</Text>
                </Pressable>
                <View style={styles.theme}>
                    <Pressable onPress={changeTheme.bind(this, 'dark')} >
                        <View style={styles.img}>
                            <NightSvg/>
                        </View>
                    </Pressable>
                    <Pressable onPress={changeTheme.bind(this, 'light')} >
                        <View style={styles.img}>
                            <DaySvg />
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default HomePage;
