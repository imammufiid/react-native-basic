import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [goals, setGoals] = useState([])
    const goalsIsEmpty = goals.length === 0

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

    const resetGoals = () => setGoals([])

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
                    {!goalsIsEmpty && (
                        <TouchableOpacity
                            style={styles.resetGoalButton}
                            onPress={resetGoals}>
                            <Text>Reset</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <Text style={styles.contentTitle}>Goals</Text>
                {goalsIsEmpty
                    ? <Text style={styles.contentSubtitle}>Empty Goals</Text>
                    : <FlatList
                        style={styles.content}
                        bounces={!goalsIsEmpty}
                        data={goals}
                        renderItem={(itemData) =>
                            <ItemGoalView goal={itemData.item}/>
                        }
                    />
                }
            </View>
        </SafeAreaView>
    );
}

const ItemGoalView = (props) => {
    const {goal} = props

    return (
        <View style={styles.goalItemContainer}>
            {/*<Text style={styles.contentSubtitle}>Empty Goals</Text>*/}
            <Text style={styles.goalItemText}>{goal}</Text>
        </View>
    )
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
        fontWeight: 'bold',
        marginTop: 20
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
    goalItemContainer: {
        marginVertical: 4,
        backgroundColor: '#ccc',
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    goalItemText: {},
    contentSubtitle: {
        fontSize: 16,
        color: 'grey',
        marginTop: 10,
        fontWeight: 'bold'
    }
});
