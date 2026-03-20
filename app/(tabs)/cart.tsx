import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

function Item({ name, brand, price }) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>₹ {price}</Text>
      </View>

      <View style={styles.qty}>
        <Text>-</Text>
        <Text>2</Text>
        <Text style={{ color: '#FF8C5A' }}>+</Text>
      </View>
    </View>
  );
}

export default function CartScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Your Cart 👍</Text>

      <Item name="Orange Juice" brand="Lauren’s" price="149" />
      <Item name="Skimmed Milk" brand="Baskin’s" price="129" />
      <Item name="Aloe Vera Lotion" brand="Marley’s" price="1249" />

      <View style={styles.totalRow}>
        <Text style={{ fontSize: 18 }}>Total</Text>
        <Text style={styles.total}>₹ 1,527</Text>
      </View>

      <LinearGradient
        colors={['#FF9A6C', '#FF7A45']}
        style={styles.button}
      >
        <TouchableOpacity onPress={() => router.push('/checkout')}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>
            Proceed to checkout
          </Text>
        </TouchableOpacity>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F6FA' },

  title: { fontSize: 24, fontWeight: '600', marginBottom: 10 },

  item: {
    backgroundColor: '#ECECF3',
    borderRadius: 20,
    padding: 15,
    marginTop: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  brand: { fontSize: 12, color: '#999' },
  name: { fontWeight: '600' },
  price: { color: '#FF8C5A', marginTop: 5 },

  qty: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
  },

  totalRow: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  total: { color: '#FF8C5A', fontSize: 18 },

  button: {
    marginTop: 25,
    padding: 18,
    borderRadius: 30,
    alignItems: 'center',
  },
});