import {Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputFieldGoal}
                        placeholder='Your course goal...'/>
                    <TouchableOpacity
                        style={styles.addGoalButton}
                        onPress={() => {
                        }}>
                        <Text>Add Goal</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>List of goals...</Text>
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
        padding: 16,
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    inputFieldGoal: {
        flex: 1,
        borderWidth: 1,
        height: 40,
        padding: 10,
        borderRadius: 10,
        borderColor: '#CCCCCC',
    },
    content: {
        marginTop: 12,
        flex: 1,
    },
    addGoalButton: {
        backgroundColor: '#CCCCCC',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
