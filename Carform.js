import React, { Component } from 'react';
import {View, StyleSheet, Text, TextInput, Button} from "react-native";

export class CARForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textName: '',
            textStart: '',
            textEnd: ''
        }
    }
    handleSubmit = () => {
        if(this.state.textName != '' && this.state.textStart != '' && this.state.textEnd != '' ){
            const newList = [...this.props.state.listCAR];
            const event = {key :
                    {
                        name: this.state.textName.valueOf(),
                        datestart: new Date(this.state.textStart.valueOf()),
                        dateend: new Date(this.state.textEnd.valueOf())
                    }
            };
            newList.push(event);

            this.props.state.setState({
                textName : '',
                textStart : '',
                textEnd : '',
                listCAR: newList
            });
            Alert.alert("Information", this.state.listCAR);
        }

    };
    render() {
        return (
            <View style={styles.buttonContainer}>
                <Text>Libellé :</Text>
                <TextInput
                    style={{height: 40}}
                    onChangeText={(textName) => this.setState({textName})}
                    value={this.state.textName}
                />
                <Text>Date de debut :</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="AAAA-MM-DD"
                    onChangeText={(textStart) => this.setState({textStart})}
                    value={this.state.textStart}
                />
                <Text>Date de fin :</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="AAAA-MM-DD"
                    onChangeText={(textEnd) => this.setState({textEnd})}
                    value={this.state.textEnd}
                />
                <Button
                    title="Valider"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        margin: 4,
        fontSize: 18,
        height: 44,
    },
});


