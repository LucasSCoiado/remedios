import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Menu from './Menu';
import Cad from './Cadastro';
import Rem from './Remedios';


const { Navigator, Screen } = createBottomTabNavigator();
export default function Tabs() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 64,
                    },
                    tabStyle: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    labelStyle: {
                        fontSize: 13,
                        marginLeft: 16
                    },
                    inactiveBackgroundColor: '#fafafc',
                    activeBackgroundColor: '#ebebf5',
                    inactiveTintColor: '#c1bccc',
                    activeTintColor: '#32264d'
                }}>
                <Screen name="Menu" component={Menu} options={{
                    tabBarLabel: "Menu"
                }} />
                <Screen name="Cadastro" component={Cad} options={{
                    tabBarLabel: "Cadastro"
                }} />
                <Screen name="Remedios" component={Rem} options={{
                    tabBarLabel:"Remédios"
                }} />
            </Navigator>
        </NavigationContainer>
    );
}