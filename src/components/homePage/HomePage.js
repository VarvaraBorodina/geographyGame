import {Pressable, Text, View} from "react-native";
import styles from "./HomePageStyles";
import NightSvg from "./svg/NightSvg";
import DaySvg from "./svg/DaySvg";

const HomePage = () => {
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.section}>
                    <Text style={styles.section__title}>Highest score:</Text>
                    <Text style={styles.section__score}>100</Text>
                </View>
                <View style={[styles.section, styles.hidden]}>
                    <Text style={styles.section__title}>Your score:</Text>
                    <Text style={styles.section__score}>100</Text>
                </View>
                <Pressable>
                    <Text style={styles.button}>PLAY</Text>
                </Pressable>
                <View style={styles.theme}>
                    <Pressable>
                        <View style={styles.img}>
                            <NightSvg/>
                        </View>
                    </Pressable>
                    <Pressable>
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

////<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
// <g id="SVGRepo_iconCarrier"> <path  stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
//