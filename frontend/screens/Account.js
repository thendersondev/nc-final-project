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
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.amongusavatarcreator.com/assets/img/main/icon.png",
            }}
          ></Image>
          <Text style={styles.username}>USERNAME</Text>
        </View>
      </View>

      <View style={styles.accountInfo}>
        <View>
          <Text style={styles.accountInfoHeader}>Account Details</Text>
          <View style={styles.accountInfoGrid}>
            <View style={styles.accountInfoGridTop}>
              <View>
                <Text style={styles.accountInfoHeadings}>Listings:</Text>
                <Text style={styles.accountInfoHeadings}>Ratings:</Text>
                <Text style={styles.accountInfoHeadings}>Email:</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.comments}>
            <Text style={styles.accountInfoHeader} >Comments:</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
