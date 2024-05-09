import { View, Text, Modal, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../constant/Constant";
const TermandConditon = ({ show, closingModel }) => {
  const [scrolling, setScrolling] = useState(0);
  const [disable, setDisable] = useState(true);
  const handleEvent = (event) => {
    let yOffset = Math.round(event.nativeEvent.contentOffset.y);
    setScrolling(yOffset);
  };
  useEffect(() => {
    if (scrolling > 840) {
      setDisable(false);
    }
  }, [scrolling]);
  return (
    <Modal transparent visible={show} animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.948)",
        }}
      >
        <View
          style={{
            width: "80%",
            height: "50%",
            backgroundColor: "white",
            elevation: 5,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Terms & Conditions
            </Text>
            <Entypo
              onPress={closingModel}
              name="cross"
              size={24}
              color="black"
            />
          </View>

          <ScrollView
            onScroll={(e) => handleEvent(e)}
            showsVerticalScrollIndicator={true}
            indicatorStyle="white"
            style={{ padding: 10, fontSize: 17 }}
          >
            <Text
              style={{
                fontSize: 17,
                marginTop: 5,
                color: "blue",
                fontWeight: "600",
              }}
            >
              Please read the full terms and conditions to continue
            </Text>
            <Text>
              Culpa exercitation amet nostrud labore duis. Pariatur ea sunt
              labore ex esse ad ut elit voluptate reprehenderit incididunt sunt
              esse id. Nulla aliquip non id sit est ullamco. Sint elit ullamco
              nulla non aute sint nostrud. Voluptate incididunt deserunt
              adipisicing culpa dolor esse. Nisi quis cupidatat pariatur non
              sint exercitation sit sit sit commodo exercitation dolor cillum
              magna. Non eiusmod labore cupidatat laborum ea enim deserunt
              officia mollit adipisicing nisi esse. Officia amet irure nulla
              nisi laborum. Magna fugiat fugiat anim qui nostrud amet Lorem.
            </Text>

            <Text
              style={{
                marginTop: 10,
              }}
            >
              Culpa exercitation amet nostrud labore duis. Pariatur ea sunt
              labore ex esse ad ut elit voluptate reprehenderit incididunt sunt
              esse id. Nulla aliquip non id sit est ullamco. Sint elit ullamco
              nulla non aute sint nostrud. Voluptate incididunt deserunt
              adipisicing culpa dolor esse. Nisi quis cupidatat pariatur non
              sint exercitation sit sit sit commodo exercitation dolor cillum
              magna. Non eiusmod labore cupidatat laborum ea enim deserunt
              officia mollit adipisicing nisi esse. Officia amet irure nulla
              nisi laborum. Magna fugiat fugiat anim qui nostrud amet Lorem.
              Culpa exercitation amet nostrud labore duis. Pariatur ea sunt
              labore ex esse ad ut elit voluptate reprehenderit incididunt sunt
              esse id. Nulla aliquip non id sit est ullamco. Sint elit ullamco
              nulla non aute sint nostrud. Voluptate incididunt deserunt
              adipisicing culpa dolor esse. Nisi quis cupidatat pariatur non
              sint exercitation sit sit sit commodo exercitation dolor cillum
              magna. Non eiusmod labore cupidatat laborum ea enim deserunt
              officia mollit adipisicing nisi esse. Officia amet irure nulla
              nisi laborum. Magna fugiat fugiat anim qui nostrud amet Lorem.
            </Text>
            <Text
              style={{
                marginTop: 10,
              }}
            >
              Culpa exercitation amet nostrud labore duis. Pariatur ea sunt
              labore ex esse ad ut elit voluptate reprehenderit incididunt sunt
              esse id. Nulla aliquip non id sit est ullamco. Sint elit ullamco
              nulla non aute sint nostrud. Voluptate incididunt deserunt
              adipisicing culpa dolor esse. Nisi quis cupidatat pariatur non
              sint exercitation sit sit sit commodo exercitation dolor cillum
              magna. Non eiusmod labore cupidatat laborum ea enim deserunt
              officia mollit adipisicing nisi esse. Officia amet irure nulla
              nisi laborum. Magna fugiat fugiat anim qui nostrud amet Lorem.
              Culpa exercitation amet nostrud labore duis. Pariatur ea sunt
              labore ex esse ad ut elit voluptate reprehenderit incididunt sunt
              esse id. Nulla aliquip non id sit est ullamco. Sint elit ullamco
              nulla non aute sint nostrud. Voluptate incididunt deserunt
              adipisicing culpa dolor esse. Nisi quis cupidatat pariatur non
              sint exercitation sit sit sit commodo exercitation dolor cillum
              magna. Non eiusmod labore cupidatat laborum ea enim deserunt
              officia mollit adipisicing nisi esse. Officia amet irure nulla
              nisi laborum. Magna fugiat fugiat anim qui nostrud amet Lorem.
            </Text>
            <Text
              style={{
                marginBottom: 100,
                marginTop: 10,
              }}
            >
              Culpa exercitation amet nostrud labore duis. Pariatur ea sunt
              labore ex esse ad ut elit voluptate reprehenderit incididunt sunt
              esse id. Nulla aliquip non id sit est ullamco. Sint elit ullamco
              nulla non aute sint nostrud. Voluptate incididunt deserunt
              adipisicing culpa dolor esse. Nisi quis cupidatat pariatur non
              sint exercitation sit sit sit commodo exercitation dolor cillum
              magna. Non eiusmod labore cupidatat laborum ea enim deserunt
              officia mollit adipisicing nisi esse. Officia amet irure nulla
              nisi laborum. Magna fugiat fugiat anim qui nostrud amet Lorem.
              Culpa exercitation amet nostrud labore duis. Pariatur ea sunt
              labore ex esse ad ut elit voluptate reprehenderit incididunt sunt
              esse id. Nulla aliquip non id sit est ullamco. Sint elit ullamco
              nulla non aute sint nostrud. Voluptate incididunt deserunt
              adipisicing culpa dolor esse. Nisi quis cupidatat pariatur non
              sint exercitation sit sit sit commodo exercitation dolor cillum
              magna. Non eiusmod labore cupidatat laborum ea enim deserunt
              officia mollit adipisicing nisi esse. Officia amet irure nulla
              nisi laborum. Magna fugiat fugiat anim qui nostrud amet Lorem.
            </Text>
          </ScrollView>

          {/* button view */}
          <Pressable
            disabled={disable}
            onPress={closingModel}
            style={{
              position: "absolute",
              bottom: 0,
              height: 60,
              backgroundColor: disable == true ? COLORS.GREY : COLORS.BLUE,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              I Accept
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default TermandConditon;
