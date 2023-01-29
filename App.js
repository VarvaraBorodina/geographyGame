import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlagItem from "./src/components/flagItem/FlagItem";
export default function App() {
  return (
    <FlagItem/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b395df',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
