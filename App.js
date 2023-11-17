import {StatusBar} from 'expo-status-bar';
import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View>
                    <TextInput
                        placeholder='Your course goal...'/>
                    <Button title='Add Goal'/>
                </View>
                <View>
                    <Text>List of goals...</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        padding: 16
    }
});
