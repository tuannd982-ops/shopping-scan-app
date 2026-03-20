import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Checkout() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Checkout</Text>

      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: '#2ECC71',
          padding: 15,
          borderRadius: 15,
          alignItems: 'center',
        }}
        onPress={() => router.push('/success')}
      >
        <Text style={{ color: '#fff' }}>Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
}