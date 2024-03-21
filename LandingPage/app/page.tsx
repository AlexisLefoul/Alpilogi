"use client";

import {
  Box,
  Link,
  LinkText,
  HStack,
  Text,
  VStack,
  Image,
  Input,
  InputSlot,
  InputField,
  Button,
  ButtonText,
  Divider,
} from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Lottie from "lottie-react";
import animationDataCheck from "./check.json";
import animationDataCross from "./cross.json";

const supabase = createClient(
  "https://vyjnvjelalkakihhnxto.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5am52amVsYWxrYWtpaGhueHRvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MzQ3MDg0OSwiZXhwIjoxOTg5MDQ2ODQ5fQ.lh4kVqFzJJaefh5QzbPp--etwnCTHx_YgzXvHbL4kzo"
);

export default function Home() {
  return (
    <main>
      <Container />
    </main>
  );
}

const FeatureCard = ({ iconSvg, name, name2, name3, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={2}
      borderColor="#497174"
      flex={1}
      m="$3"
      paddingHorizontal={"$12"}
      paddingVertical={"$5"}
      rounded="$3xl"
    >
      <VStack alignItems="center" space="2xl">
        <Image source={`/${iconSvg}`} width={70} height={70} alt="icon" />
        <Text
          fontSize={24}
          color="#303030"
          fontFamily="DIN Alternate"
          textAlign="center"
        >
          {name}
          <Text fontSize={35} color="#C67430" fontFamily="Caveat">
            {name2}
          </Text>
          {name3}
        </Text>
        <Text
          fontSize={18}
          color="#303030"
          fontFamily="Roboto"
          textAlign="center"
        >
          {desc}
        </Text>
      </VStack>
    </Box>
  );
};

const Timer = ({ deadline }: any) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num: number) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline: string) => {
    const time = Date.parse(deadline) - Date.parse(new Date().toISOString());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);
  return (
    <HStack gap={"$12"}>
      <VStack alignItems="center">
        <Text fontSize={50} color="#ffffff" fontFamily="DIN Alternate">
          {leading0(days)}
        </Text>
        <Text fontSize={40} color="#ffffff" fontFamily="Caveat">
          jours
        </Text>
      </VStack>
      <VStack alignItems="center">
        <Text fontSize={50} color="#ffffff" fontFamily="DIN Alternate">
          {leading0(hours)}
        </Text>
        <Text fontSize={40} color="#ffffff" fontFamily="Caveat">
          heures
        </Text>
      </VStack>
      <VStack alignItems="center">
        <Text fontSize={50} color="#ffffff" fontFamily="DIN Alternate">
          {leading0(minutes)}
        </Text>
        <Text fontSize={40} color="#ffffff" fontFamily="Caveat">
          minutes
        </Text>
      </VStack>
      <VStack alignItems="center">
        <Text fontSize={50} color="#ffffff" fontFamily="DIN Alternate">
          {leading0(seconds)}
        </Text>
        <Text fontSize={40} color="#ffffff" fontFamily="Caveat">
          secondes
        </Text>
      </VStack>
    </HStack>
  );
};

const PointCard = ({ name, name2, desc }: any) => {
  return (
    <Box
      flexDirection="row"
      flex={1}
      marginHorizontal={"$1"}
      p={"$5"}
      gap={"$5"}
    >
      <Box h={"100%"} marginTop={"$3"}>
        <Image source={`/icon-point.svg`} width={25} height={25} alt="icon" />
      </Box>
      <Box flexDirection="column" flex={1} gap={"$3"}>
        <Text fontSize={24} color="#303030" fontFamily="DIN Alternate">
          {name}
          <Text fontSize={35} color="#C67430" fontFamily="Caveat">
            {name2}
          </Text>
        </Text>
        <Text fontSize={16} color="#303030" fontFamily="Roboto">
          {desc}
        </Text>
      </Box>
    </Box>
  );
};

