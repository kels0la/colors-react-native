import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddNewPaletteModal from './screens/AddNewPaletteModal.js';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="AddNewPalette" component={AddNewPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const COLORS = [
//   { colorName: 'Base03', hexCode: '#002b36' },
//   { colorName: 'Base02', hexCode: '#073642' },
//   { colorName: 'Base01', hexCode: '#586e75' },
//   { colorName: 'Base00', hexCode: '#657b83' },
//   { colorName: 'Base0', hexCode: '#839496' },
//   { colorName: 'Base1', hexCode: '#93a1a1' },
//   { colorName: 'Base2', hexCode: '#eee8d5' },
//   { colorName: 'Base3', hexCode: '#fdf6e3' },
//   { colorName: 'Yellow', hexCode: '#b58900' },
//   { colorName: 'Orange', hexCode: '#cb4b16' },
//   { colorName: 'Red', hexCode: '#dc322f' },
//   { colorName: 'Magenta', hexCode: '#d33682' },
//   { colorName: 'Violet', hexCode: '#6c71c4' },
//   { colorName: 'Blue', hexCode: '#268bd2' },
//   { colorName: 'Cyan', hexCode: '#2aa198' },
//   { colorName: 'Green', hexCode: '#859900' },
// ];

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   colorContainers: {
//     flex: 1,
//     margin: 10,
//     padding: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 6,
//     elevation: 3,
//     shadowOffset: {
//       width: 1,
//       height: 1,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     marginHorizontal: 10,
//     marginVertical: 10,
//   },
//   Cyan: {
//     backgroundColor: '#2aa198',
//   },
//   Blue: {
//     backgroundColor: '#268bd2',
//   },
//   Magenta: {
//     backgroundColor: '#d33682',
//   },
//   Orange: {
//     backgroundColor: '#cb4b16',
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: 'white',
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });
