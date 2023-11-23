import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const ItemGoalView = (props) => {
    const {goal, onDelete, index} = props

    const onDeleteHandler = () => onDelete(index)

    return (
        <TouchableOpacity onPress={onDeleteHandler}>
            <View style={styles.goalItemContainer}>
                <Text style={styles.goalItemText}>{goal}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goalItemContainer: {
        marginVertical: 4,
        backgroundColor: '#ccc',
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    goalItemText: {},
})