import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import categoriesData from "../assets/data/categoriesData";
import popularData from "../assets/data/popularData";

const Home = ({ navigation }) => {
  const renderCategoryItem = ({ item: food }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: food.selected ? colors.primary : colors.white,
          },
        ]}
      >
        <Image source={food.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{food.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: food.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={food.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      removeClippedSubviews={true}
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              style={styles.profileImage}
              source={require("../assets/images/profile.png")}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        {/* Catagories */}
        <View style={styles.catagoriesWrapper}>
          <Text style={styles.catagoriesTitle}>Catagories</Text>
          <View style={styles.catagoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>

          {popularData.map((food) => (
            <TouchableOpacity
              key={food.id}
              onPress={() =>
                navigation.navigate("Details", {
                  food: food,
                })
              }
            >
              <View
                key={food.id}
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: food.id == 1 ? 10 : 20,
                  },
                ]}
              >
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={styles.popularTopText}>Top of The Week</Text>
                    </View>
                    <View style={styles.popularTitleWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        {food.title}
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Weight {food.weight}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.textDark} />
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        color={colors.textDark}
                      />
                      <Text style={styles.rating}>{food.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularCardRight}>
                  <Image source={food.image} style={styles.popularCardImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  searchText: {
    fontFamily: "Montserrat-Semibold",
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textDark,
    borderBottomWidth: 2,
  },
  catagoriesWrapper: {
    marginTop: 30,
  },
  catagoriesTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  catagoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 18,
  },
  categoryItemWrapper: {
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginTop: 10,
    fontWeight: "bold",
  },
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    fontWeight: "bold",
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularTopText: {
    marginLeft: 10,
    fontWeight: "bold",
    fontFamily: "Montserrat-Semibold",
    fontSize: 14,
  },
  popularTitleWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: "Montserrat-Semibold",
    fontSize: 14,
    color: colors.textDark,
    fontWeight: "bold",
  },
  popularTitlesWeight: {
    fontFamily: "Montserrat-Semibold",
    fontSize: 12,
    color: colors.textLight,
    fontWeight: "bold",
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  rating: {
    fontFamily: "Montserrat-Semibold",
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 60,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
  },
});

export default Home;
