import {Text, View, Image, FlatList, Pressable} from 'react-native';
import countries from "../../data/countries";
import createStyles from "./FlagItemStyles";

import {useEffect, useState} from "react";
import {setHighScore} from "../../storage/asyncStorage";

const FlagItem = ({theme, setScore, setHighestScore, highestScore, setPage, lang}) => {
    const URL = `https://countryflagsapi.com/png/`;
    const styles = createStyles(theme);

    const statusStyles = [styles.simple, styles.chosen, styles.correct, styles.wrong];

    const [country, setCountry] = useState({});
    const [options, setOptions] = useState([]);
    const [pressable, setPressable] = useState(true);
    const [chosenOption, setChosenOption] = useState("");
    const [count, setCount] = useState(0);
    const [mistakes, setMistakes] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if(chosenOption) {
                showCorrectAnswer(chosenOption);
                chosenOption === country.name[lang] ? setCount(prev => prev + 1) : setMistakes(mistakes => ++mistakes);
                setChosenOption("");
            } else {
                const tempCountry = countries[Math.floor(Math.random()*countries.length)];
                setCountry(tempCountry);
                makeOptionsList(tempCountry);
                setPressable(true);
            }
        }, 700);
    }, [chosenOption]);

    useEffect(() => {
        if(mistakes > 2) {
            setTimeout(() => {
                if(count > highestScore) {
                    setHighestScore(count);
                    setHighScore(count);
                }
                setScore(count);
                setPage('home');
            }, 700)
        }
    }, [mistakes])

    const chooseOptionHandler = (name) => {
        setOptions(prevState => {
            const copy = JSON.parse(JSON.stringify(prevState));
            const index = copy.findIndex(item => (item.name === name));
            copy[index].status = 1;
            return copy;
        });
        setChosenOption(name);
        setPressable(false);
    }

    const showCorrectAnswer = (chosenOption) => {
        setOptions(prevState => {
            const copy = JSON.parse(JSON.stringify(prevState));
            if(chosenOption === country.name[lang]) {
                const index = copy.findIndex(item => (item.name === chosenOption));
                copy[index].status = 2;
            } else {
                let index = copy.findIndex(item => (item.name === chosenOption));
                copy[index].status = 3;
                index = copy.findIndex(item => (item.name === country.name[lang]));
                copy[index].status = 2;
            }
            return copy;
        });
    }

    const makeOptionsList = (mainCountry) => {
        const countryOptions = [{name: mainCountry.name[lang], status: 0}];

        for(let i = 0; i < 2; i++) {
            let tempCountry = "";
            do {
                tempCountry = countries[Math.floor(Math.random()*countries.length)].name[lang];
            } while(tempCountry === mainCountry.name[lang]);
            countryOptions.push({name: tempCountry, status: 0});
        }
        setOptions(countryOptions.sort((x, y) => (x.name > y.name)))
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.score}>{count}</Text>
                    <Text style={[styles.dot, mistakes < 1 ? styles.dot_able : styles.dot_unable]}>x</Text>
                    <Text style={[styles.dot, mistakes < 2 ? styles.dot_able : styles.dot_unable]}>x</Text>
                    <Text style={[styles.dot, mistakes < 3 ? styles.dot_able : styles.dot_unable]}>x</Text>
                </View>
                <Image source={{uri : `${URL}${country.code}`}} style={styles.image}/>
                <FlatList alwaysBounceVertical={false}
                          data={options}
                          keyExtractor={(item, index) => item.name}
                          renderItem={(itemData) => {
                              return (
                                  <Pressable style={styles.option} onPress={chooseOptionHandler.bind(this, itemData.item.name)} disabled={!pressable}>
                                      <Text style={[styles.option__text, statusStyles[itemData.item.status] ]} >{itemData.item.name}</Text>
                                  </Pressable>
                              );
                          }} />
            </View>
        </View>
    );
}


export default FlagItem;