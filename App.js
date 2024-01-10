import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Register from './components/register';
import Porto from './components/porto';
import Dasbord from './components/dasbord';
import Bayarspp from './components/bayarspp';
import Berhasil from './components/berhasil';
import Histori from './components/histori';
import Tagihan from './components/tagihan';

// Komponen Layar Login

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Porto" component={Porto} />
        <Stack.Screen name="Dasbord" component={Dasbord} />
        <Stack.Screen name="Bayar" component={Bayarspp} />
        <Stack.Screen name="Berhasil" component={Berhasil} />
        <Stack.Screen name="Histori" component={Histori} />
        <Stack.Screen name="Tagihan" component={Tagihan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
