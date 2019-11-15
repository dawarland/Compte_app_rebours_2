import * as React from 'react';
import { Button, View, Text, ScrollView, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CARForm} from "./Carform";
import {CARList} from "./Carlist";

class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listCAR: [{ key: {
                    name: '1er',
                    datestart: new Date(2019,1,1),
                    dateend: new Date(2019,11,30)
                }
            },
                { key: {
                        name: '2eme',
                        datestart: new Date(2015,1,1),
                        dateend: new Date(2020,5,30)
                    }
                }
            ]
        };

    }
    static navigationOptions = {
        title: 'Compte app rebours'
    };
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <CARList list={this.state.listCAR} onPressDelete={this.onPressDelete}/>
                </View>
                <Button
                    title="Ajouter"
                    onPress={() => this.props.navigation.navigate('Ajout', {
                        state: this.state,
                    })}
                />
            </ScrollView>
        );
    }
}

class AjoutScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center'}}>
                <Text style={{fontSize: 20, marginBottom: 20}}>Ajouter un Compte à rebours</Text>
                <CARForm list={navigation.state}></CARForm>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Ajout: AjoutScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titleText: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        margin: 20
    }
});
