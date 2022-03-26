import { Text, View, Button, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/AccountPageStyles";
export default function Account(props) {
  const mockComments = [
    { comment: "A really good seller " },
    { comment: "Horrible guy!" },
  ];
  return (
    <View style={styles.pageContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.amongusavatarcreator.com/assets/img/main/icon.png",
          }}
        ></Image>
        <Text style={styles.username}>USRERNAME</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoHeader}>Listings:</Text>
          <Text style={styles.infoText}>4</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoHeader}>Rating:</Text>
          <Text style={styles.infoText}>5/10 </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <Text style={styles.infoHeader}>Comments</Text>
        <FlatList
          data={mockComments}
          renderItem={(item) => {
            <Text>{item.comment}</Text>;
          }}
        />
       
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