const PriceCard = ({ name, price, type, activeType, setActiveType }: any) => {
  var desc;

  switch (type) {
    case "men": {
      desc = [
        "✓ Améliorez votre efficacité et votre rentabilité avec l’optimisation des tournées",
        "✓︎ Des feuilles de soin centralisées directement dans votre application",
        "✓︎ Établissez une relation de confiance et un lien étroit avec les familles",
        "✓︎ Suivez l’état de santé de vos patients ",
      ];
      break;
    }
    case "ann": {
      desc = [
        "✓ Améliorez votre efficacité et votre rentabilité avec l’optimisation des tournées",
        "✓ Des feuilles de soin centralisées directement dans votre application",
        "✓ Établissez une relation de confiance et un lien étroit avec les familles",
        "✓︎ Suivez l’état de santé de vos patients ",
        "✓ Économisez 50€ sur votre abonnement",
      ];
      break;
    }
    case "api": {
      desc = [
        "✓ Possibilité d’intégrer l’application à votre logiciel déjà existant",
        "✓︎ Conservez votre logiciel afin de ne pas perdre vos collaborateurs",
        "✓︎ Une meilleure gestion des feuilles de soin de vos collaborateurs en les synchronisant",
        "✓︎ Suivez le quotidien de vos collaborateurs directement depuis votre logiciel amélioré",
      ];
      break;
    }
  }

  const selectType = (selectedType: string) => {
    setActiveType(activeType === selectedType ? null : selectedType);
  };

  const isActive = type === activeType;

  return (
    <Box
      flexDirection="column"
      borderWidth={2}
      borderColor="#497174"
      backgroundColor={isActive ? "#497174" : ""}
      flex={1}
      m="$3"
      paddingHorizontal={"$12"}
      paddingVertical={"$5"}
      rounded="$3xl"
      gap={"$12"}
      justifyContent="space-between"
    >
      <Box alignItems="center" flexDirection="column" gap={"$1.5"}>
        <Text
          fontSize={30}
          color={isActive ? "#ffffff" : "#303030"}
          fontFamily="Caveat"
        >
          {name}
        </Text>
        <Text
          fontSize={45}
          color={isActive ? "#ffffff" : "#303030"}
          fontFamily="Roboto"
          fontWeight="$bold"
        >
          {price}
          <Text
            fontSize={24}
            color={isActive ? "#ffffff" : "#303030"}
            fontFamily="Roboto"
            fontWeight="$bold"
          >
            {" "}
            / mois
          </Text>
        </Text>
        <Text
          display={type == "api" ? "flex" : "none"}
          fontSize={16}
          color={isActive ? "#ffffff" : "#303030"}
          fontFamily="Roboto"
          fontWeight="$bold"
        >
          le premier mois, puis 25€ par mois
        </Text>
      </Box>
      <Box>
        {desc?.map((d, index) => (
          <Text
            fontSize={16}
            color={isActive ? "#ffffff" : "#303030"}
            fontFamily="Roboto"
            fontWeight="$normal"
            marginVertical={"$2"}
            key={index}
          >
            {d}
          </Text>
        ))}
      </Box>
      <Button
        variant="solid"
        borderRadius="$3xl"
        bg={isActive ? "#ffffff" : "#C67430"}
        paddingHorizontal={"$2"}
        paddingVertical={"$7"}
        onPress={() => selectType(type)}
      >
        <ButtonText
          fontFamily="Roboto"
          fontSize={18}
          fontWeight="$bold"
          color={isActive ? "#C67430" : "#ffffff"}
        >
          Choisir cette formule
        </ButtonText>
      </Button>
    </Box>
  );
};

const ParcourCard = ({ name, num, desc }: any) => {
  return (
    <Box flexDirection="column" flex={1} gap={"$3"} alignItems="center">
      <Text
        fontSize={27}
        color="#303030"
        fontFamily="Roboto"
        fontWeight="$bold"
        textAlign="center"
        bgColor="#D9D9D9"
        paddingHorizontal={"$3"}
        paddingVertical={"$1"}
        borderRadius={"$full"}
      >
        {num}
      </Text>
      <Text fontSize={35} color="#C67430" fontFamily="Caveat">
        {name}
      </Text>
      <Text
        fontSize={18}
        color="#303030"
        fontFamily="Roboto"
        textAlign="center"
      >
        {desc}
      </Text>
    </Box>
  );
};

const FooterCard = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>© 2024 Alpilogi. Tous droits réservés.</p>
        <div className="social-links">
          <a href="https://facebook.com">
            <Image
              source={`/icon-fb.svg`}
              width={30}
              height={30}
              alt="icon-fb"
            />
          </a>
          <a href="https://instagram.com">
            <Image
              source={`/icon-insta.svg`}
              width={30}
              height={30}
              alt="icon-fb"
            />
          </a>
          <a href="https://www.linkedin.com">
            <Image
              source={`/icon-lin.svg`}
              width={30}
              height={30}
              alt="icon-fb"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

