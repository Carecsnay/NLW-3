import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer >
      <Navigator screenOptions={{
        headerShown: false, //dasabilitar o header para todas as screens
        cardStyle: { backgroundColor: '#f2f3f5' }//cor de fundo da tela
      }}>

        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
        />

        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{ //primeira chave é pra inserir JS e a outra para inserir um objeto
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" /> //transformando o header padrão em meu Header componente
          }}
        />

        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no Mapa" /> //transformando o header padrão em meu Header componente customizado
          }}
        />

        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }}
        />

      </Navigator>
    </NavigationContainer>

  );
}