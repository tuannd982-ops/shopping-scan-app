import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function ScanScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/juice.png')}
        style={styles.image}
      />

      {/* FRAME */}
      <View style={styles.frame}>
        <View style={styles.tl} />
        <View style={styles.tr} />
        <View style={styles.bl} />
        <View style={styles.br} />
      </View>

      {/* BOTTOM */}
      <View style={styles.bottom}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/juice.png')}
            style={styles.thumb}
          />
          <View>
            <Text style={styles.brand}>Lauren’s</Text>
            <Text style={styles.name}>Orange Juice</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.add}
          onPress={() => router.push('/cart')}
        >
          <Text style={{ color: '#fff', fontSize: 22 }}>+</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EADBC8' },

  image: { width: '100%', height: '80%', resizeMode: 'contain' },

  frame: {
    position: 'absolute',
    top: '30%',
    left: '15%',
    width: 260,
    height: 260,
  },

  tl: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#fff',
    borderTopLeftRadius: 15,
  },

  tr: {
    position: 'absolute',
    right: 0,
    width: 40,
    height: 40,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: '#fff',
    borderTopRightRadius: 15,
  },

  bl: {
    position: 'absolute',
    bottom: 0,
    width: 40,
    height: 40,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#fff',
    borderBottomLeftRadius: 15,
  },

  br: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: '#fff',
    borderBottomRightRadius: 15,
  },

  bottom: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  thumb: { width: 40, height: 60, marginRight: 10 },

  brand: { fontSize: 12, color: '#999' },
  name: { fontWeight: '600' },

  add: {
    backgroundColor: '#5B6CFF',
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});