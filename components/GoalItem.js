import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const ItemGoalView = (props) => {
    const {goal, onDelete, index} = props

    return (
        <TouchableOpacity onPress={onDelete.bind(this, index)}>
            <View style={styles.goalItemContainer}>
                <Text style={styles.goalItemText}>{goal}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goalItemContainer: {
        marginVertical: 4,
        backgroundColor: '#E4D0FF',
        borderColor: '#E4D0FF',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    goalItemText: {},
})