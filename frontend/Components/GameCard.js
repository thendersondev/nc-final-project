import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/GameCardStyles";

const GameCard = ({ item: { item }, search }) => {
  if (!item.title.includes(search) && search) return <></>;
  if (item.title === "Gran Turismo 7") {
    item.price.game = undefined;
  }
  const onPress = (url) =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <SafeAreaView style={styles.surroundingView}>
      <View style={styles.cardLeft}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.imgUrl}`,
          }}
        ></Image>
      </View>

      <View style={styles.cardRight}>
        <View style={styles.cardRightTop}>
          <Text style={styles.gameTitle}>
            {item.title} - ({item.platform})
          </Text>
        </View>

        <View style={styles.cardRightBottom}>
          {!!item.price.game && (
            <TouchableOpacity
              style={
                item.bestPrice === item.price.game
                  ? [styles.button, styles.best]
                  : styles.button
              }
              onPress={() => onPress(item.url.game)}
            >
              <Text style={styles.text}>Game</Text>
              <Text style={styles.text}>£{item.price.game}</Text>
            </TouchableOpacity>
          )}
          {!!item.price.game365 && (
            <TouchableOpacity
              style={
                item.bestPrice === item.price.game365
                  ? [styles.button, styles.best]
                  : styles.button
              }
              onPress={() => onPress(item.url.game365)}
            >
              <Text style={styles.text}>Game365</Text>
              <Text style={styles.text}>£{item.price.game365}</Text>
            </TouchableOpacity>
          )}
          {!!item.price.box && (
            <TouchableOpacity
              style={
                item.bestPrice === item.price.box
                  ? [styles.button, styles.best]
                  : styles.button
              }
              onPress={() => onPress(item.url.box)}
            >
              <Text style={styles.text}>Box</Text>
              <Text style={styles.text}>£{item.price.box}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export { GameCard };
