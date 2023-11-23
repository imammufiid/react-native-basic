import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";

export const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const isErrorField = () => errorMessage !== ''

    const {onAddGoal, goalsIsEmpty, resetGoals} = props

    /**
     * Handler for handling text input changed
     */
    const goalInputHandler = (value) => {
        setEnteredGoal(value)
    }

    const addGoalHandler = () => {
        if (enteredGoal === '') {
            setErrorMessage('Please enter you goal')
            return
        }
        setErrorMessage('')
        onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    return (
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
                {!goalsIsEmpty && (
                    <TouchableOpacity
                        style={styles.resetGoalButton}
                        onPress={resetGoals}>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                )}
            </View>
            {isErrorField && <Text style={styles.errorLabel}>{errorMessage}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    addGoalButton: {
        backgroundColor: 'green',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10
    },
    container: {
        flexDirection: 'column',
        gap: 6
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
    errorLabel: {
        color: 'red',
    }
})