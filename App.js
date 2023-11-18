import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [goals, setGoals] = useState([])

    /**
     * Handler for handling text input changed
     */
    const goalInputHandler = (value) => {
        setEnteredGoal(value)
    }

    /**
     * Handler for handling click button
     */
    const addGoalHandler = () => {
        if (enteredGoal === '') {
            console.log('click empty')
            return
        }
        setEnteredGoal('')
        setGoals((currentGoals) => [...currentGoals, enteredGoal])
    }

    const resetGoals = () => {
        setGoals([])
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputFieldGoal}
                        placeholder='Your course goal...'
                        value={enteredGoal}
                        onChangeText={goalInputHandler}/>
                    <TouchableOpacity
                        style={styles.addGoalButton}
                        onPress={addGoalHandler}>
                        <Text style={styles.addGoalTextButton}>Add Goal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.resetGoalButton}
                        onPress={resetGoals}>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Goals</Text>
                    {goals.map((goal) => (
                        <Text key={goal} style={styles.itemGoals}>{goal}</Text>
                    ))}
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
        backgroundColor: 'green',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    resetGoalButton: {
        backgroundColor: 'red',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10
    },
    addGoalTextButton: {
        color: 'white'
    },
    itemGoals: {
        marginVertical: 4
    }
});
