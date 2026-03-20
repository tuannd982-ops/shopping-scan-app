import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hello 👋</Text>
          <Text style={styles.sub}>Christie Doe</Text>
        </View>

        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.section}>Your Insights</Text>

      <View style={styles.grid}>

        {[
          { title: 'Scan new', sub: 'Scanned 483', color: '#E5E7FF' },
          { title: 'Counterfeits', sub: 'Counterfeit 32', color: '#FFE5D9' },
          { title: 'Success', sub: 'Checkouts 8', color: '#DFF7E2' },
          { title: 'Directory', sub: 'History 26', color: '#E3F2FF' },
        ].map((item, i) => (
          <View key={i} style={styles.card}>
            <View style={[styles.icon, { backgroundColor: item.color }]} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSub}>{item.sub}</Text>
          </View>
        ))}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA', padding: 20 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: { fontSize: 24, fontWeight: '600' },
  sub: { color: '#888' },

  avatar: { width: 50, height: 50, borderRadius: 25 },

  section: { marginTop: 25, fontSize: 18, fontWeight: '600' },

  grid: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 },

  card: {
    width: '47%',
    backgroundColor: '#F0F1F7',
    borderRadius: 25,
    padding: 18,
    margin: '1.5%',
  },

  icon: {
    width: 50,
    height: 50,
    borderRadius: 18,
    marginBottom: 10,
  },

  cardTitle: { fontWeight: '600' },
  cardSub: { fontSize: 12, color: '#999', marginTop: 3 },
});