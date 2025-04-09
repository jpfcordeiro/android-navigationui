import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    title: string;
    onPress: () => void;
};

export function CustomButton({ title, onPress }: Props) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
        alignItems: 'center',
    }
});

