import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>추천 결과 (캐릭터 카드)</Text>
      {/* TODO: 캐릭터 카드 UI 추가 */}
      <Button title="로드맵 보기" onPress={() => navigation.navigate('FlowChart')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 24 },
}); 