import {Pressable, Text, View} from "react-native";
import TEXT from "../../data/names";

import NightSvg from "./svg/NightSvg";
import DaySvg from "./svg/DaySvg";
import EnglishSvg from "./svg/EnglishSvg";
import RussianSvg from "./svg/RussianSvg";

import createStyles from "./HomePageStyles";

const HomePage = ({theme, score, highestScore, lang, setTheme, setPage, setLang}) => {

    const styles = createStyles(theme);

    const changeTheme = (newTheme) => {
        if(newTheme !== theme) {
            setTheme(newTheme);
        }
    }

    const changeLanguage = (newLang) => {
        if(newLang !== lang) {
            setLang(newLang);
        }
    }

    const handlePlay = () => {
        setPage('game');
    }

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.section}>
                    <Text style={styles.section__title}>{`${TEXT.highestScore[lang]}:`}</Text>
                    <Text style={styles.section__score}>{highestScore}</Text>
                </View>

                <View style={(score !== -1 ? [styles.section] : [styles.section, styles.hidden])}>
                    <Text style={styles.section__title}>{`${TEXT.yourScore[lang]}:`}</Text>
                    <Text style={styles.section__score}>{score}</Text>
                </View>
                <Pressable onPress={handlePlay.bind(this)} >
                    <Text style={styles.button}>{`${TEXT.play[lang]}`}</Text>
                </Pressable>
                <View style = {styles.footer}>
                    <View style={styles.footer__section}>
                        <Pressable onPress={changeLanguage.bind(this, 'en')} >
                            <View style={styles.img}>
                                <EnglishSvg/>
                            </View>
                        </Pressable>
                        <Pressable onPress={changeLanguage.bind(this, 'ru')} >
                            <View style={styles.img}>
                                <RussianSvg/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.footer__section}>
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
        </View>
    )
}

export default HomePage;
