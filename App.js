import {
    FlatList, Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar as StatusBarRN
} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {ItemGoalView} from "./components/GoalItem";
import {GoalInput} from "./components/GoalInput";

export default function App() {

    const [goals, setGoals] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const goalsIsEmpty = goals.length === 0

    const startAddGoalHandler = () => {
        setModalIsVisible(true)
    }

    /**
     * Handler for handling click button
     */
    const addGoalHandler = (enteredGoal) => {
        setGoals((currentGoals) => [...currentGoals, enteredGoal])
        endGoalHandler()
    }

    const endGoalHandler = () => {
        setModalIsVisible(false)
    }

    const resetGoals = () => setGoals([])

    const onDeleteHandler = (index) => {
        const updatedGoals = [...goals]
        updatedGoals.splice(index, 1)
        setGoals(updatedGoals)
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="inverted"/>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', gap: 12}}>
                    <TouchableOpacity
                        style={styles.addGoalButton}
                        onPress={startAddGoalHandler}>
                        <Text style={styles.addGoalTextButton}>Add New Goal</Text>
                    </TouchableOpacity>
                    {!goalsIsEmpty &&
                        <TouchableOpacity
                            style={styles.resetGoalButton}
                            onPress={resetGoals}>
                            <Text>Reset Goals</Text>
                        </TouchableOpacity>
                    }
                </View>
                <GoalInput
                    onAddGoal={addGoalHandler}
                    visible={modalIsVisible}
                    cancelGoal={endGoalHandler}/>
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
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBarRN.currentHeight : 0
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
        marginTop: 20,
        color: '#F31282'
    },
    contentSubtitle: {
        fontSize: 16,
        color: '#FFF',
        marginTop: 10,
        fontWeight: 'bold'
    },
    addGoalButton: {
        backgroundColor: '#B180F0',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        alignItems: "center"
    },
    resetGoalButton: {
        backgroundColor: 'red',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        alignItems: "center"
    },
    addGoalTextButton: {
        color: 'white'
    },
});
