import {Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";

export const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const isErrorField = () => errorMessage !== ''

    const {onAddGoal, visible, cancelGoal} = props

    useEffect(() => {
        if (visible) {
            setErrorMessage('')
        }
    }, [visible])

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
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputFieldGoal}
                        placeholder='Your course goal...'
                        value={enteredGoal}
                        onChangeText={goalInputHandler}/>
                </View>
                {isErrorField && <Text style={styles.errorLabel}>{errorMessage}</Text>}
                <View style={styles.buttonContainer}>
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
        backgroundColor: '#B180F0',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center'
    },
    container: {
        paddingTop: 80,
        paddingHorizontal: 20,
        flexDirection: 'column',
        gap: 6,
        flex: 1,
        backgroundColor: '#311b6b',
        alignItems: 'center',
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
        borderColor: '#E4D0FF',
        backgroundColor: '#E4D0FF',
        color: '#120438'
    },
    addGoalTextButton: {
        color: 'white'
    },
    errorLabel: {
        color: '#F31282',
        width: '100%'
    },
    cancelGoalButton: {
        backgroundColor: '#F31282',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center'
    },
    cancelGoalTextButton: {},
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12
    }
})
