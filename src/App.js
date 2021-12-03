import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Platform,
  Alert,
  Pressable,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const windowsLogo = require('./windowslogo.png');
const macLogo = require('./maclogo.png');

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{backgroundColor: Colors.lighter}}>
        <Header />
      </View>
      <View style={[styles.subContainer, backgroundStyle]}>
        <Image
          source={Platform.OS === 'windows' ? windowsLogo : macLogo}
          style={[
            styles.logo,
            {tintColor: isDarkMode ? 'lightskyblue' : 'midnightblue'},
          ]}
        />
        <Pressable
          style={styles.btnContainer}
          onPress={() => Alert.alert(`${Platform.OS} App`)}>
          <Text style={styles.btnText}>{Platform.OS}</Text>
        </Pressable>
        <Text style={styles.highlight}>
          {'This is an example of React Native app running on ' + Platform.OS}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    width: '40%',
  },
  logo: {
    height: 200,
    width: 200,
  },
  subContainer: {
    alignItems: 'center',
    height: '70%',
    justifyContent: 'space-between',
    padding: Platform.OS === 'windows' ? 50 : 25,
  },
  btnContainer: {
    height: 50,
    width: '30%',
    backgroundColor: 'lightskyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;
