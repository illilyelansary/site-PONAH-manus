const membersData = [
  {
    "name": "AMSS",
    "fullName": "Association Malienne pour la Survie au Sahel",
    "dateCreation": "1991-09-21 00:00:00",
    "accordCadre": "0026/0286",
    "adresse": "Tombouctou, route de kabara ,face BIM S.A",
    "zoneIntervention": " Kidal, Menaka, Gao, Tombouctou, Mopti, Segou, Sikasso, Koulikoro et district de Bamako",
    "responsable": "Wakina Elmehdi Ag "
  },
  {
    "name": "ONG EFES N'TAMADRITE",
    "fullName": "ONG EFES N'TAMADRITE",
    "dateCreation": "26 fevrier 2016",
    "accordCadre": "1364",
    "adresse": " Kidal",
    "zoneIntervention": "Kidal, Gao, Menaka",
    "responsable": " Ag Acherif Mohamed Mahmoud"
  },
  {
    "name": "WALE",
    "fullName": " Action Santé Population",
    "dateCreation": "1997-06-19 00:00:00",
    "accordCadre": "AC  N° 0455/000909 du 15/04/2008, Avenant N° 3323/MATCL du 22/12/2010",
    "adresse": "Segou",
    "zoneIntervention": "Kayes, Ségou, Koulikoro, Sikasso, Tombouctou",
    "responsable": "Soumontera  Aly"
  },
  {
    "name": "ASDEMIN",
    "fullName": "Appui pour la Scolarisation et le Développement des Enfants et des Femmes pour une Meilleure Integration Nationale",
    "dateCreation": "2021-02-15 00:00:00",
    "accordCadre": "1710",
    "adresse": "Etambar Kidal",
    "zoneIntervention": "Kidal, Gao, Tombouctou, Mopti, Segou, Menaka, Bamako",
    "responsable": "Walet ouefan  Nassouroun"
  },
  {
    "name": "AMAPROS",
    "fullName": "Association Malienne pour la Promotion  du Sahel",
    "dateCreation": "1989-04-25 00:00:00",
    "accordCadre": "Récépissé N° : 360 et l' accord cadre Numéro: 0160/00086",
    "adresse": "Bamako Sébénicoro à 500M du pont Woyowayanko en face de la Résidence de l'ancien Président IBK.",
    "zoneIntervention": "Koulikoro, Sikasso, Ségou, San, Mopti, Bandiagara et le District de Bamako",
    "responsable": "Salikou Ouattara"
  },
  {
    "name": "A C D",
    "fullName": "Action Couverture et Développement",
    "dateCreation": "1988-03-19 00:00:00",
    "accordCadre": "0546/000118 du 13 mai 2008",
    "adresse": "Magnambougou Projet Rue 382 Porte 101 Bamako",
    "zoneIntervention": "Segou, San, Kita, Mopti",
    "responsable": "Mossa Yattara"
  },
  {
    "name": "AJA Mali",
    "fullName": " Association Jeunesse Actions Mali",
    "dateCreation": "2008-04-15 00:00:00",
    "accordCadre": "Accord cadre N°:462/460",
    "adresse": "Sébénikoro Wèrèda, près de la Pharmacie Kalifa Koné, Bamako",
    "zoneIntervention": "Koulikoro, Sikasso, Ségou",
    "responsable": "Amadou Baba  Diarra"
  },
  {
    "name": "ARDS-T",
    "fullName": "Association pour la Recherche et le Développement Social",
    "dateCreation": "2003-02-19 00:00:00",
    "accordCadre": "0046/1676",
    "adresse": "Bamako",
    "zoneIntervention": "Tombouctou",
    "responsable": "Ag Mohamed Fida "
  },
  {
    "name": "HONNEY-Mali",
    "fullName": "Association pour l'Employabilité, la Protection et la Promotion des droits des jeunes de Gourma Rharous",
    "dateCreation": "2021-11-19 00:00:00",
    "accordCadre": "Acord Cadre N°001834",
    "adresse": "Rharous ville, quartier Djoula",
    "zoneIntervention": "Tombouctou",
    "responsable": "Ibrahim Younoussa Maiga"
  },
  {
    "name": "ASG ",
    "fullName": "Association Subaahi Gumo ",
    "dateCreation": "24/07/91 suivant récépissé N°0764/MAT-DNAT",
    "accordCadre": "Accord – Cadre signé le 26 août 1993 sous le N°422 renouvelé le 09 janvier 2008 sous le N°0127/000422",
    "adresse": " Badalabougou SEMA GEXCO Rue 136 Porte 710;  ",
    "zoneIntervention": "Ségou",
    "responsable": " Bouri Mahamane "
  },
  {
    "name": "AMCFE",
    "fullName": "Association Malienne pour la Conservation de la Faune et l'Environement",
    "dateCreation": "1991",
    "accordCadre": "00182/00",
    "adresse": "Kabalan tournant cocan",
    "zoneIntervention": "Kayes, Ségou, Koulikoro et le District de Bamako",
    "responsable": "Moriba Nomoko"
  },
  {
    "name": "AFAD",
    "fullName": "Association de Formation et d'Appui au  Développement",
    "dateCreation": "16/07/1995, sous le numéro 056/MATS",
    "accordCadre": "Accord Cadre signé avec l'Etat, le 18 août 1995 sous le numéro N° 604 et renouvelé le 14 février 2008 sous le N°203/0604",
    "adresse": "Bamako, Faladiè –Séma –Rue 844 / Porte 355 à Côté de la Grande Mosquée ",
    "zoneIntervention": "Bamako, Koulikoro, Dioila, Nara, Sikasso, Mopti, Bandiagara, Kayes, Gao, Tombouctou, Kidal\n",
    "responsable": "Assitan  Coulibaly"
  },
  {
    "name": "APIF",
    "fullName": "Appui aux Projets et Initiatives des Femmes",
    "dateCreation": "1992-05-02 00:00:00",
    "accordCadre": "0776-324",
    "adresse": " Château secteur I derrière le terrain de football de Gao",
    "zoneIntervention": "District de Bamako, Koulikoro, Gao, Tombouctou, Kidal ",
    "responsable": "Ahmadou Maiga"
  },
  {
    "name": "GRADECOM",
    "fullName": "Groupe de Recherches d'Actions et d'Assistance pour le Développement Communautaire",
    "dateCreation": "1er Août 1997",
    "accordCadre": "Accord-Cadre N° 0502 MATS DNAT ",
    "adresse": "Sikasso-Hamdallaye",
    "zoneIntervention": "Sikasso, Bougouni, Koutiala, Nara, Mopti et Bamako",
    "responsable": "Fousséni Dembélé"
  },
  {
    "name": "A.Pro.F.E.J",
    "fullName": "Association pour la Promotion de la Formation et l'Emploi des Jeunes ",
    "dateCreation": "2021-03-24 00:00:00",
    "accordCadre": "1726",
    "adresse": "Sirakoro cité BMS en face dela pharmacie Issiaka SANOGO",
    "zoneIntervention": "Bamako, Koulikoro",
    "responsable": "Brehima Diallo"
  },
  {
    "name": "GARDL",
    "fullName": "Groupe Action Recherche Pour le Développement Local",
    "dateCreation": "2008-03-10 00:00:00",
    "accordCadre": "0293/001790",
    "adresse": "Bamako-Sirakoro-Cité BMS",
    "zoneIntervention": "Bamako - Koulikoro - Sikasso-Bougouni - Mopti - Bandiagara-Douentza-Tombouctou-Taoudénié-Nara -Gao - Menaka et Kidal",
    "responsable": "Mohamed Lamine M'boderi"
  },
  {
    "name": "HELP-SAHEL",
    "fullName": "HELP FOR SAHEL",
    "dateCreation": "2021-12-03 00:00:00",
    "accordCadre": "Accord Cadre 1840",
    "adresse": "Bamako, 1008 logement",
    "zoneIntervention": "Kidal, Ménaka, Gao, Tombouctou, Mopti\n",
    "responsable": "Alassane AG Mohamar"
  },
  {
    "name": "AAG",
    "fullName": "Association AMAAN GOURMA",
    "dateCreation": "23 décembre 2015",
    "accordCadre": "Accord-Cadre N° 001348 MATS DNAT ",
    "adresse": "Gao château extension sud",
    "zoneIntervention": "Gao, Tombouctou, Ménaka, Sikasso, Ségou et Mopti",
    "responsable": "Abdoul Moutalib Ag Watane"
  },
  {
    "name": "YA-G-TU",
    "fullName": "Yam-Giribolo-Tumo (Association pour la Promotion de la Femme)",
    "dateCreation": "1997-12-08 00:00:00",
    "accordCadre": "0635/000947",
    "adresse": "Bandiagara",
    "zoneIntervention": "Bandiagara;\nDouentza;\nMopti;\nSan;\nSegou;\nNioro du sahel",
    "responsable": "Yaïguéré Tembely"
  },
  {
    "name": "AID-ZL ",
    "fullName": "Actions Integrées pour le Developpement des Zones Lacustre ",
    "dateCreation": "Juin 20214",
    "accordCadre": "1798MATD ",
    "adresse": "Bamako, Bacodjicoroni Golfe, Rue 812 Porte B4",
    "zoneIntervention": "Bamako, San, Mopti, Bandjagara, Douentza, Tombouctou, Taoudenit et Gao ",
    "responsable": "Moussa Ibrahima  Toure"
  },
  {
    "name": "FEDE",
    "fullName": "FEMME ET DEVELOPPEMENT",
    "dateCreation": "2002-01-04 00:00:00",
    "accordCadre": "0524/001582",
    "adresse": "Route de Kati 800m du centre émetteur de  l'ORTM, rue à droite  juste avant la Boulangerie \"BABA\", en face dans la rue et sur la gauche, Château d'eau vert, faire face à Kati, 50m à droite, 5è Bâtiment.",
    "zoneIntervention": "Bamako -Kayes - Kita - Koulikoro - Sikasso- Ségou - San - Koutiala -  Mopti - Bandiagara -Gao - Menaka",
    "responsable": "Korotoumou Théra"
  },
  {
    "name": "AMALED Mali",
    "fullName": "Association Malienne pour l'Education à l'Environnement et le Développement Durable ",
    "dateCreation": "1er Août 1997",
    "accordCadre": "Accord-Cadre N° 0502 MATS DNAT ",
    "adresse": "Sikasso-Hamdallaye",
    "zoneIntervention": "Sikasso, Bougouni, Koutiala, Nara, Mopti et Bamako",
    "responsable": "Fousséni Dembélé"
  },
  {
    "name": "AFEM",
    "fullName": "Association des Femmes Entreprenantes du Mali ",
    "dateCreation": "2012-04-12 00:00:00",
    "accordCadre": "N°0232/G-DB Récépissé, N° Accord Cadre 001800",
    "adresse": "Lassa Commune IV du District de Bamako ",
    "zoneIntervention": "Kayes, Bamako, Mopti, Tombouctou, Gao, Kidal, Ségou, Koulikoro, Sikasso",
    "responsable": "Kadiditou Doumbia"
  },
  {
    "name": "APROFID",
    "fullName": "Association Pour La Promotion Des Filles Descolarisees Au Mali",
    "dateCreation": "2008-07-14 00:00:00",
    "accordCadre": "0694/001075",
    "adresse": "Bamako",
    "zoneIntervention": "Mopti,  Gao, Segou, Tombouctou Kidal ET LE DISTRICT DE BAMAKO",
    "responsable": "Mme Maiga   Kadidiatou Baby"
  },
  {
    "name": "ADICOM",
    "fullName": "Association pour le developpement des Initiatives communautaires",
    "dateCreation": "2011-12-31 00:00:00",
    "accordCadre": "Accord Cadre N°001387",
    "adresse": " Bamako, Yirimadio,ZRNY, Pres du stade du 26 Mars   ",
    "zoneIntervention": "Tombouctou,  Diola, Koulikoro,  District de Bamako",
    "responsable": "Alassane  Aguili"
  },
  {
    "name": "OMPIDES",
    "fullName": "Organisation Malienne pour la Paix, l’Intégration et le Développement Economique et Social ",
    "dateCreation": "09 Juillet 1997",
    "accordCadre": " N°00913 du 03 septembre 1997 rénouvelé le 26 Janvier 2023 sous le N°001969",
    "adresse": "BAMAKO, NIAMANA pres de la cour des Eaux et Forets",
    "zoneIntervention": "TOMBOUCTOU, GAO, KIDAL, TAOUDENIT, MENAKA , BAMAKO, SIKASSO, KOULIKORO, SEGOU ET MOPTI",
    "responsable": "Mohamed  ANSARI"
  },
  {
    "name": "AADECOM",
    "fullName": "Association d'Appui au Développement communautaire du Mali",
    "dateCreation": "2014-02-07 00:00:00",
    "accordCadre": "1274",
    "adresse": "Bamako",
    "zoneIntervention": "Kayes, Koulikoro, Sikasso, Ségou, Tombouctou, Gao et district de Bamako",
    "responsable": "Haidara Hamadoun "
  },
  {
    "name": "AADI",
    "fullName": "Association pour l'Appui au Développement",
    "dateCreation": "2002-09-11 00:00:00",
    "accordCadre": "0889/1574",
    "adresse": "DJENNE",
    "zoneIntervention": "DJENNE",
    "responsable": "Djenepo Kadidia"
  },
  {
    "name": "AAFDRK",
    "fullName": "Association d'Appui aux Femmes Démunies",
    "dateCreation": "2016-11-09 00:00:00",
    "accordCadre": "1395",
    "adresse": "Kidal",
    "zoneIntervention": "Kidal",
    "responsable": "Amewey Mohamed Ag"
  },
  {
    "name": "AAKLMFE",
    "fullName": "Association Ambe Kunko Pour la Lutte Contre la Maltraitance des Femmes et Des Enfants",
    "dateCreation": "2021-04-22 00:00:00",
    "accordCadre": "1738",
    "adresse": "Sogoniko, Bamako",
    "zoneIntervention": " Kayes  ,Koulikoro ,Sikasso ,Ségou ,Mopti et le district de Bamako",
    "responsable": "Dicko Moine"
  },
  {
    "name": "ACESEM",
    "fullName": " Association Contre l'exploitation Sexuelle des Enfants au Mali",
    "dateCreation": "2018-12-05 00:00:00",
    "accordCadre": "39",
    "adresse": "bamako",
    "zoneIntervention": "Bamako",
    "responsable": " Maiga  Boubacar "
  },
  {
    "name": "ADAIV",
    "fullName": "Association pour le Développement et d'Appui aux Initiatives Villageoises",
    "dateCreation": "2019-04-08 00:00:00",
    "accordCadre": "1576",
    "adresse": "Quartier Alphaou, GOUNDAM",
    "zoneIntervention": " Kayes, Ségou, Mopti, Tombouctou, Kidal, Taoudéni, Ménaka et le district de Bamako",
    "responsable": " Maiga Abdou "
  },
  {
    "name": "ADCOPS",
    "fullName": "Action pour le Développement et Contre la Pauvreté au Sahel",
    "dateCreation": "2008-05-13 00:00:00",
    "accordCadre": "0534/001017",
    "adresse": "boulkassoumbougou, Bamako",
    "zoneIntervention": "Tout le Mali",
    "responsable": "Guiteye  Alidji H "
  },
  {
    "name": "ADD-MALI",
    "fullName": "Aide au Développement Durable",
    "dateCreation": "2018-05-04 00:00:00",
    "accordCadre": "001487/01976",
    "adresse": "Kidal",
    "zoneIntervention": "Mopti, Tombouctou, Gao, Kidal et district de Bamako",
    "responsable": " Biga Amadou "
  },
  {
    "name": "ADDF-MALI",
    "fullName": "Association de Développement Durable des Femmes au Mali",
    "dateCreation": "2016-08-31 00:00:00",
    "accordCadre": "1388",
    "adresse": "Bamako",
    "zoneIntervention": "Koulikoro, Ségou, Mopti, Sikasso et le district de Bamako",
    "responsable": "Mme Kane  Kane Fatimata Kane "
  },
  {
    "name": "ADENORD",
    "fullName": "Association  pour le Développement du Nord",
    "dateCreation": "1992-04-01 00:00:00",
    "accordCadre": "0724/001080",
    "adresse": "Tombouctou",
    "zoneIntervention": "Tombouctou",
    "responsable": "Maiga Hamza "
  },
  {
    "name": "ADIL-MALI",
    "fullName": "Association pour le Développement des Initiatives Locales au Mali",
    "dateCreation": "2018-04-04 00:00:00",
    "accordCadre": "1488",
    "adresse": "Tombouctou",
    "zoneIntervention": "Tombouctou",
    "responsable": " Arby Dramane"
  },
  {
    "name": "ADIC-SAHEL",
    "fullName": "Association Pour le Développement des Initiatives Communautaires au Sahel",
    "dateCreation": "2008-07-14 00:00:00",
    "accordCadre": "0711/2148",
    "adresse": "TOMBOUCTOU",
    "zoneIntervention": "Tombouctou, Gao, Mopti, Segou",
    "responsable": "Aliou  MAHAMANE"
  },
  {
    "name": "AFDP",
    "fullName": "Association Malienne des Droits de L'Homme",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "Bamako",
    "zoneIntervention": "Gao, Segou, Bamako, Koulikoro",
    "responsable": "Biga Amadou "
  },
  {
    "name": "AJDM",
    "fullName": "Association Jeunesse et Développement du Mali",
    "dateCreation": "1995",
    "accordCadre": "01176/0751",
    "adresse": "Bamako",
    "zoneIntervention": "Bamako",
    "responsable": "Doumbia     Somah"
  },
  {
    "name": "RED",
    "fullName": "RED",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "AMADE PELCODE",
    "fullName": "Association Malienne pour le Développement, la Protection de L'Environnement et la Lutte Contre la Désertification",
    "dateCreation": "2008-05-21 00:00:00",
    "accordCadre": "0571/000762",
    "adresse": "Bamako",
    "zoneIntervention": "Gao, Tombouctou, Segou, Koulikoro et District de Bamako",
    "responsable": " F Maiga Mouhamdou "
  },
  {
    "name": "AMSODE",
    "fullName": "Association Malienne pour la Solidarité et le Développement",
    "dateCreation": "2018-03-30 00:00:00",
    "accordCadre": "1480",
    "adresse": "Tombouctou",
    "zoneIntervention": "Mopti, Tombouctou, Gao, Kidal et district de Bamako",
    "responsable": "Diallo Moussa Abba "
  },
  {
    "name": "APEP",
    "fullName": "Agence pour la Promotion des Entreprises Privées",
    "dateCreation": "2017-01-15 00:00:00",
    "accordCadre": "1418",
    "adresse": "Bamako",
    "zoneIntervention": "Bamako",
    "responsable": "Kansaye  Abdoulaye  "
  },
  {
    "name": "APHALOG",
    "fullName": "Association Libre pour la Promotion le L'habitat et du Logement",
    "dateCreation": "2008-05-02 00:00:00",
    "accordCadre": "0494/0130",
    "adresse": "Bamako",
    "zoneIntervention": "Koulikoro, Ségou, Sikasso, Mopti, Bandigara, Koutiala et district de Bamako",
    "responsable": "Diakité Seydou "
  },
  {
    "name": "APSM",
    "fullName": "Association Protestante de la Santé au Mali",
    "dateCreation": "2008-01-14 00:00:00",
    "accordCadre": "0196/001394",
    "adresse": "Bamako",
    "zoneIntervention": "Ensemble du territoire du Mali",
    "responsable": " Diallo Ali "
  },
  {
    "name": "APSN",
    "fullName": "Association pour le Service de la Nation",
    "dateCreation": "2022-07-13 00:00:00",
    "accordCadre": "1917",
    "adresse": "Faladiè Sokoro",
    "zoneIntervention": "Bamako, Koulikoro, Ségou,  Kayes, Sikasso, Gao,Tombouctou, Kidal et Menaka",
    "responsable": "Ali DIALLO"
  },
  {
    "name": "ARDIL",
    "fullName": "Action Recherches pour le Développement des Initiatives Locales",
    "dateCreation": "2008-01-28 00:00:00",
    "accordCadre": "0139/00032",
    "adresse": "Tombouctou",
    "zoneIntervention": "Tombouctou",
    "responsable": "Maiga Abdel Hamid "
  },
  {
    "name": "ASDAP",
    "fullName": "Association de Soutien au Développement des Activités de Population",
    "dateCreation": "2008-03-17 00:00:00",
    "accordCadre": "0333/000424",
    "adresse": "Bamako",
    "zoneIntervention": "Koulikoro, Segou, Mopti, Sikasso, Kayes, le district de Bamako",
    "responsable": "  Touré Traoré Fatoumata  "
  },
  {
    "name": "ASPODLCE",
    "fullName": "Association de Soutien aux Populations Démunies et de Lutte Contre l'Exclusion",
    "dateCreation": "2012-02-12 00:00:00",
    "accordCadre": "6342",
    "adresse": "Tombouctou",
    "zoneIntervention": "Ensemble du territoire du Mali",
    "responsable": " Ould Baba  Mohamed Lamine "
  },
  {
    "name": "ASREF",
    "fullName": "Association de Soutien aux Revenus et  Economies Fragiles",
    "dateCreation": "2016-03-11 00:00:00",
    "accordCadre": "1395",
    "adresse": "Bamako",
    "zoneIntervention": "Kidal, Gao, Menaka, Tombouctou",
    "responsable": "Ag Amewey Mohamed "
  },
  {
    "name": "ASSADDEC",
    "fullName": "Association Sahélienne d'Appui au éeveloppement Décentralisé",
    "dateCreation": "2008-06-05 00:00:00",
    "accordCadre": "0167/1634",
    "adresse": "Kidal",
    "zoneIntervention": "Kidal",
    "responsable": "Walet  Akli  Bayano "
  },
  {
    "name": "ASSAHSSAL",
    "fullName": "ASSAHSSAL",
    "dateCreation": "2014-06-03 00:00:00",
    "accordCadre": "1306",
    "adresse": "Kidal",
    "zoneIntervention": "Tombouctou, Gao, Kidal ET District de Bamako",
    "responsable": "Ag Igasten Gamni "
  },
  {
    "name": "ASSOPROFEN",
    "fullName": " Association pour la Promotion de La Femme et de L’Enfant",
    "dateCreation": "2008-02-26 00:00:00",
    "accordCadre": "0261/002095",
    "adresse": "Bamako",
    "zoneIntervention": "Koulikoro, Sikasso, Mopti, District de Bamako",
    "responsable": " Samaké Lala"
  },
  {
    "name": "AVENIR ",
    "fullName": " AVENIR ",
    "dateCreation": "2014-10-15 00:00:00",
    "accordCadre": "1534",
    "adresse": "Sotuba ACI près de la protection civile Bamako",
    "zoneIntervention": "Kidal, Ménaka, Gao, Tombouctou, Mopti, Ségou et district de Bamako",
    "responsable": "Moussa  KONE"
  },
  {
    "name": "AV.E.S",
    "fullName": "Avenir-Enfance- Sahel",
    "dateCreation": "2002-06-16 00:00:00",
    "accordCadre": "0634/MATCL - DNI",
    "adresse": "Bamako, Hamdallaye ACI 2000, Nord Ouest de l'hôtel Akakos Bouna",
    "zoneIntervention": "Kita, Koulikoro, Ségou, Mopti et Douentza",
    "responsable": "Mohamed Sidibé"
  },
  {
    "name": "AZHAR",
    "fullName": "Association Azhar",
    "dateCreation": "2008-01-28 00:00:00",
    "accordCadre": "0135/001633",
    "adresse": "Kidal",
    "zoneIntervention": "Kidal, Gao",
    "responsable": "MAIGA YOUSSOUF "
  },
  {
    "name": "CAEB",
    "fullName": "Conseil et Appui pour l'Education à la Base",
    "dateCreation": "2008-10-20 00:00:00",
    "accordCadre": "0914/0529",
    "adresse": "Bamako",
    "zoneIntervention": "Koulikoro, Sikasso et district de Bamako",
    "responsable": "Traoré Gahoussou "
  },
  {
    "name": "CARD",
    "fullName": " Carrefour Développement",
    "dateCreation": "2008-02-14 00:00:00",
    "accordCadre": "0209/000491",
    "adresse": "Bamako",
    "zoneIntervention": "Koulikoro, Ségou, Gao,  Mopti et district de Bamako",
    "responsable": "Maiga Diabirou"
  },
  {
    "name": "CASE-SAHEL",
    "fullName": "Communauté- Agriculture-Santé- Education au Sahel",
    "dateCreation": "07-Avr 2015",
    "accordCadre": "accord cadre signe le 07 avril 2015 sous le numero 001491 et regie par la loi n*04-038 du 5 aout 2004 relative aux associations du Mali",
    "adresse": "Bamako",
    "zoneIntervention": "Bamako, Segou, Koulikoro, Koutiala, Dioila et kayes",
    "responsable": "Michel Dembele"
  },
  {
    "name": "CERCA",
    "fullName": "Cadre d’Etude de Recherche et de Concertation pour Agir",
    "dateCreation": "2014-05-07 00:00:00",
    "accordCadre": "1300",
    "adresse": "Bamako",
    "zoneIntervention": "Kayes, Koulikoro, Ségou, Mopti, Tombouctou, Gao, Kidal Taoudéni, Ménaka",
    "responsable": " Ag  Ahmedou  Koina "
  },
  {
    "name": "CRADI",
    "fullName": "Cercle de Recherche et d'Appui pour le Développement",
    "dateCreation": "2021-06-16 00:00:00",
    "accordCadre": "1765",
    "adresse": "Kidak",
    "zoneIntervention": "Koulikoro, Mopti, Tombouctou, Kidal, Taoudeni, Gao, Menaka et le District de Bamako",
    "responsable": " Ag Jiddou Acheich "
  },
  {
    "name": "DDRNAS",
    "fullName": "DDRNAS",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "Gao",
    "zoneIntervention": "Gao, Menaka, Mopti",
    "responsable": " O Toure AbdoulKadri"
  },
  {
    "name": "EFFAD",
    "fullName": "Association Eduquer, Former les Femmes, un Appui au Développement",
    "dateCreation": "2008-03-17 00:00:00",
    "accordCadre": "0344/001866",
    "adresse": "Kidal",
    "zoneIntervention": "Tout le territoire du Mali",
    "responsable": "Kouyaté  Adama "
  },
  {
    "name": "ENDA-MALI",
    "fullName": "Environnement et Développement du Tiers-Monde",
    "dateCreation": "2007-12-03 00:00:00",
    "accordCadre": "0045/000583",
    "adresse": "Bamako",
    "zoneIntervention": "Tout le Mali",
    "responsable": " Coulibaly Soumana "
  },
  {
    "name": "ERADD",
    "fullName": "Equipe de Recherche-Action pour le Développement Durable",
    "dateCreation": "2016-12-12 00:00:00",
    "accordCadre": "7432",
    "adresse": "Bamako",
    "zoneIntervention": "Kidal, Gao, Ménaka, Tessalit, Mopti et District de Bamako",
    "responsable": " Konaté Ousmane Famagan "
  },
  {
    "name": "FORJEC",
    "fullName": "Forum de la Jeunesse pour le Changement",
    "dateCreation": "2021-12-22 00:00:00",
    "accordCadre": "1852",
    "adresse": "Bamako",
    "zoneIntervention": "Sikasso, Koulikoro, Mopti, Tombouctou, Gao, Menaka et le District de Bamako",
    "responsable": " H.DIEPKILE ABOUBAKAR "
  },
  {
    "name": "GREFFA",
    "fullName": " Groupe de Recherche, d'Etude et de Formation , Femme-Action",
    "dateCreation": "2007-12-14 00:00:00",
    "accordCadre": "0072/000645",
    "adresse": "GAO",
    "zoneIntervention": "GAO",
    "responsable": " Touré Fatoumata Aliou "
  },
  {
    "name": "IMADEL",
    "fullName": "Intiative Malienne d'Appui au Développement Local",
    "dateCreation": "2010-10-12 00:00:00",
    "accordCadre": "1138",
    "adresse": "Bamako",
    "zoneIntervention": "Ensemble du Territoire National",
    "responsable": " Diallo  Mamoudou Abdoulaye "
  },
  {
    "name": "OMAES",
    "fullName": "Oeuvre Malienne pour l'Aide de L'Enfance au Sahel",
    "dateCreation": "1984-12-21 00:00:00",
    "accordCadre": "104",
    "adresse": "Bamako",
    "zoneIntervention": "Mopti, Koulikoro, Tombouctou et  District de Bamako",
    "responsable": " Traore  Bréhima "
  },
  {
    "name": "OPEN-MALI",
    "fullName": "Association Oui pour une Enfance Noble Mali",
    "dateCreation": "Association Oui Pour un Enfance Noble Mali",
    "accordCadre": "1590",
    "adresse": "Bamako",
    "zoneIntervention": "Kayes, Koulikoro, Sikasso, Ségou, Tombouctou, gao, Ménaka, Taoudeni, Mopti, district de Bamako",
    "responsable": "Sissoko Louis Check "
  },
  {
    "name": "PADI",
    "fullName": "Plate Forme d'Initiative d'Expertise en Education et d'Appui à  la Promotion des Collectivités Décentralisées",
    "dateCreation": "2008-11-04 00:00:00",
    "accordCadre": "0947/001719",
    "adresse": " Ségou",
    "zoneIntervention": "Ensemble du Mali",
    "responsable": "Kampo Modibo"
  },
  {
    "name": "RAC",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "STOP-SAHEL",
    "fullName": "Association Malienne pour la Protection de l'Environement",
    "dateCreation": "2024-04-15 00:00:00",
    "accordCadre": "0422/000114",
    "adresse": "Bamako",
    "zoneIntervention": "Tout le Mali",
    "responsable": "Samassekou Ousmane Sory "
  },
  {
    "name": "TASSAGHT",
    "fullName": "TASSAGHT",
    "dateCreation": "2008-06-30 00:00:00",
    "accordCadre": "0162/000077",
    "adresse": "TASSAGHT",
    "zoneIntervention": "Tombouctou,Gao, Ménaka, Mopti, Douentza, Bandiagara, Ségou, Sikasso, Koulikoro, Bamako",
    "responsable": " Aziz Abdoul"
  },
  {
    "name": "TP",
    "fullName": "Think Peace ",
    "dateCreation": "15/02/2016  28/08/2019",
    "accordCadre": "1605",
    "adresse": "Hamdallaye ACI 2000, Près de Radisson Blu, derrière la Clinique Diafounou, Rue: 409, Porte : 57",
    "zoneIntervention": "19 régions plus le District de Bamako",
    "responsable": "Abdou Kola  BOCOUM"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "WINDILA KONDA",
    "fullName": "Windila Konda",
    "dateCreation": "2010-04-10 00:00:00",
    "accordCadre": "1153",
    "adresse": "Tombouctou",
    "zoneIntervention": "Tombouctou",
    "responsable": " Maiga  Aly Arboncana  "
  },
  {
    "name": "WK",
    "fullName": "ONG WOIYO Kondeye",
    "dateCreation": "en 1994",
    "accordCadre": "0258/000509 ",
    "adresse": "Faladjie Sema, Rue 840, Porte 28141",
    "zoneIntervention": "Gao,  Douantza, Bandiagara, Mopti, Bamako, Tombouctou, Koulikoro, ",
    "responsable": "Mme Oumou TOURE"
  },
  {
    "name": "RAC",
    "fullName": "Le Reseau D'Appui et de Conseils aux Initiatives des Artisans",
    "dateCreation": "2008-10-20 00:00:00",
    "accordCadre": "0915/001621",
    "adresse": "Bamako",
    "zoneIntervention": "Ensemble du territoire du Mali",
    "responsable": " Touré Fatoumata "
  },
  {
    "name": "TILALTE",
    "fullName": "TILALTE",
    "dateCreation": "2022-07-29 00:00:00",
    "accordCadre": "1920",
    "adresse": "Tombouctou",
    "zoneIntervention": "Mopti, Gao, Tombouctou, Menaka, Taoudenit et district de Bamako",
    "responsable": "Cissé Mohamed "
  },
  {
    "name": "Action Mopti",
    "fullName": "Action Mopti",
    "dateCreation": "2008-07-04 00:00:00",
    "accordCadre": "0657/0150",
    "adresse": "Mopti",
    "zoneIntervention": "",
    "responsable": "Maiga Abdoul Karim"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "AMPDR",
    "fullName": "Association pour le Développement Rural",
    "dateCreation": "2008-02-20 00:00:00",
    "accordCadre": "0215/000600",
    "adresse": "Bamako",
    "zoneIntervention": "Ensemble du territoire du Mali",
    "responsable": "Ouattara Gaoussou Amadou"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "GARI",
    "fullName": "Groupe des Artisants Ruraux d'Intédeyene",
    "dateCreation": "2004-11-02 00:00:00",
    "accordCadre": "0004/000183",
    "adresse": "Menaka",
    "zoneIntervention": "Tombouctou, Gao, Kidal et le district de Bamako",
    "responsable": " Ibrahim AG"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "NOVA-MALI",
    "fullName": "Association NOVA-MALI",
    "dateCreation": "2020-08-21 00:00:00",
    "accordCadre": "1675",
    "adresse": "Gao",
    "zoneIntervention": "Kays, Koulikoro, Mopti, Segou, Tombouctou, Gao, Kidal et le district de Bamako",
    "responsable": "Almahamoudou Ibrahim "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "Talilt/Aide",
    "fullName": "Talilt/Aide",
    "dateCreation": "2023-09-27 00:00:00",
    "accordCadre": "2017",
    "adresse": "Kidal",
    "zoneIntervention": "Mopti, Tombouctou, Gao, Kidal, Ménaka et le district de Bamako",
    "responsable": "Najim Mama Walet"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "AJAAH",
    "fullName": "Association des Jeunes pour l'Assistance d'Aide Humanitaire-Mali",
    "dateCreation": "2020-05-15 00:00:00",
    "accordCadre": "1657",
    "adresse": "Bamako",
    "zoneIntervention": "Koulikoro, Mopti, Segou, Sikasso, Gao, Kidal et le district de Bamako",
    "responsable": "Sidibé Sory I"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "A.SORO",
    "fullName": "Association A.SORO",
    "dateCreation": "2018-12-12 00:00:00",
    "accordCadre": "1542",
    "adresse": "Bamako",
    "zoneIntervention": "Kays, Koulikororo, Sikasso, Segou, Mopti et le district de Bamako",
    "responsable": "Coulibaly  Mariam"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "ADID",
    "fullName": "Association pour le Developpement Intégré et Durable",
    "dateCreation": "2018-11-22 00:00:00",
    "accordCadre": "1532",
    "adresse": "Bamako",
    "zoneIntervention": "Kays, Koulicoro, Sikasso, Kidal et le district de Bamako",
    "responsable": "Samake Sidy qMohmed"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "AFAR",
    "fullName": "Action pour la Formation et l'auto-promotion Rurale",
    "dateCreation": "2007-12-10 00:00:00",
    "accordCadre": "0062/000547",
    "adresse": "Bamako",
    "zoneIntervention": "Toutes les regions du Mali",
    "responsable": "Cissé Amadou A"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "AGK",
    "fullName": "Association GUNA-KAANEY",
    "dateCreation": "2023-08-29 00:00:00",
    "accordCadre": "2011",
    "adresse": "Daka Djerel",
    "zoneIntervention": "Mopti, Menaka, Gao, Tombouctou,Taoudenit et le district de Bamako",
    "responsable": "Narba Amadou"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "AHDI-NORD-SUD SAHEL",
    "fullName": "Action Humanitaire pour les Initiatives de Développement Nord-Sud au Sahel",
    "dateCreation": "2023-10-23 00:00:00",
    "accordCadre": "2024",
    "adresse": "GOUNDAM",
    "zoneIntervention": "Mopti, Menaka, Gao, Tombouctou,Taoudenit et le district de Bamako",
    "responsable": "Iknad Mohmed AG"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "AAPD",
    "fullName": "Association ARC-EN CIEL pour le Deloppement",
    "dateCreation": "2024-05-10 00:00:00",
    "accordCadre": "2073",
    "adresse": "Bamako",
    "zoneIntervention": "Kays, Koulikororo, Sikasso, Segou, Mopti, Koutiala, Kita , Gao et le district de Bamako",
    "responsable": "Mariko  Fanta"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "ASSALWAG",
    "fullName": "Association AWAAREY de GABERO",
    "dateCreation": "2018-10-16 00:00:00",
    "accordCadre": "1504",
    "adresse": "Bamako",
    "zoneIntervention": "Mopti, Menaka, Gao, Tombouctou,Taoudenit et le district de Bamako",
    "responsable": "Sidibe Youssoufa dit M"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "ATDED",
    "fullName": "Association Actions Tartit pour le Développement Durable",
    "dateCreation": "2018-11-01 00:00:00",
    "accordCadre": "1509",
    "adresse": "Gao",
    "zoneIntervention": "Tombouctou, Gao, Kidal et Tessalit",
    "responsable": "Maiga  Mama Youssouf"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "CREDEL",
    "fullName": "Centre de recherche et d'expertise pour le développement local",
    "dateCreation": "2021-05-14 00:00:00",
    "accordCadre": "1747",
    "adresse": "Bamako",
    "zoneIntervention": "Kays, Segou, Mopti, Menaka, Nioro, Gao, Tombouctou, Kidal, Menaka, San, Koutiala et le district de Bamako",
    "responsable": "Traore Abdoulaye  "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "DHA",
    "fullName": "Développement Holistique Africa",
    "dateCreation": "2008-03-17 00:00:00",
    "accordCadre": "0336/001307",
    "adresse": "Bamako",
    "zoneIntervention": "Toute les regions du Mali et district de Bamako",
    "responsable": "Togo Amadou"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "AJCET",
    "fullName": "Association des Jeunes Contre l'Enrolement dans le terrorisme",
    "dateCreation": "2021-07-08 00:00:00",
    "accordCadre": "1770",
    "adresse": "Bamako",
    "zoneIntervention": "Kays, Koulikororo, Sikasso, Segou, Mopti, Menako, Tombouctou, Taoudenit, Kita , Gao et le district de Bamako",
    "responsable": "Cissé Amadou dit Samba"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "G.Force",
    "fullName": "Groupe de Formation, Consultation et Etude",
    "dateCreation": "2008-01-28 00:00:00",
    "accordCadre": "0145/001978",
    "adresse": "Bamako",
    "zoneIntervention": "Tout le territoire national",
    "responsable": "Diarra Nouhoum"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "GRIDev",
    "fullName": "Association Groupe de Reflexion pour les Initiativesde Développement",
    "dateCreation": "2019-12-23 00:00:00",
    "accordCadre": "1619",
    "adresse": "Gao",
    "zoneIntervention": "Kays, Koulicoro, Sikasso, Segou, Gao, Tombouctou, Mopti et le district de Bamako",
    "responsable": "Maiga Ibrahim Izéthiégouma"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "HDS",
    "fullName": "Harmonie du Développement au Sahel",
    "dateCreation": "2008-07-14 00:00:00",
    "accordCadre": "0692/0243",
    "adresse": "Mopti",
    "zoneIntervention": "Ensemble du territoire du Mali",
    "responsable": "Sagara Justin"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "IMANEH MALI",
    "fullName": "Association pour la Promotion de la Santé de la Mère et de l'enfant",
    "dateCreation": "2011-01-06 00:00:00",
    "accordCadre": "",
    "adresse": "Bamako",
    "zoneIntervention": "Ensemble du territoire du Mali",
    "responsable": "Keita  Kadiatou"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "INFO PLUS",
    "fullName": "INFA PLUSINFA PLUS",
    "dateCreation": "2008-08-22 00:00:00",
    "accordCadre": "0798/002004",
    "adresse": "Bamako",
    "zoneIntervention": "Koulicoro, Gao, Tombouctou, Sikasso, Segou et le district de Bamako",
    "responsable": "Hamma Bintou Wallet"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "NEMADEV",
    "fullName": "Association NMA-DEVELOPPEMENT",
    "dateCreation": "2023-03-10 00:00:00",
    "accordCadre": "1978",
    "adresse": "Bamako",
    "zoneIntervention": "ays, Koulikoro,Sikasso, Mopti, Segou, Tombouctou,Gao, Kidal, Menaka et le district de Bamako",
    "responsable": "Dougouna  Seydou "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "OMDDS",
    "fullName": "Organisation Malienne pour le Développement Durable au Sahel",
    "dateCreation": "2024-02-05 00:00:00",
    "accordCadre": "2047",
    "adresse": "Doentza",
    "zoneIntervention": "Koulikoro, Mopti, Segou, Sikasso, Gao, Kidal, menaka et le district de Bamako",
    "responsable": "Cissé Hamadoun "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "PADL",
    "fullName": "Association pour la Promotion et l'Apui au Développement",
    "dateCreation": "2022-10-20 00:00:00",
    "accordCadre": "1950",
    "adresse": "Bamako",
    "zoneIntervention": "Mopti, Tombouctou, Gao, Kidal, Taoudenit, Koutiala, San, Bougouni et le district de Bamako",
    "responsable": "Traore Dédeou"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "SAGOPS",
    "fullName": "Association Saheliennes pour la Justice, la Gouvernance, la Paix, et la sécurité",
    "dateCreation": "2022-09-14 00:00:00",
    "accordCadre": "1936",
    "adresse": "Kidal",
    "zoneIntervention": "ays,Sikasso, Mopti, Segou, Tombouctou,Gao, Kidal et le district de Bamako",
    "responsable": "Toure Nana Alassane"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "SAIB",
    "fullName": "Sahélienne d'Apui aux Initiatives de Base",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "Bamako",
    "zoneIntervention": "Ensemble du territoire du Mali",
    "responsable": "Cissé Amadou"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "SOS",
    "fullName": "Save Our Sahel",
    "dateCreation": "2023-10-23 00:00:00",
    "accordCadre": "2025",
    "adresse": "Menaka",
    "zoneIntervention": "Kays, Koulikoro, Sikasso, Segou, Mopti, Tombouctou, Gao, Kidal, Douentza, Nioro, Nara, Bandiangara et le district de Bamako",
    "responsable": "Abdoulahi Albacher AG"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "SEAD",
    "fullName": "Sahel Etude Action pour le Développement",
    "dateCreation": "2007-12-03 00:00:00",
    "accordCadre": "0035/000122",
    "adresse": "Gao",
    "zoneIntervention": "Gao",
    "responsable": "Dicko Baba Abdou"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "Daouna",
    "fullName": "Association Tassaq Daouna",
    "dateCreation": "2023-03-31 00:00:00",
    "accordCadre": "1979",
    "adresse": "Tombouctou",
    "zoneIntervention": "Mopti, Tombouctou, Gao, Ménaka, Kidal et district de Bamako",
    "responsable": "Mohamed Mohamed AG Aboubacrine"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "ATC",
    "fullName": "Association TILE KOURA pour la Promotion des Femmes Rurales",
    "dateCreation": "2023-07-03 00:00:00",
    "accordCadre": "1998",
    "adresse": "",
    "zoneIntervention": "Kays, Koulikoro, Sikasso, Ségou, Mopti, Tombouctou, Gao, Kidal, Ménaka et le district de Bamako",
    "responsable": "Marie Dénou"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "Almoubaraka",
    "fullName": "Association ALMOUBARAKA",
    "dateCreation": "2023-09-27 00:00:00",
    "accordCadre": "2022",
    "adresse": "Gandé Tama (Youwarou)",
    "zoneIntervention": "Koulikoro, Sikasso, Ségou, Mopti, Tombouctou, Gao, Kidal, Ménaka et le district de Bamako",
    "responsable": "Cissé Oumar"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "A.S.EM",
    "fullName": "Associel Emergent",
    "dateCreation": "2025-04-17 00:00:00",
    "accordCadre": "2060",
    "adresse": "Kati Fouga",
    "zoneIntervention": "Kays, Koulikoro, Sikasso, Ségou, Mopti, Tombouctou, Gao, Kidal, Ménaka et le district de Bamako",
    "responsable": "Guindo Halimatou"
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "TDA",
    "fullName": "Terre Douce d'Afrique ",
    "dateCreation": "2017-10-11 00:00:00",
    "accordCadre": "1452",
    "adresse": "Bamako",
    "zoneIntervention": "Kayes, Kkoro, Sikasso, Mopti, et district de Bamako",
    "responsable": "Sékou Diarra"
  },
  {
    "name": "CRADE",
    "fullName": "Cabinet de Recherches Actions pour le Developpement Endogene",
    "dateCreation": "2008-01-28 00:00:00",
    "accordCadre": "0150/000214",
    "adresse": "Bamako",
    "zoneIntervention": "Sur toute l'étendue du territoire national",
    "responsable": "Abdoulkadri ZEINOU"
  },
  {
    "name": "UAVES",
    "fullName": "Union pour un Avenir Ecologique et Solidaire",
    "dateCreation": "2009-09-01 00:00:00",
    "accordCadre": "1095",
    "adresse": "Gao",
    "zoneIntervention": "Sur toute l'étendue du territoire national",
    "responsable": "Adama Tiegoum"
  },
  {
    "name": "TEKELTTE",
    "fullName": "Association TEKELTTE de Tessalit",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "Tessalit",
    "zoneIntervention": "Gao, Tombouctou, Kidal, Taoudéni",
    "responsable": "Sidigaly  Ag Ahmed"
  },
  {
    "name": "SELLE",
    "fullName": "Association SELLE",
    "dateCreation": "2008-01-07 00:00:00",
    "accordCadre": "0098/000752",
    "adresse": "Bamako",
    "zoneIntervention": "Tombouctou, Gao, Kidal",
    "responsable": "Fatoumata  Touré"
  },
  {
    "name": "ADM",
    "fullName": "Action pour le Développementrt du Mali",
    "dateCreation": "2021-03-30 00:00:00",
    "accordCadre": "1733",
    "adresse": "Bamako",
    "zoneIntervention": "",
    "responsable": "Nouhoum  Diarra"
  },
  {
    "name": "ATK",
    "fullName": "Association Tanfo de Kalanda",
    "dateCreation": "2008-01-28 00:00:00",
    "accordCadre": "140/2002",
    "adresse": "Bamako",
    "zoneIntervention": "Toute l'étendue du territoire national",
    "responsable": "Abdellahi Ag Mohamedoun"
  },
  {
    "name": "NOHO",
    "fullName": "Nouveau horizon",
    "dateCreation": "03 Dcembre 2017",
    "accordCadre": "0038/001193",
    "adresse": "",
    "zoneIntervention": "Toute l'étendue du territoire national",
    "responsable": "Mohomodou Atayabou"
  },
  {
    "name": "GRAFODEL",
    "fullName": "Groupe de Recherches Actions Formation pour le Développement Local au Mali",
    "dateCreation": "2024-01-15 00:00:00",
    "accordCadre": "2045",
    "adresse": "",
    "zoneIntervention": "Kayes, Kkoro, Sikasso, Ségou, Mopti, Tombouctou, Gao, Kidal, Ménaka, Douentza, San, Bandiagara, Taoudeni et le dictrict de Bamako",
    "responsable": "Ousmane  Boiré"
  },
  {
    "name": "CCC",
    "fullName": "Collectif Cri de Cœur",
    "dateCreation": "2019-06-13 00:00:00",
    "accordCadre": "1581",
    "adresse": "",
    "zoneIntervention": " Kkoro, Sikasso,  Mopti, Tombouctou, Gao, Kidal, Ménaka Taoudeni et le dictrict de Bamako",
    "responsable": "Almahadi Cissé"
  },
  {
    "name": "ADII Mamli",
    "fullName": "Association pour le Développement inclusif et intégral",
    "dateCreation": "2024-04-17 00:00:00",
    "accordCadre": "2667",
    "adresse": "",
    "zoneIntervention": "Kayes. ✓ Sikasso. ✓ Ségou. ✓ Mopti. ✓ Gao. ✓ Tombouctou. ✓ Taoudenni. ✓ Ménaka. ✓ Kidal. ✓ District de Bamako.",
    "responsable": "Achou Dicko"
  },
  {
    "name": "imidierar",
    "fullName": "imidierar (Les vulnérables)",
    "dateCreation": "29 12 2016",
    "accordCadre": "1401",
    "adresse": "",
    "zoneIntervention": "région de kidal",
    "responsable": "Checkna Diallo"
  },
  {
    "name": "Iamaleh",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  },
  {
    "name": "",
    "fullName": "",
    "dateCreation": "",
    "accordCadre": "",
    "adresse": "",
    "zoneIntervention": "",
    "responsable": " "
  }
];

export default membersData;