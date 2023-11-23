import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {ItemGoalView} from "./components/GoalItem";
import {GoalInput} from "./components/GoalInput";

export default function App() {

    const [goals, setGoals] = useState([])
    const goalsIsEmpty = goals.length === 0

    /**
     * Handler for handling click button
     */
    const addGoalHandler = (enteredGoal) => {
        setGoals((currentGoals) => [...currentGoals, enteredGoal])
    }

    const resetGoals = () => setGoals([])

    const onDeleteHandler = (index) => {
        const updatedGoals = [...goals]
        updatedGoals.splice(index, 1)
        setGoals(updatedGoals)
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <GoalInput
                    onAddGoal={addGoalHandler}
                    goalsIsEmpty={goalsIsEmpty}
                    resetGoals={resetGoals}/>
                <Text style={styles.contentTitle}>Goals</Text>
                {goalsIsEmpty
                    ? <Text style={styles.contentSubtitle}>Empty Goals</Text>
                    : <FlatList
                        style={styles.content}
                        bounces={!goalsIsEmpty}
                        data={goals}
                        renderItem={(itemData) =>
                            <ItemGoalView
                                goal={itemData.item}
                                index={itemData.index}
                                onDelete={onDeleteHandler}
                            />
                        }
                    />
                }
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
    content: {
        flex: 1,
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    contentSubtitle: {
        fontSize: 16,
        color: 'grey',
        marginTop: 10,
        fontWeight: 'bold'
    }
});
