import {useState} from "react";
import HomePage from "../homePage/HomePage";
import FlagItem from "../flagItem/FlagItem";

export default function MainPage() {

    const [page, setPage] = useState('home');
    const [theme, setTheme] = useState('dark');

    const [score, setScore] = useState(-1);
    const [highestScore, setHighestScore] = useState(0);

    return (
        (page === 'home') ?
            <HomePage theme={theme} score={score} highestScore={highestScore} setTheme={setTheme} setPage={setPage}/> :
            <FlagItem theme={theme} highestScore={highestScore} setScore={setScore} setHighestScore={setHighestScore} setPage={setPage}/>
    );
}