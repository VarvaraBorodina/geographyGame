import {useState} from "react";
import HomePage from "../homePage/HomePage";
import FlagItem from "../flagItem/FlagItem";
import {getHighScore} from "../../storage/asyncStorage";

export default function MainPage() {

    const [page, setPage] = useState('home');
    const [theme, setTheme] = useState('dark');
    const [lang, setLang] = useState('ru');

    getHighScore().then(data=>setHighestScore(+data));

    const [score, setScore] = useState(-1);
    const [highestScore, setHighestScore] = useState(0);

    return (
        (page === 'home') ?
            <HomePage theme={theme} score={score} highestScore={highestScore} lang={lang} setTheme={setTheme} setPage={setPage} setLang={setLang}/> :
            <FlagItem theme={theme} highestScore={highestScore} setScore={setScore} setHighestScore={setHighestScore} setPage={setPage} lang={lang}/>
    );
}