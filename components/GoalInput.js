import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";

export const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const isErrorField = () => errorMessage !== ''

    const {onAddGoal, visible, cancelGoal} = props

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
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputFieldGoal}
                        placeholder='Your course goal...'
                        value={enteredGoal}
                        onChangeText={goalInputHandler}/>
                </View>
                {isErrorField && <Text style={styles.errorLabel}>{errorMessage}</Text>}
                <View style={{flexDirection: 'row', gap: 12, marginTop: 12}}>
                    <TouchableOpacity
                        style={styles.addGoalButton}
                        onPress={addGoalHandler}>
                        <Text style={styles.addGoalTextButton}>Add Goal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cancelGoalButton}
                        onPress={cancelGoal}>
                        <Text style={styles.cancelGoalTextButton}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    addGoalButton: {
        backgroundColor: 'green',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center'
    },
    container: {
        marginTop: 60,
        marginHorizontal: 20,
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
    },
    cancelGoalButton: {
        backgroundColor: 'red',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center'
    },
    cancelGoalTextButton: {}
})