const Container = () => {
  let deadline = "June, 21, 2024";
  const [isShowingAlert, setShowingAlert] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [activeType, setActiveType] = useState<string | null>("ann");

  async function addNewlatters(email: string) {
    if (email) {
      const status = (
        await supabase.from("newsletters").insert({ email: email })
      ).status;
      if (status === 201) {
        setShowingAlert(true);
        setData("Inscrit");
        setEmail("");
      } else if (status === 409) {
        setShowingAlert(true);
        setData("Erreur");
        setEmail("");
      }
      console.log(status);
    } else {
      setShowingAlert(true);
      setData("Erreur");
      setEmail("");
    }
  }

  const styleCheck = {
    height: 300,
    width: 300,
    margin: "auto",
  };

  const styleCross = {
    height: 200,
    width: 200,
    margin: "auto",
  };

  useEffect(() => {
    if (isShowingAlert === true) {
      setTimeout(() => {
        setShowingAlert(false);
      }, 3000);
    }
  }, [isShowingAlert]);

  return (
    <Box flex={1} bg="$white" $web-h={"100%"}>
      {data === "Inscrit" && isShowingAlert && (
        <>
          <div className="backdrop" />
          <div className="container-notif">
            <Lottie
              loop={false}
              animationData={animationDataCheck}
              style={styleCheck}
            />
            <h2 style={{ marginTop: -50, fontSize: 40, color: "white" }}>
              {data} !
            </h2>
          </div>
        </>
      )}
      {data === "Erreur" && isShowingAlert && (
        <>
          <div className="backdrop" />
          <div className="container-notif">
            <Lottie
              loop={false}
              animationData={animationDataCross}
              style={styleCross}
            />
            <h2 style={{ marginTop: 0, fontSize: 40, color: "white" }}>
              {data}
            </h2>
          </div>
        </>
      )}
      <HStack justifyContent="space-around" alignItems="center" space="4xl">
        <Box h={150} w={150}>
          <Image source="/logov0.png" size="full" alt="logo" />
        </Box>
        <HStack
          space="4xl"
          reversed={false}
          alignItems="center"
          marginLeft={"$56"}
        >
          <Link href="#home" marginRight={10}>
            <LinkText
              color="#303030"
              fontSize={18}
              fontFamily="Roboto"
              fontWeight="$medium"
              textDecorationLine="none"
            >
              Accueil
            </LinkText>
          </Link>
          <Link href="#whoiam" marginRight={10}>
            <LinkText
              color="#303030"
              fontSize={18}
              fontFamily="Roboto"
              fontWeight="$medium"
              textDecorationLine="none"
            >
              Qui sommes-nous ?
            </LinkText>
          </Link>
          <Link
            href="#contact"
            marginRight={10}
            paddingHorizontal={24}
            paddingVertical={12}
            borderRadius={15}
            bgColor="#C67430"
          >
            <LinkText
              color="#ffffff"
              fontSize={18}
              fontFamily="Roboto"
              fontWeight="$medium"
              textDecorationLine="none"
            >
              Contact
            </LinkText>
          </Link>
        </HStack>
      </HStack>
      <VStack space="4xl" w={"100%"} paddingBottom={"$40"}>
        <HStack space="4xl" justifyContent="center" id="home">
          <VStack
            space="4xl"
            w={"35%"}
            alignItems="center"
            marginRight={"$40"}
            marginTop={"$32"}
          >
            <Text fontSize={34} color="#303030" fontFamily="DIN Alternate">
              La{" "}
              <Text fontSize={50} color="#C67430" fontFamily="Caveat">
                solution
              </Text>{" "}
              digitale pour faciliter les{" "}
              <Text color="#C67430" fontSize={50} fontFamily="Caveat">
                soins à domicile
              </Text>
            </Text>
            <Text fontSize={18} color="#303030" fontFamily="Roboto">
              Alpilogi est un logiciel de digitalisation des feuilles de soin
              utilisées par les professionnels de la santé. Pour les familles,
              il est également possible d’être tenu informé à distance et
              facilement des services apportés à vos proches.
            </Text>
            <Input
              w={"100%"}
              h={"$12"}
              variant="rounded"
              bgColor="#EFF5F5"
              borderWidth="$0"
              isFocused={false}
            >
              <InputField
                pl="$10"
                color="#303030"
                placeholderTextColor="#B6BABA"
                placeholder="Adresse mail..."
                inputMode="email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <InputSlot pl="$3">
                <Button
                  variant="solid"
                  size="md"
                  h={"$full"}
                  borderRadius="$3xl"
                  bg="#C67430"
                  onPress={() => addNewlatters(email)}
                >
                  <ButtonText
                    padding={10}
                    fontFamily="Roboto"
                    fontSize={16}
                    fontWeight="$bold"
                    color="#ffffff"
                  >
                    S’inscrire
                  </ButtonText>
                </Button>
              </InputSlot>
            </Input>
          </VStack>
          <Image
            source="/Iphone.svg"
            width={600}
            height={600}
            alt="Mockup iphone"
          />
        </HStack>
        <Box
          w={"85%"}
          backgroundColor="#497174"
          alignSelf="center"
          borderRadius={"$3xl"}
          paddingVertical={"$5"}
          alignItems="center"
          gap={"$10"}
        >
          <Text fontSize={34} color="#ffffff" fontFamily="DIN Alternate">
            Téléchargez{" "}
            <Text fontSize={50} color="#ffffff" fontFamily="Caveat">
              l’application
            </Text>
            {"  "}
            Alpilogi dans
          </Text>
          <Timer deadline={deadline} />
        </Box>
        <Text
          fontSize={34}
          color="#303030"
          fontFamily="DIN Alternate"
          alignSelf="center"
          marginTop={"$10"}
          id="whoiam"
        >
          Notre{" "}
          <Text fontSize={50} color="#C67430" fontFamily="Caveat">
            mission
          </Text>
        </Text>
        <HStack w={"85%"} alignSelf="center">
          <FeatureCard
            iconSvg="icon-seringue.svg"
            name="Décharger le quotidien des "
            name2="professionnels"
            name3=""
            desc="Remplissez facilement et rapidement les documents de vos patients ! Vous pouvez également bénéficier d’un suivi, d’une synthèse et de fiches patients."
          ></FeatureCard>
          <FeatureCard
            iconSvg="icon-messages.svg"
            name="Rassurer les "
            name2="familles "
            name3="grâce au lien avec les intervenants"
            desc="Soyez avertis des soins apportés à vos proches en temps réel, communiquez avec l’auxiliaire de vie et faites passer des messages grâce au tchat."
          ></FeatureCard>
          <FeatureCard
            iconSvg="icon-orga.svg"
            name="Soulager les "
            name2="organismes "
            name3="d’aide à la personne"
            desc="Restez connectés avec vos salariés grâce à un tableau de bord recensant leurs missions et leurs patients à charge."
          ></FeatureCard>
        </HStack>
        <VStack w={"85%"} alignSelf="center" marginTop={"$10"} space="2xl">
          <Text fontSize={34} color="#303030" fontFamily="DIN Alternate">
            Pourquoi choisir{" "}
            <Text fontSize={50} color="#C67430" fontFamily="Caveat">
              Alpilogi{" "}
            </Text>
            ?
          </Text>
          <Text w={"65%"} fontSize={18} color="#303030" fontFamily="Roboto">
            Alpilogi vous aidera dans la gestion de votre journée en tant
            qu’aide à domicile avec la création de fiches de soin numérisées, un
            trajet crée de manière otpimale pour vos visites chez vos patients
            et un gain de temps chez vous le soir. Toutes les informations sur
            les soins apportés seront directement communiqués à la famille sans
            que celle-ci s’inquiète.
          </Text>
          <Box>
            <HStack space="md" alignItems="flex-start">
              <PointCard
                name="Création d’un "
                name2="lien"
                desc="Pour que les familles aient accès aux soins apportés à leurs proches à travers un système de messagerie et de partage d’informations"
              />
              <Divider
                orientation="vertical"
                mx="$1"
                bg="#497174"
                h={"$16"}
                w={"$0.5"}
                alignSelf="center"
              />
              <PointCard
                name="Numériser les "
                name2="infos"
                desc="Simplifications de la fiche de soin pour les infirmier.ère.s qui pourront l’établir directement sur l’application"
              />
              <Divider
                orientation="vertical"
                mx="$1"
                bg="#497174"
                h={"$16"}
                w={"$0.5"}
                alignSelf="center"
              />
              <PointCard
                name="Faciliter "
                name2="l’organisation"
                desc="Tous les documents seront numérisés ce qui rendra plus simple l'archivage des feuilles de soin pour l’organisme (informatique)"
              />
            </HStack>
            <HStack space="md" alignItems="flex-start">
              <PointCard
                name="Générer de la "
                name2="confiance"
                desc="Les familles pourront se fier totalement aux intervenants qui garantiront une relation de confiance entre eux et le patient"
              />
              <Divider
                orientation="vertical"
                mx="$1"
                bg="#497174"
                h={"$16"}
                w={"$0.5"}
                alignSelf="center"
              />
              <PointCard
                name="Gratuit pour les "
                name2="familles"
                desc="Les familles auront simplement besoin de l’application sur leur téléphone pour avoir accès à l’interface"
              />
              <Divider
                orientation="vertical"
                mx="$1"
                bg="#497174"
                h={"$16"}
                w={"$0.5"}
                alignSelf="center"
              />
              <PointCard
                name="Un pack "
                name2="pour tous"
                desc="Pour les organisations, les intervenant et les familles, Alpilogi vous suffit !"
              />
            </HStack>
          </Box>
        </VStack>
        <Box alignSelf="center" w={"60%"} marginTop={"$10"} gap={"$5"}>
          <Text
            fontSize={34}
            color="#303030"
            fontFamily="DIN Alternate"
            textAlign="center"
          >
            Choisissez votre{" "}
            <Text fontSize={50} color="#C67430" fontFamily="Caveat">
              formule
            </Text>
          </Text>
          <Text
            fontSize={18}
            color="#303030"
            fontFamily="Roboto"
            textAlign="center"
          >
            En fonction de vos besoins et de votre utilisation, vous pouvez
            sélectionner la formule qui vous correspond le plus. Profitez
            pleinement d’Alpilogi au quotidien !
          </Text>
        </Box>
        <HStack w={"85%"} alignSelf="center">
          <PriceCard
            name="Mensuel"
            price="25€"
            type="men"
            activeType={activeType}
            setActiveType={setActiveType}
          />
          <PriceCard
            name="Annuel"
            price="20,80€"
            type="ann"
            activeType={activeType}
            setActiveType={setActiveType}
          />
          <PriceCard
            name="API"
            price="125€"
            type="api"
            activeType={activeType}
            setActiveType={setActiveType}
          />
        </HStack>
        <HStack w={"85%"} alignSelf="center" marginTop={"$10"} space="2xl">
          <VStack w={"58%"}>
            <Text fontSize={34} color="#303030" fontFamily="DIN Alternate">
              Comment ça{" "}
              <Text fontSize={50} color="#C67430" fontFamily="Caveat">
                fonctionne{" "}
              </Text>
              ?
            </Text>
            <Image
              source="/mockup_2.svg"
              width={750}
              height={650}
              alt="Mockup iphone 2"
            />
          </VStack>
          <VStack
            alignItems="center"
            w={"42%"}
            space="xl"
            paddingHorizontal={"$20"}
            paddingTop={"$5"}
          >
            <ParcourCard
              name="Téléchargez"
              num="1"
              desc="Rendez-vous sur l’app store ou sur google play afin de télécharger
              notre application"
            />
            <Divider
              orientation="vertical"
              mx="$1"
              bg="#303030"
              h={"$16"}
              w={"$0.5"}
            />
            <ParcourCard
              name="Inscrivez-vous"
              num="2"
              desc="Suivez les étapes de création de compte et laissez-vous guider par
              l’application"
            />
            <Divider
              orientation="vertical"
              mx="$1"
              bg="#303030"
              h={"$16"}
              w={"$0.5"}
            />
            <ParcourCard
              name="Profitez"
              num="3"
              desc="Bénéficiez de la simplicité d’utilisation de l’interface et
              utilisez Alpilogi au quotidien"
            />
          </VStack>
        </HStack>
      </VStack>
      <FooterCard />
    </Box>
  );
};
