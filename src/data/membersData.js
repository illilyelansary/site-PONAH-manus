const membersData = [
  {
    "nom": "Association Malienne pour la Survie au Sahel",
    "acronyme": "AMSS",
    "date_creation": "1991-09-21 00:00:00",
    "accord_cadre": "0026/0286",
    "adresse": "Tombouctou, route de kabara ,face BIM S.A",
    "domaines": "sécurité alimentaire, éducation, gouvernance, relèvement économique, approvisionnement en eau potable et assainissement, assistance d’urgence, cohésion sociale, protection, sante, gestion des ressources naturelles et la réduction de la malnutrition, autonomisation des femmes et les jeunes pour la paix et le développement au sahel",
    "zones": " Kidal, Menaka, Gao, Tombouctou, Mopti, Segou, Sikasso, Koulikoro et district de Bamako",
    "responsable": "Wakina"
  },
  {
    "nom": "ONG EFES N'TAMADRITE",
    "acronyme": "ONG EFES N'TAMADRITE",
    "date_creation": "26 fevrier 2016",
    "accord_cadre": 1364,
    "adresse": " Kidal",
    "domaines": "Santé, Formation Professionnelle, Sécurité alimentaire,  Environement, wash, éducation",
    "zones": "Kidal, Gao, Menaka",
    "responsable": " Ag Acherif"
  },
  {
    "nom": " Action Santé Population",
    "acronyme": "WALE",
    "date_creation": "1997-06-19 00:00:00",
    "accord_cadre": "AC  N° 0455/000909 du 15/04/2008, Avenant N° 3323/MATCL du 22/12/2010",
    "adresse": "Segou",
    "domaines": "Santé, Nutrition, Paix et Réconciliation, Accès à la justice",
    "zones": "Kayes, Ségou, Koulikoro, Sikasso, Tombouctou",
    "responsable": "Soumontera"
  },
  {
    "nom": "Appui pour la Scolarisation et le Développement des Enfants et des Femmes pour une Meilleure Integration Nationale",
    "acronyme": "ASDEMIN",
    "date_creation": "2021-02-15 00:00:00",
    "accord_cadre": 1710,
    "adresse": "Etambar Kidal",
    "domaines": "Education, Autonomisation des Femmes et Environnement ",
    "zones": "Kidal, Gao, Tombouctou, Mopti, Segou, Menaka, Bamako",
    "responsable": "Walet ouefan "
  },
  {
    "nom": "Association Malienne pour la Promotion  du Sahel",
    "acronyme": "AMAPROS",
    "date_creation": "1989-04-25 00:00:00",
    "accord_cadre": "Récépissé N° : 360 et l' accord cadre Numéro: 0160/00086",
    "adresse": "Bamako Sébénicoro à 500M du pont Woyowayanko en face de la Résidence de l'ancien Président IBK.",
    "domaines": "Education, Protection,  Hydraulique villageoise, hygiène et assainissement (Latrines),  Environnement (Gestion des Ressources Naturelles, Changement climatique…), Agriculture Durable, Micro finance rurale, Droits humains (Gouvernance et Leadership Féminin et jeune, Protection et Défense des Droits de l’Enfant…), Santé (Santé de la reproduction /VIH SIDA, Lutte contre le Paludisme, Nutrition etc.), Aide d’Urgence (appui en vivres et non vivres, santé),  Elevage (culture fourragère ; embouche),  Sécurité alimentaire, Renforcement des capacités des Organisations Paysannes, Humanitaire : urgence, cohésion sociale, insertion sociale.",
    "zones": "Koulikoro, Sikasso, Ségou, San, Mopti, Bandiagara et le District de Bamako",
    "responsable": "Salikou"
  },
  {
    "nom": "Action Couverture et Développement",
    "acronyme": "A C D",
    "date_creation": "1988-03-19 00:00:00",
    "accord_cadre": "0546/000118 du 13 mai 2008",
    "adresse": "Magnambougou Projet Rue 382 Porte 101 Bamako",
    "domaines": "Recherche actions, Renforcement des capacités, Environnement, Agropastorale, Promotion féminine, Santé, Education. ",
    "zones": "Segou, San, Kita, Mopti",
    "responsable": "Mossa"
  },
  {
    "nom": " Association Jeunesse Actions Mali",
    "acronyme": "AJA Mali",
    "date_creation": "2008-04-15 00:00:00",
    "accord_cadre": "Accord cadre N°:462/460",
    "adresse": "Sébénikoro Wèrèda, près de la Pharmacie Kalifa Koné, Bamako",
    "domaines": "Formation professionnelle et entrepreneuriat, Education, Promotion Socio Economique des jeunes et des Femmes, Environnement, Securité Alimentaire et Assistance Humanitaire",
    "zones": "Koulikoro, Sikasso, Ségou",
    "responsable": "Amadou Baba "
  },
  {
    "nom": "Association pour la Recherche et le Développement Social",
    "acronyme": "ARDS-T",
    "date_creation": "2003-02-19 00:00:00",
    "accord_cadre": "0046/1676",
    "adresse": "Bamako",
    "domaines": "Education, Renforcement de la résilience, Sécurité alimentaire, Gestion de conflits, Protection,  la Santé secteriel, l’agriculture, Hydraulique, Protection de l’Environnement, hygiène assainissement, changement climatique, Elevage, Artisanat, Arts et Cultures, Formation d’apprentissage , gestions et de  la décentralisation et la démocratie et la gouvernance locale, Renforcement de capacité institutionnelle des collectivités et les organisations de la société civile, et autres volet de développements.  ",
    "zones": "Tombouctou",
    "responsable": "Ag Mohamed"
  },
  {
    "nom": "Association pour l'Employabilité, la Protection et la Promotion des droits des jeunes de Gourma Rharous",
    "acronyme": "HONNEY-Mali",
    "date_creation": "2021-11-19 00:00:00",
    "accord_cadre": "Acord Cadre N°001834",
    "adresse": "Rharous ville, quartier Djoula",
    "domaines": "Education, Protection, Santé-Nutrition",
    "zones": "Tombouctou",
    "responsable": "Ibrahim Younoussa"
  },
  {
    "nom": "Association Subaahi Gumo ",
    "acronyme": "ASG ",
    "date_creation": "24/07/91 suivant récépissé N°0764/MAT-DNAT",
    "accord_cadre": "Accord – Cadre signé le 26 août 1993 sous le N°422 renouvelé le 09 janvier 2008 sous le N°0127/000422",
    "adresse": " Badalabougou SEMA GEXCO Rue 136 Porte 710;  ",
    "domaines": "L’éducation, la santé, l'agriculture, l’élevage, l’hydraulique, l’action sociale et humanitaire, la décentralisation, la gouvernance, le leadership local, la défense et la promotion des droits des jeunes et des femmes, le genre, le plaidoyer, l'épargne – crédit, la formation, la protection de l'environnement, le renforcement organisationnel et institutionnel, l’état civil, la citoyenneté, les élections, la paix et la réconciliation.",
    "zones": "Ségou",
    "responsable": " Bouri"
  },
  {
    "nom": "Association Malienne pour la Conservation de la Faune et l'Environement",
    "acronyme": "AMCFE",
    "date_creation": "1991",
    "accord_cadre": "00182/00",
    "adresse": "Kabalan tournant cocan",
    "domaines": "agriculture durable, foresterie, Appui aux collectivites Humanitaires",
    "zones": "Kayes, Ségou, Koulikoro et le District de Bamako",
    "responsable": "Moriba"
  },
  {
    "nom": "Association de Formation et d'Appui au  Développement",
    "acronyme": "AFAD",
    "date_creation": "16/07/1995, sous le numéro 056/MATS",
    "accord_cadre": "Accord Cadre signé avec l'Etat, le 18 août 1995 sous le numéro N° 604 et renouvelé le 14 février 2008 sous le N°203/0604",
    "adresse": "Bamako, Faladiè –Séma –Rue 844 / Porte 355 à Côté de la Grande Mosquée ",
    "domaines": "*Environnement, Changement climatique,Crises et Catastrophes, Résilience\n*Agro-écologie, Agroforesterie ;\n*Assainissement ;\n*Décentralisation, Gouvernance, Citoyenneté, élections et Droits Humains ;\nLutte anti-corruption et transparence ;Micro finance et AGR ;Pastoralisme, Foncier ;Lutte contre l’extrémisme violent",
    "zones": "Bamako, Koulikoro, Dioila, Nara, Sikasso, Mopti, Bandiagara, Kayes, Gao, Tombouctou, Kidal\n",
    "responsable": "Assitan "
  },
  {
    "nom": "Appui aux Projets et Initiatives des Femmes",
    "acronyme": "APIF",
    "date_creation": "1992-05-02 00:00:00",
    "accord_cadre": "0776-324",
    "adresse": " Château secteur I derrière le terrain de football de Gao",
    "domaines": "sécurité alimentaire, resilience, assistance, santé de la reproduction, Santé Publique, excision, agriculture durable, environnement, Santé animale et hydraulique rurale et pastorale, aménagement et gestion des ressources naturelles, la décentralisation, développement local, éducation à la  Gouvernance et RRC (réduction des risques catastrophes),  IEC, mobilisation communautaire, formation des adultes, suivi et l’évaluation des activités, planification stratégique, GAR, planification participative, identification des besoins des populations.",
    "zones": "District de Bamako, Koulikoro, Gao, Tombouctou, Kidal ",
    "responsable": "Ahmadou"
  },
  {
    "nom": "Groupe de Recherches d'Actions et d'Assistance pour le Développement Communautaire",
    "acronyme": "GRADECOM",
    "date_creation": "1er Août 1997",
    "accord_cadre": "Accord-Cadre N° 0502 MATS DNAT ",
    "adresse": "Sikasso-Hamdallaye",
    "domaines": "Education, protection, résilience, Epargne et de crédit, formation professionnelle, entrepreneuriat, insertion et emploi des jeunes,",
    "zones": "Sikasso, Bougouni, Koutiala, Nara, Mopti et Bamako",
    "responsable": "Fousséni"
  },
  {
    "nom": "Association pour la Promotion de la Formation et l'Emploi des Jeunes ",
    "acronyme": "A.Pro.F.E.J",
    "date_creation": "2021-03-24 00:00:00",
    "accord_cadre": 1726,
    "adresse": "Sirakoro cité BMS en face dela pharmacie Issiaka SANOGO",
    "domaines": "Migration, réintégration et l'autonomisation financière des couches les plus vulnérables, assistance aux PDI,  les VBG,  prévention et  gestion de conflits, transfert monetaire, le sport pour le changement, animation communaitaire et sensibilisation.",
    "zones": "Bamako, Koulikoro",
    "responsable": "Brehima"
  },
  {
    "nom": "Groupe Action Recherche Pour le Développement Local",
    "acronyme": "GARDL",
    "date_creation": "2008-03-10 00:00:00",
    "accord_cadre": "0293/001790",
    "adresse": "Bamako-Sirakoro-Cité BMS",
    "domaines": "\n• Education, Formation et insertion professionnelle\n• Protection de l’enfant\n• Etudes et enquêtes ;\n• Justice et Droits humains  \n• Nutrition et Santé (santé maternelle, néonatale et infantile, Santé communautaire, renforcement du système de santé, assurance qualité)\n• Protection (Gestion des catastrophes, Abris, Non abris et biens non Santé)\n• Résilience et relèvement précoce \n• Violences basées sur le Genre\n• WASH (Eau-Hygiène- assainissement).\n• Cohésion sociale, Prévention et Gestion des conflits, Paix et réconciliation, \n• Décentralisation et Gouvernance ;\n• Développement Rural, Sécurité alimentaire et moyens d’existences (SAME) ;\n• La protection de l’environnement y compris la gestion des ressources naturelles et les changements climatiques.\n• Education, Formation et insertion professionnelle\n• Protection de l’enfant\n• Etudes et enquêtes ;\n• Justice et Droits humains  \n• Nutrition et Santé (santé maternelle, néonatale et infantile, Santé communautaire, renforcement du système de santé, assurance qualité)\n• Protection (Gestion des catastrophes, Abris, Non abris et biens non Santé)\n• Résilience et relèvement précoce \n• Violences basées sur le Genre\n• WASH (Eau-Hygiène- assainissement).\n• Cohésion sociale, Prévention et Gestion des conflits, Paix et réconciliation, \n• Décentralisation et Gouvernance ;\n• Développement Rural, Sécurité alimentaire et moyens d’existences (SAME) ;\n• La protection de l’environnement y compris la gestion des ressources naturelles et les changements climatiques.",
    "zones": "Bamako - Koulikoro - Sikasso-Bougouni - Mopti - Bandiagara-Douentza-Tombouctou-Taoudénié-Nara -Gao - Menaka et Kidal",
    "responsable": "Mohamed Lamine"
  },
  {
    "nom": "HELP FOR SAHEL",
    "acronyme": "HELP-SAHEL",
    "date_creation": "2021-12-03 00:00:00",
    "accord_cadre": "Accord Cadre 1840",
    "adresse": "Bamako, 1008 logement",
    "domaines": "Nutrition, Santé, assistances aux déplacés, réfugiés, Education, Sécurité Alimentaire, Protection, Prévention des conflits et lutte contre l’extrémisme violant\n",
    "zones": "Kidal, Ménaka, Gao, Tombouctou, Mopti\n",
    "responsable": "Alassane AG"
  },
  {
    "nom": "Association AMAAN GOURMA",
    "acronyme": "AAG",
    "date_creation": "23 décembre 2015",
    "accord_cadre": "Accord-Cadre N° 001348 MATS DNAT ",
    "adresse": "Gao château extension sud",
    "domaines": " protection de l'environnement, eau, hygiène et assainissement,  développement des infrastructures sanitaires dans les communautés locales.\n L'éducation : L'ONG AMAAN GOURMA s'engage à promouvoir l'éducation en mettant en place des programmes éducatifs et en améliorant les infrastructures scolaires dans les régions où elle intervient.\n La santé : L'ONG travaille à améliorer l'accès aux soins de santé de qualité et à renforcer les systèmes de santé dans les communautés locales.\n Le renforcement des capacités : L'ONG AMAAN GOURMA vise à renforcer les capacités des communautés locales en leur fournissant des formations et des ressources pour qu'elles puissent être autonomes et durables.\n La gouvernance : L'ONG s'engage à promouvoir la bonne gouvernance et la participation citoyenne dans les communautés où elle opère.\n La promotion et la protection des droits humains : L'ONG travaille à promouvoir et à protéger les droits humains dans les régions où elle intervient.\n La sécurité alimentaire : L'ONG AMAAN GOURMA met en place des projets visant à améliorer la sécurité alimentaire des communautés locales en favorisant l'agriculture durable et en renforçant les capacités agricoles.\n",
    "zones": "Gao, Tombouctou, Ménaka, Sikasso, Ségou et Mopti",
    "responsable": "Abdoul Moutalib"
  },
  {
    "nom": "Yam-Giribolo-Tumo (Association pour la Promotion de la Femme)",
    "acronyme": "YA-G-TU",
    "date_creation": "1997-12-08 00:00:00",
    "accord_cadre": "0635/000947",
    "adresse": "Bandiagara",
    "domaines": "santé, éducation, agriculture, Nutrition, wash, micro finance rurale, gouvernance locale démocratique, droit de la femme, de l’enfant et de la famille, protection de l’enfant, environnement, AGR, Plaidoyer, lobbing, Le Genre\n",
    "zones": "Bandiagara;\nDouentza;\nMopti;\nSan;\nSegou;\nNioro du sahel",
    "responsable": "Yaïguéré"
  },
  {
    "nom": "Actions Integrées pour le Developpement des Zones Lacustre ",
    "acronyme": "AID-ZL ",
    "date_creation": "Juin 20214",
    "accord_cadre": "1798MATD ",
    "adresse": "Bamako, Bacodjicoroni Golfe, Rue 812 Porte B4",
    "domaines": "Jeunsees, construction citoyenne et lutte contre l'enrolelent au sein des groupes armés; resilience et changement climatique; securtité alimentaire et nutrionnelle, Gouvernance, Paix, Droits humains notamment la negociation communautaire de l'Accès humanitaire, Etude, Formation et Plaidoyer ",
    "zones": "Bamako, San, Mopti, Bandjagara, Douentza, Tombouctou, Taoudenit et Gao ",
    "responsable": "Moussa Ibrahima "
  },
  {
    "nom": "FEMME ET DEVELOPPEMENT",
    "acronyme": "FEDE",
    "date_creation": "2002-01-04 00:00:00",
    "accord_cadre": "0524/001582",
    "adresse": "Route de Kati 800m du centre émetteur de  l'ORTM, rue à droite  juste avant la Boulangerie \"BABA\", en face dans la rue et sur la gauche, Château d'eau vert, faire face à Kati, 50m à droite, 5è Bâtiment.",
    "domaines": "Protection - Sécurité alimentaire - WASH - Formation professionnelle et insertion sociale - Gouvernance des secteurs de l'éducation et de l'agriculture - changement climantique et protectetion cde l'environement - securité humaine / médiation ( gestion de conflit, extremisme violent )",
    "zones": "Bamako -Kayes - Kita - Koulikoro - Sikasso- Ségou - San - Koutiala -  Mopti - Bandiagara -Gao - Menaka",
    "responsable": "Korotoumou"
  },
  {
    "nom": "Association Malienne pour l'Education à l'Environnement et le Développement Durable ",
    "acronyme": "AMALED Mali",
    "date_creation": "1er Août 1997",
    "accord_cadre": "Accord-Cadre N° 0502 MATS DNAT ",
    "adresse": "Sikasso-Hamdallaye",
    "domaines": "Education, protection, résilience, Epargne et de crédit, formation professionnelle, entrepreneuraile, insertion et emploi des jeunes,",
    "zones": "Sikasso, Bougouni, Koutiala, Nara, Mopti et Bamako",
    "responsable": "Fousséni"
  },
  {
    "nom": "Association des Femmes Entreprenantes du Mali ",
    "acronyme": "AFEM",
    "date_creation": "2012-04-12 00:00:00",
    "accord_cadre": "N°0232/G-DB Récépissé, N° Accord Cadre 001800",
    "adresse": "Lassa Commune IV du District de Bamako ",
    "domaines": "Lutte contre les violences faites aux femmes et au filles, Entreprenariat féminin, Education des filles, la protection de l'environnement ",
    "zones": "Kayes, Bamako, Mopti, Tombouctou, Gao, Kidal, Ségou, Koulikoro, Sikasso",
    "responsable": "Kadiditou"
  },
  {
    "nom": "Association Pour La Promotion Des Filles Descolarisees Au Mali",
    "acronyme": "APROFID",
    "date_creation": "2008-07-14 00:00:00",
    "accord_cadre": "0694/001075",
    "adresse": "Bamako",
    "domaines": "Education\nFormation \nAlphabétisation-Santé – Environnement\nHydraulique - Promotion Femmes et enfants\nAffaires Sociales - Aides -d'Urgence.",
    "zones": "Mopti,  Gao, Segou, Tombouctou Kidal ET LE DISTRICT DE BAMAKO",
    "responsable": "Mme Maiga "
  },
  {
    "nom": "Association pour le developpement des Initiatives communautaires",
    "acronyme": "ADICOM",
    "date_creation": "2011-12-31 00:00:00",
    "accord_cadre": "Accord Cadre N°001387",
    "adresse": " Bamako, Yirimadio,ZRNY, Pres du stade du 26 Mars   ",
    "domaines": "Sécurité alimentaire et Resilience, WASH, Santé de la Reproduction, Education, Formation Professionnelle/Autonomisation des jeunes et femmes :, Paix et cohesion sociale, Gestion des Ressources et changement climatique, Actions humanitaires/ Urgence",
    "zones": "Tombouctou,  Diola, Koulikoro,  District de Bamako",
    "responsable": "Alassane "
  },
  {
    "nom": "Organisation Malienne pour la Paix, l’Intégration et le Développement Economique et Social ",
    "acronyme": "OMPIDES",
    "date_creation": "09 Juillet 1997",
    "accord_cadre": " N°00913 du 03 septembre 1997 rénouvelé le 26 Janvier 2023 sous le N°001969",
    "adresse": "BAMAKO, NIAMANA pres de la cour des Eaux et Forets",
    "domaines": "•  Santé • Eau-Hygiène-Assainissement (WASH) • Sécurité Alimentaire (Livelihoods) • Nutrition • Médiation sociale • Protection de l’environnement • Education • Bonne Gouvernance     •Protection    •Activités Génératrices de Revenus (AGR) • Autonomisation des femmes.",
    "zones": "TOMBOUCTOU, GAO, KIDAL, TAOUDENIT, MENAKA , BAMAKO, SIKASSO, KOULIKORO, SEGOU ET MOPTI",
    "responsable": "Mohamed "
  },
  {
    "nom": "Association d'Appui au Développement communautaire du Mali",
    "acronyme": "AADECOM",
    "date_creation": "2014-02-07 00:00:00",
    "accord_cadre": 1274,
    "adresse": "Bamako",
    "domaines": "es Affaires sociales, la promotion des droits de humains, la bonne Gouvernance, la Protection de l'environnement, l'Hydraulique, l'assainissement, les activités, génératrices de Revenus ",
    "zones": "Kayes, Koulikoro, Sikasso, Ségou, Tombouctou, Gao et district de Bamako",
    "responsable": "Haidara"
  },
  {
    "nom": "Association pour l'Appui au Développement",
    "acronyme": "AADI",
    "date_creation": "2002-09-11 00:00:00",
    "accord_cadre": "0889/1574",
    "adresse": "DJENNE",
    "domaines": "Santé, éducation, assainissement, environement",
    "zones": "DJENNE",
    "responsable": "Djenepo"
  },
  {
    "nom": "Association d'Appui aux Femmes Démunies",
    "acronyme": "AAFDRK",
    "date_creation": "2016-11-09 00:00:00",
    "accord_cadre": 1395,
    "adresse": "Kidal",
    "domaines": "Lutte contre la pauvreté (AGR), Renforcement des capacités .Education, Santé, Eau-hygiène, Assainissement ﻿﻿Environnement, Agriculture, Elevage.",
    "zones": "Kidal",
    "responsable": "Amewey"
  },
  {
    "nom": "Association Ambe Kunko Pour la Lutte Contre la Maltraitance des Femmes et Des Enfants",
    "acronyme": "AAKLMFE",
    "date_creation": "2021-04-22 00:00:00",
    "accord_cadre": 1738,
    "adresse": "Sogoniko, Bamako",
    "domaines": "La Santé, l'éducation, l'Agriculture, les Affaires sociales, la promotion des droits de humains, la bonne Gouvernance, la Protection de l'environnement, l'Hydraulique, l'assainissement, les activités, génératrices de Revenus (AGR)",
    "zones": " Kayes  ,Koulikoro ,Sikasso ,Ségou ,Mopti et le district de Bamako",
    "responsable": "Dicko"
  },
  {
    "nom": " Association Contre l'exploitation Sexuelle des Enfants au Mali",
    "acronyme": "ACESEM",
    "date_creation": "2018-12-05 00:00:00",
    "accord_cadre": 39,
    "adresse": "bamako",
    "domaines": "Renforcement de l’éducation aux médias. Atténuation et stabilisation des conflits Santé.Réduction de la morbidité et la mortalité néonatale et infantile. Renforcer les systèmes de santé publique. Lutte contre les maladies infectieuses (VIH, paludisme) et les nouvelles menaces sanitaires mondiales. L’amélioration de l’accès aux soins et services de santé (fonds de solidarité). Agriculture et croissance économique. Stratégie globale pour la sécurité alimentaire. Amélioration des systèmes de production. Accès aux marchés. Approvisionnement en eau et assainissement. Engament du secteur privé (femmes et jeunes). Résilience (prévention de conflit, programmation humanitaire et développement en synergie. Adaptation au changement climatique (choix des méthodes culturales, semences améliorées. Nutrition (stratégies de collaboration intersectorielle). Engagement avec PME (agrobusiness) . Education, amélioration de l’accès à l’éducation, amélioration de la qualité de l’éducation.",
    "zones": "Bamako",
    "responsable": " Maiga "
  },
  {
    "nom": "Association pour le Développement et d'Appui aux Initiatives Villageoises",
    "acronyme": "ADAIV",
    "date_creation": "2019-04-08 00:00:00",
    "accord_cadre": 1576,
    "adresse": "Quartier Alphaou, GOUNDAM",
    "domaines": "Atténuation et stabilisation des conflits Santé: Réduction de la morbidité et la mortalité néonatale et infantile ;\nRenforcer les systèmes de santé publique. Lutte contre les maladies infectieuses (VIH, paludisme) et les nouvelles menaces sanitaires mondiales. Stratégie globale pour la sécurité alimentaire. Amélioration des systèmes de production. Accès aux marchés. Approvisionnement en eau et assainissement. Engament du secteur privé (femmes et jeunes). Résilience (prévention de conflit, programmation humanitaire et développement en synergie. Adaptation au changement climatique (choix des méthodes culturales, semences améliorées. Nutrition (stratégies de collaboration intersectorielle). Engagement avec PME (agrobusiness) .",
    "zones": " Kayes, Ségou, Mopti, Tombouctou, Kidal, Taoudéni, Ménaka et le district de Bamako",
    "responsable": " Maiga"
  },
  {
    "nom": "Action pour le Développement et Contre la Pauvreté au Sahel",
    "acronyme": "ADCOPS",
    "date_creation": "2008-05-13 00:00:00",
    "accord_cadre": "0534/001017",
    "adresse": "boulkassoumbougou, Bamako",
    "domaines": "Renforcement de l’éducation aux médias. Réduction de la morbidité et la mortalité néonatale et infantile. Renforcer les systèmes de santé publique. Lutte contre les maladies infectieuses (VIH, paludisme) et les nouvelles menaces sanitaires mondiales. L’amélioration de l’accès aux soins et services de santé (fonds de solidarité. Stratégie globale pour la sécurité alimentaire. Amélioration des systèmes de production. Accès aux marchés. Approvisionnement en eau et assainissement. Engament du secteur privé (femmes et jeunes). Résilience (prévention de conflit, programmation humanitaire et développement en synergie. Adaptation au changement climatique (choix des méthodes culturales, semences améliorées. Nutrition (stratégies de collaboration intersectorielle) et éducation. ",
    "zones": "Tout le Mali",
    "responsable": "Guiteye"
  },
  {
    "nom": "Aide au Développement Durable",
    "acronyme": "ADD-MALI",
    "date_creation": "2018-05-04 00:00:00",
    "accord_cadre": "001487/01976",
    "adresse": "Kidal",
    "domaines": "Stratégie globale pour la sécurité alimentaire, amélioration des systèmes de production, accès aux marchés, approvisionnement en eau et assainissement, éducation \n",
    "zones": "Mopti, Tombouctou, Gao, Kidal et district de Bamako",
    "responsable": " Biga"
  },
  {
    "nom": "Association de Développement Durable des Femmes au Mali",
    "acronyme": "ADDF-MALI",
    "date_creation": "2016-08-31 00:00:00",
    "accord_cadre": 1388,
    "adresse": "Bamako",
    "domaines": "Réduction de la morbidité et la mortalité néonatale et infantile, renforcer les systèmes de santé publique, agriculture & croissance économique, stratégie globale pour la sécurité alimentaire, amélioration des systèmes de production, approvisionnement en eau et assainissement, engament du secteur privé (femmes et jeunes), résilience (prévention de conflit, programmation humanitaire et développement en synergie, adaptation au changement climatique (choix des méthodes culturales, semences améliorées, nutrition (stratégies de collaboration intersectorielle), éducation.\n",
    "zones": "Koulikoro, Ségou, Mopti, Sikasso et le district de Bamako",
    "responsable": "Mme Kane "
  },
  {
    "nom": "Association  pour le Développement du Nord",
    "acronyme": "ADENORD",
    "date_creation": "1992-04-01 00:00:00",
    "accord_cadre": "0724/001080",
    "adresse": "Tombouctou",
    "domaines": NaN,
    "zones": "Tombouctou",
    "responsable": "Maiga"
  },
  {
    "nom": "Association pour le Développement des Initiatives Locales au Mali",
    "acronyme": "ADIL-MALI",
    "date_creation": "2018-04-04 00:00:00",
    "accord_cadre": 1488,
    "adresse": "Tombouctou",
    "domaines": "Sécurité Alimentaire, Education/ Formation, Décentralisation et Gouvernance Locale Prévention et gestion des conflits",
    "zones": "Tombouctou",
    "responsable": " Arby"
  },
  {
    "nom": "Association Pour le Développement des Initiatives Communautaires au Sahel",
    "acronyme": "ADIC-SAHEL",
    "date_creation": "2008-07-14 00:00:00",
    "accord_cadre": "0711/2148",
    "adresse": "TOMBOUCTOU",
    "domaines": "Eau, hygiène et assainissement (WASH), relèvement économique et soutien au système de marché (ERMS), protection enfance, VBG, soutien psychosocial, coordination, plaidoyer et lutte anti-mine, RRM,  paix – Démocratie et Gouvernance, reforme et accès à la justice y compris la traite des personnes et violence sexiste, lutte contre la corruption et délits financiers, renforcement de la société civile, engagement civique, participation politique et inclusion, réformes électorales et soutien aux élections, lutte contre l’extrémisme violent \n- Renforcement de l’éducation aux médias\n- Atténuation et stabilisation des conflits Santé :\n-Réduction de la morbidité et la mortalité néonatale et infantile ;\nRenforcer les systèmes de santé publique ; \n-Lutte contre les maladies infectieuses (VIH, paludisme) et les nouvelles menaces sanitaires mondiales ;\n-L’amélioration de l’accès aux soins et services de santé (fonds de solidarité) ;Agriculture & croissance économique \n- Stratégie globale pour la sécurité alimentaire ;\n- Amélioration des systèmes de production \n- Accès aux marchés ;\n- Approvisionnement en eau et assainissement \n- Engament du secteur privé (femmes et jeunes) ;\n- Résilience (prévention de conflit, programmation humanitaire et développement en synergie ;\n- Adaptation au changement climatique (choix des méthodes culturales, semences améliorées ;\n- Nutrition (stratégies de collaboration intersectorielle)\n- Engagement avec PME (agrobusiness) .\nEducation \n- L’amélioration de l’accès à l’éducation ;\n- L’amélioration de la qualité de l’éducation \n- \n\n  \n\n\n",
    "zones": "Tombouctou, Gao, Mopti, Segou",
    "responsable": "Aliou "
  },
  {
    "nom": "Association Malienne des Droits de L'Homme",
    "acronyme": "AFDP",
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": "Bamako",
    "domaines": "Renforcement de l’éducation aux médias, renforcer les systèmes de santé publique, amélioration de l’accès aux soins et services de santé (fonds de solidarité), agriculture et croissance économique, stratégie globale pour la sécurité alimentaire,\n- Amélioration des systèmes de production, accès aux marchés, approvisionnement en eau et assainissement, engament du secteur privé (femmes et jeunes), résilience (prévention de conflit, programmation humanitaire et développement en synergie, adaptation au changement climatique (choix des méthodes culturales, semences améliorées, nutrition, engagement avec PME.",
    "zones": "Gao, Segou, Bamako, Koulikoro",
    "responsable": "Biga"
  },
  {
    "nom": "Association Jeunesse et Développement du Mali",
    "acronyme": "AJDM",
    "date_creation": "1995",
    "accord_cadre": "01176/0751",
    "adresse": "Bamako",
    "domaines": "Éducation et formation (alphabétisation, renforcement des capacités techniques des bénéficiaires),  Activités génératrices de revenus (Apprentissage de la teinture , couture, coiffure, restauration maraîchage, transformation et valorisation des produits agro-sylvo-pastoraux etc.), Défense des droits des enfants et des femmes (plaidoyer)\n\nProtection de l’environnement\n\nActions sociales",
    "zones": "Bamako",
    "responsable": "Doumbia  "
  },
  {
    "nom": "RED",
    "acronyme": "RED",
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association Malienne pour le Développement, la Protection de L'Environnement et la Lutte Contre la Désertification",
    "acronyme": "AMADE PELCODE",
    "date_creation": "2008-05-21 00:00:00",
    "accord_cadre": "0571/000762",
    "adresse": "Bamako",
    "domaines": "éducation, protection, santé – nutrition\nEHA environement, sécurité",
    "zones": "Gao, Tombouctou, Segou, Koulikoro et District de Bamako",
    "responsable": " F Maiga"
  },
  {
    "nom": "Association Malienne pour la Solidarité et le Développement",
    "acronyme": "AMSODE",
    "date_creation": "2018-03-30 00:00:00",
    "accord_cadre": 1480,
    "adresse": "Tombouctou",
    "domaines": "Eduction, Santé, Affaires sociales, Bonne gouvernance.",
    "zones": "Mopti, Tombouctou, Gao, Kidal et district de Bamako",
    "responsable": "Diallo"
  },
  {
    "nom": "Agence pour la Promotion des Entreprises Privées",
    "acronyme": "APEP",
    "date_creation": "2017-01-15 00:00:00",
    "accord_cadre": 1418,
    "adresse": "Bamako",
    "domaines": " Santé, Affaires sociales, Bonne gouvernance.",
    "zones": "Bamako",
    "responsable": "Kansaye "
  },
  {
    "nom": "Association Libre pour la Promotion le L'habitat et du Logement",
    "acronyme": "APHALOG",
    "date_creation": "2008-05-02 00:00:00",
    "accord_cadre": "0494/0130",
    "adresse": "Bamako",
    "domaines": "éducation, protection, santé – nutrition",
    "zones": "Koulikoro, Ségou, Sikasso, Mopti, Bandigara, Koutiala et district de Bamako",
    "responsable": "Diakité"
  },
  {
    "nom": "Association Protestante de la Santé au Mali",
    "acronyme": "APSM",
    "date_creation": "2008-01-14 00:00:00",
    "accord_cadre": "0196/001394",
    "adresse": "Bamako",
    "domaines": "Santé, éducation, environement, ",
    "zones": "Ensemble du territoire du Mali",
    "responsable": " Diallo"
  },
  {
    "nom": "Association pour le Service de la Nation",
    "acronyme": "APSN",
    "date_creation": "2022-07-13 00:00:00",
    "accord_cadre": 1917,
    "adresse": "Faladiè Sokoro",
    "domaines": "Santé, Éduaction, Sécurité alimentaire, Agriculture, protection de l'environnement, promotion du genre et AGR",
    "zones": "Bamako, Koulikoro, Ségou,  Kayes, Sikasso, Gao,Tombouctou, Kidal et Menaka",
    "responsable": "Ali"
  },
  {
    "nom": "Action Recherches pour le Développement des Initiatives Locales",
    "acronyme": "ARDIL",
    "date_creation": "2008-01-28 00:00:00",
    "accord_cadre": "0139/00032",
    "adresse": "Tombouctou",
    "domaines": "l'éducation, la sécurité alimentaire, l'agriculture,",
    "zones": "Tombouctou",
    "responsable": "Maiga"
  },
  {
    "nom": "Association de Soutien au Développement des Activités de Population",
    "acronyme": "ASDAP",
    "date_creation": "2008-03-17 00:00:00",
    "accord_cadre": "0333/000424",
    "adresse": "Bamako",
    "domaines": "Santé,  éducation, formation, environement, ",
    "zones": "Koulikoro, Segou, Mopti, Sikasso, Kayes, le district de Bamako",
    "responsable": "  Touré"
  },
  {
    "nom": "Association de Soutien aux Populations Démunies et de Lutte Contre l'Exclusion",
    "acronyme": "ASPODLCE",
    "date_creation": "2012-02-12 00:00:00",
    "accord_cadre": 6342,
    "adresse": "Tombouctou",
    "domaines": "﻿﻿la Santé, l'éducation, la sécurité alimentaire, l'agriculture,",
    "zones": "Ensemble du territoire du Mali",
    "responsable": " Ould Baba "
  },
  {
    "nom": "Association de Soutien aux Revenus et  Economies Fragiles",
    "acronyme": "ASREF",
    "date_creation": "2016-03-11 00:00:00",
    "accord_cadre": 1395,
    "adresse": "Bamako",
    "domaines": "﻿﻿la protection de l'environnement, la promotion du genre ;",
    "zones": "Kidal, Gao, Menaka, Tombouctou",
    "responsable": "Ag Amewey"
  },
  {
    "nom": "Association Sahélienne d'Appui au éeveloppement Décentralisé",
    "acronyme": "ASSADDEC",
    "date_creation": "2008-06-05 00:00:00",
    "accord_cadre": "0167/1634",
    "adresse": "Kidal",
    "domaines": "﻿﻿les activités génératrices de revenus",
    "zones": "Kidal",
    "responsable": "Walet  Akli "
  },
  {
    "nom": "ASSAHSSAL",
    "acronyme": "ASSAHSSAL",
    "date_creation": "2014-06-03 00:00:00",
    "accord_cadre": 1306,
    "adresse": "Kidal",
    "domaines": "Sécurité Alimentaire, education, formation, décentralisation et gouvernance locale, prévention et gestion des conflits.",
    "zones": "Tombouctou, Gao, Kidal ET District de Bamako",
    "responsable": "Ag Igasten"
  },
  {
    "nom": " Association pour la Promotion de La Femme et de L’Enfant",
    "acronyme": "ASSOPROFEN",
    "date_creation": "2008-02-26 00:00:00",
    "accord_cadre": "0261/002095",
    "adresse": "Bamako",
    "domaines": "Eau, hygiène, assainissement, Education, santé",
    "zones": "Koulikoro, Sikasso, Mopti, District de Bamako",
    "responsable": " Samaké"
  },
  {
    "nom": " AVENIR ",
    "acronyme": "AVENIR ",
    "date_creation": "2014-10-15 00:00:00",
    "accord_cadre": 1534,
    "adresse": "Sotuba ACI près de la protection civile Bamako",
    "domaines": "• Programme de nutrition infantile visant à lutter contre la malnutrition chez les enfants de moins de cinq ans dans les zones défavorisées (site des déplacés internes).\n• Des initiatives éducatives visant à promouvoir l'accès à l'éducation pour les enfants affectées par les conflits y compris les déplacés internes.\n• Des projets WASH pour assurer l'accès à l'eau potable, à des installations sanitaires adéquates et à des pratiques d'hygiène optimales dans les communautés ciblées ;\n• Campagnes de sensibilisation sur l'hygiène et l'assainissement dans les sites des déplacés et dans les communautés rurales.\n• Renforcement des capacités des femmes et des jeunes filles en matière d'autonomisation économique et de lutte contre les VBG.\n• Accompagnement, formation et équipement des groupements féminins pour la mise en œuvre des activités génératrices de revenus (AGR) ;\n• Organisation des séances de sensibilisation sur le dialogue, la réconciliation et la cohésion sociale.\n• La Sécurité Alimentaire \n• La Protection (lutte Antimine) \n",
    "zones": "Kidal, Ménaka, Gao, Tombouctou, Mopti, Ségou et district de Bamako",
    "responsable": "Moussa "
  },
  {
    "nom": "Avenir-Enfance- Sahel",
    "acronyme": "AV.E.S",
    "date_creation": "2002-06-16 00:00:00",
    "accord_cadre": "0634/MATCL - DNI",
    "adresse": "Bamako, Hamdallaye ACI 2000, Nord Ouest de l'hôtel Akakos Bouna",
    "domaines": "Promotion et protection des droits de l'enfant; - Santé, eau/hygiène/assainissement. - Urgence humanitaire et sociale; - Genre; - Insertion socio-professionnelle des jeunes et adolescents ; - Handicap ; -Plaidoyer ; - Gouvernance et citoyenneté ; - Sécurité alimentaire dans le contexte des changements climatiques.",
    "zones": "Kita, Koulikoro, Ségou, Mopti et Douentza",
    "responsable": "Mohamed"
  },
  {
    "nom": "Association Azhar",
    "acronyme": "AZHAR",
    "date_creation": "2008-01-28 00:00:00",
    "accord_cadre": "0135/001633",
    "adresse": "Kidal",
    "domaines": "Santé, élvage, éducation, droit civique",
    "zones": "Kidal, Gao",
    "responsable": "MAIGA"
  },
  {
    "nom": "Conseil et Appui pour l'Education à la Base",
    "acronyme": "CAEB",
    "date_creation": "2008-10-20 00:00:00",
    "accord_cadre": "0914/0529",
    "adresse": "Bamako",
    "domaines": "Education, formation, affaires sociales et recherches",
    "zones": "Koulikoro, Sikasso et district de Bamako",
    "responsable": "Traoré"
  },
  {
    "nom": " Carrefour Développement",
    "acronyme": "CARD",
    "date_creation": "2008-02-14 00:00:00",
    "accord_cadre": "0209/000491",
    "adresse": "Bamako",
    "domaines": "Education,formation, sensibilisation, lutte contre la pauvreté, santé-décentralisation, environnement, promotion de la Femme et de l'Enfant, bonne gouvernance, citoyennété, aides d'urgence",
    "zones": "Koulikoro, Ségou, Gao,  Mopti et district de Bamako",
    "responsable": "Maiga"
  },
  {
    "nom": "Communauté- Agriculture-Santé- Education au Sahel",
    "acronyme": "CASE-SAHEL",
    "date_creation": "07-Avr 2015",
    "accord_cadre": "accord cadre signe le 07 avril 2015 sous le numero 001491 et regie par la loi n*04-038 du 5 aout 2004 relative aux associations du Mali",
    "adresse": "Bamako",
    "domaines": "protection et promotion des droits des femmes et enfants, education, sante, agriculture et lasecurite alimentaire.",
    "zones": "Bamako, Segou, Koulikoro, Koutiala, Dioila et kayes",
    "responsable": "Michel"
  },
  {
    "nom": "Cadre d’Etude de Recherche et de Concertation pour Agir",
    "acronyme": "CERCA",
    "date_creation": "2014-05-07 00:00:00",
    "accord_cadre": 1300,
    "adresse": "Bamako",
    "domaines": "Aide d’urgence, humanitaire et développement communautaire",
    "zones": "Kayes, Koulikoro, Ségou, Mopti, Tombouctou, Gao, Kidal Taoudéni, Ménaka",
    "responsable": " Ag  Ahmedou "
  },
  {
    "nom": "Cercle de Recherche et d'Appui pour le Développement",
    "acronyme": "CRADI",
    "date_creation": "2021-06-16 00:00:00",
    "accord_cadre": 1765,
    "adresse": "Kidak",
    "domaines": "Santé, éducation, Aide d'urgence, formation, environement\n",
    "zones": "Koulikoro, Mopti, Tombouctou, Kidal, Taoudeni, Gao, Menaka et le District de Bamako",
    "responsable": " Ag Jiddou"
  },
  {
    "nom": "DDRNAS",
    "acronyme": "DDRNAS",
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": "Gao",
    "domaines": NaN,
    "zones": "Gao, Menaka, Mopti",
    "responsable": " O Toure"
  },
  {
    "nom": "Association Eduquer, Former les Femmes, un Appui au Développement",
    "acronyme": "EFFAD",
    "date_creation": "2008-03-17 00:00:00",
    "accord_cadre": "0344/001866",
    "adresse": "Kidal",
    "domaines": "Education, formation, sensibilisation, lutte contre la pauvreté, santé-décentralisation, environnement, promotion de la Femme et de l'Enfant, bonne gouvernance, citoyennété, aides d'Urgence.",
    "zones": "Tout le territoire du Mali",
    "responsable": "Kouyaté "
  },
  {
    "nom": "Environnement et Développement du Tiers-Monde",
    "acronyme": "ENDA-MALI",
    "date_creation": "2007-12-03 00:00:00",
    "accord_cadre": "0045/000583",
    "adresse": "Bamako",
    "domaines": "Affaires sociales, ﻿﻿santé, communication à la Base, energie nouvelle et renouvelable, environnement.",
    "zones": "Tout le Mali",
    "responsable": " Coulibaly"
  },
  {
    "nom": "Equipe de Recherche-Action pour le Développement Durable",
    "acronyme": "ERADD",
    "date_creation": "2016-12-12 00:00:00",
    "accord_cadre": 7432,
    "adresse": "Bamako",
    "domaines": "éducation, protection, santé – nutrition\nEHA environement, sécurité",
    "zones": "Kidal, Gao, Ménaka, Tessalit, Mopti et District de Bamako",
    "responsable": " Konaté"
  },
  {
    "nom": "Forum de la Jeunesse pour le Changement",
    "acronyme": "FORJEC",
    "date_creation": "2021-12-22 00:00:00",
    "accord_cadre": 1852,
    "adresse": "Bamako",
    "domaines": "Sécurité alimentaire, éducation et formation. Décentralisation et Gouvernance Locale. Prévention et gestion des conflits.",
    "zones": "Sikasso, Koulikoro, Mopti, Tombouctou, Gao, Menaka et le District de Bamako",
    "responsable": " H.DIEPKILE"
  },
  {
    "nom": " Groupe de Recherche, d'Etude et de Formation , Femme-Action",
    "acronyme": "GREFFA",
    "date_creation": "2007-12-14 00:00:00",
    "accord_cadre": "0072/000645",
    "adresse": "GAO",
    "domaines": "écentralisation, hygiène, assainissement, education, formation, plaidoyer, lobbying, environnement",
    "zones": "GAO",
    "responsable": " Touré"
  },
  {
    "nom": "Intiative Malienne d'Appui au Développement Local",
    "acronyme": "IMADEL",
    "date_creation": "2010-10-12 00:00:00",
    "accord_cadre": 1138,
    "adresse": "Bamako",
    "domaines": "hydraulique rurale et urbaine, décentralisation, hygiène, assainissement, education, formation, plaidoyer, lobbying, environnement, Santé, développement local.",
    "zones": "Ensemble du Territoire National",
    "responsable": " Diallo "
  },
  {
    "nom": "Oeuvre Malienne pour l'Aide de L'Enfance au Sahel",
    "acronyme": "OMAES",
    "date_creation": "1984-12-21 00:00:00",
    "accord_cadre": 104,
    "adresse": "Bamako",
    "domaines": "éducation et formation. Décentralisation et Gouvernance Locale. Prévention et gestion des conflits.",
    "zones": "Mopti, Koulikoro, Tombouctou et  District de Bamako",
    "responsable": " Traore "
  },
  {
    "nom": "Association Oui pour une Enfance Noble Mali",
    "acronyme": "OPEN-MALI",
    "date_creation": "Association Oui Pour un Enfance Noble Mali",
    "accord_cadre": 1590,
    "adresse": "Bamako",
    "domaines": "l’éducation, la santé, la promotion de la citoyenneté, l’aide d’urgence, la promotion des droits humains, la promotion de la culture, et l’autonomisation des femmes.",
    "zones": "Kayes, Koulikoro, Sikasso, Ségou, Tombouctou, gao, Ménaka, Taoudeni, Mopti, district de Bamako",
    "responsable": "Sissoko"
  },
  {
    "nom": "Plate Forme d'Initiative d'Expertise en Education et d'Appui à  la Promotion des Collectivités Décentralisées",
    "acronyme": "PADI",
    "date_creation": "2008-11-04 00:00:00",
    "accord_cadre": "0947/001719",
    "adresse": " Ségou",
    "domaines": "Le renforcement des capacités, éducation, économie solidaire",
    "zones": "Ensemble du Mali",
    "responsable": "Kampo"
  },
  {
    "nom": NaN,
    "acronyme": "RAC",
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association Malienne pour la Protection de l'Environement",
    "acronyme": "STOP-SAHEL",
    "date_creation": "2024-04-15 00:00:00",
    "accord_cadre": "0422/000114",
    "adresse": "Bamako",
    "domaines": "Agro-pastoral, reboissement, assainissement. Section visant la protection de l'environement.",
    "zones": "Tout le Mali",
    "responsable": "Samassekou"
  },
  {
    "nom": "TASSAGHT",
    "acronyme": "TASSAGHT",
    "date_creation": "2008-06-30 00:00:00",
    "accord_cadre": "0162/000077",
    "adresse": "TASSAGHT",
    "domaines": "Sécurité Alimentaire, éducation et formation, décentralisation et Gouvernance Locale Prévention et gestion des conflits, environnement,santé/MST/VIH/Sida, genre et Equité, plaidoyer, micro-finance, renforcement de capacités,aide d'Urgence, recherche Action Visites d'échanges.",
    "zones": "Tombouctou,Gao, Ménaka, Mopti, Douentza, Bandiagara, Ségou, Sikasso, Koulikoro, Bamako",
    "responsable": " Aziz"
  },
  {
    "nom": "Think Peace ",
    "acronyme": "TP",
    "date_creation": "15/02/2016  28/08/2019",
    "accord_cadre": 1605,
    "adresse": "Hamdallaye ACI 2000, Près de Radisson Blu, derrière la Clinique Diafounou, Rue: 409, Porte : 57",
    "domaines": "Paix, Sécurité, Prévention de la radicalisation, de l'Extrémisme Violent et la lutte contre le terrorisme, protection des droits enfants, Humanitaire",
    "zones": "19 régions plus le District de Bamako",
    "responsable": "Abdou Kola "
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Windila Konda",
    "acronyme": "WINDILA KONDA",
    "date_creation": "2010-04-10 00:00:00",
    "accord_cadre": 1153,
    "adresse": "Tombouctou",
    "domaines": "protection des droits enfants, Humanitaire, santé, éducation",
    "zones": "Tombouctou",
    "responsable": " Maiga "
  },
  {
    "nom": "ONG WOIYO Kondeye",
    "acronyme": "WK",
    "date_creation": "en 1994",
    "accord_cadre": "0258/000509 ",
    "adresse": "Faladjie Sema, Rue 840, Porte 28141",
    "domaines": "• Santé (Santé de la Reproduction, Mutilations Génitales Féminines)\n• Education (information-Sensibilisation-Communication)\n• Environnement (Eau-Hygiène-Assainissement, Changement Climatique)\n• Agriculture (Maraichage et petit élevage)\n• Formation (Renforcement de capacités, orientation, facilitation)\n• Etudes (Diagnostic, évaluations, enquêtes, consultation)\n• Développement socio-économique des communautés/Femmes \nplaidoyer/lobbying)\n",
    "zones": "Gao,  Douantza, Bandiagara, Mopti, Bamako, Tombouctou, Koulikoro, ",
    "responsable": "Mme Oumou"
  },
  {
    "nom": "Le Reseau D'Appui et de Conseils aux Initiatives des Artisans",
    "acronyme": "RAC",
    "date_creation": "2008-10-20 00:00:00",
    "accord_cadre": "0915/001621",
    "adresse": "Bamako",
    "domaines": "Education, santé, environement",
    "zones": "Ensemble du territoire du Mali",
    "responsable": " Touré"
  },
  {
    "nom": "TILALTE",
    "acronyme": "TILALTE",
    "date_creation": "2022-07-29 00:00:00",
    "accord_cadre": 1920,
    "adresse": "Tombouctou",
    "domaines": "Education, Santé, Eau-hygiène, Assainissement ﻿﻿Environnement, Agriculture, Elevage",
    "zones": "Mopti, Gao, Tombouctou, Menaka, Taoudenit et district de Bamako",
    "responsable": "Cissé"
  },
  {
    "nom": "Action Mopti",
    "acronyme": "Action Mopti",
    "date_creation": "2008-07-04 00:00:00",
    "accord_cadre": "0657/0150",
    "adresse": "Mopti",
    "domaines": "Socio-culyurel médical",
    "zones": NaN,
    "responsable": "Maiga"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association pour le Développement Rural",
    "acronyme": "AMPDR",
    "date_creation": "2008-02-20 00:00:00",
    "accord_cadre": "0215/000600",
    "adresse": "Bamako",
    "domaines": "Protection de l'environnement, Agriculture, élevage, santé, éducation, formation, promotion féminine, crédit, épargne, sensibilisation, information",
    "zones": "Ensemble du territoire du Mali",
    "responsable": "Ouattara"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Groupe des Artisants Ruraux d'Intédeyene",
    "acronyme": "GARI",
    "date_creation": "2004-11-02 00:00:00",
    "accord_cadre": "0004/000183",
    "adresse": "Menaka",
    "domaines": "Conserver les eaux et sols, exploitation des eaux souterraines, sécurité alimentaire, éducation, santé scolaire, micro-finance, l'élévage, l'alphabétisation",
    "zones": "Tombouctou, Gao, Kidal et le district de Bamako",
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association NOVA-MALI",
    "acronyme": "NOVA-MALI",
    "date_creation": "2020-08-21 00:00:00",
    "accord_cadre": 1675,
    "adresse": "Gao",
    "domaines": "Santé, éducation, la promotion de la paix, et la transformation des conflits,les droits humais, l'environnements, l'agriculture et AGR",
    "zones": "Kays, Koulikoro, Mopti, Segou, Tombouctou, Gao, Kidal et le district de Bamako",
    "responsable": "Almahamoudou"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Talilt/Aide",
    "acronyme": "Talilt/Aide",
    "date_creation": "2023-09-27 00:00:00",
    "accord_cadre": 2017,
    "adresse": "Kidal",
    "domaines": "Santé, l'éducation, l'environnement, lutte contre le chomage, l'agriculture, les AGR, la promotion du genre",
    "zones": "Mopti, Tombouctou, Gao, Kidal, Ménaka et le district de Bamako",
    "responsable": "Najim"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association des Jeunes pour l'Assistance d'Aide Humanitaire-Mali",
    "acronyme": "AJAAH",
    "date_creation": "2020-05-15 00:00:00",
    "accord_cadre": 1657,
    "adresse": "Bamako",
    "domaines": "l'éducation, la santé, humanitaire, le droit de l'homme, Agriculture, environnement et l'économie",
    "zones": "Koulikoro, Mopti, Segou, Sikasso, Gao, Kidal et le district de Bamako",
    "responsable": "Sidibé"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association A.SORO",
    "acronyme": "A.SORO",
    "date_creation": "2018-12-12 00:00:00",
    "accord_cadre": 1542,
    "adresse": "Bamako",
    "domaines": "Santé de la reproduction, éducation, amélioration des conditons de vie des populations rurales, des AGR",
    "zones": "Kays, Koulikororo, Sikasso, Segou, Mopti et le district de Bamako",
    "responsable": "Coulibaly "
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association pour le Developpement Intégré et Durable",
    "acronyme": "ADID",
    "date_creation": "2018-11-22 00:00:00",
    "accord_cadre": 1532,
    "adresse": "Bamako",
    "domaines": "Agriculture, Elevage, lutte contre l'insécurité alimentaire, éducation,santé, protection de l'environnrmrnt, AGR et hydrolique",
    "zones": "Kays, Koulicoro, Sikasso, Kidal et le district de Bamako",
    "responsable": "Samake"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Action pour la Formation et l'auto-promotion Rurale",
    "acronyme": "AFAR",
    "date_creation": "2007-12-10 00:00:00",
    "accord_cadre": "0062/000547",
    "adresse": "Bamako",
    "domaines": "Education, Recherche,Action, Appui et Assistance aux intiatives locales",
    "zones": "Toutes les regions du Mali",
    "responsable": "Cissé"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association GUNA-KAANEY",
    "acronyme": "AGK",
    "date_creation": "2023-08-29 00:00:00",
    "accord_cadre": 2011,
    "adresse": "Daka Djerel",
    "domaines": "Santé, éducation, agriculture,assainissement, la resilliance, protection de l'environnement,Sécurité alimentaire, l'élevage, les AGR\n",
    "zones": "Mopti, Menaka, Gao, Tombouctou,Taoudenit et le district de Bamako",
    "responsable": "Narba"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Action Humanitaire pour les Initiatives de Développement Nord-Sud au Sahel",
    "acronyme": "AHDI-NORD-SUD SAHEL",
    "date_creation": "2023-10-23 00:00:00",
    "accord_cadre": 2024,
    "adresse": "GOUNDAM",
    "domaines": "Agriculture, Elevage, lutte contre l'insécurité alimentaire, éducation,santé, protection de l'environnrmrnt, AGR et hydrolique",
    "zones": "Mopti, Menaka, Gao, Tombouctou,Taoudenit et le district de Bamako",
    "responsable": "Iknad"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association ARC-EN CIEL pour le Deloppement",
    "acronyme": "AAPD",
    "date_creation": "2024-05-10 00:00:00",
    "accord_cadre": 2073,
    "adresse": "Bamako",
    "domaines": "L'hydrolique, l'environnrmrnt, l'hygiène, la santé, l'éducation; l'énergie renouvelable, lutte contre l'exclusion, la promotion du genre, les affaires sociles, la sécurité alimentaire,l'agriculture, les AGR",
    "zones": "Kays, Koulikororo, Sikasso, Segou, Mopti, Koutiala, Kita , Gao et le district de Bamako",
    "responsable": "Mariko "
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association AWAAREY de GABERO",
    "acronyme": "ASSALWAG",
    "date_creation": "2018-10-16 00:00:00",
    "accord_cadre": 1504,
    "adresse": "Bamako",
    "domaines": "Education, santé, assainissement, environnement, Agriculture, hydrolique, AGR",
    "zones": "Mopti, Menaka, Gao, Tombouctou,Taoudenit et le district de Bamako",
    "responsable": "Sidibe"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association Actions Tartit pour le Développement Durable",
    "acronyme": "ATDED",
    "date_creation": "2018-11-01 00:00:00",
    "accord_cadre": 1509,
    "adresse": "Gao",
    "domaines": "Assainissement, éducation, santé, protection sociale",
    "zones": "Tombouctou, Gao, Kidal et Tessalit",
    "responsable": "Maiga "
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Centre de recherche et d'expertise pour le développement local",
    "acronyme": "CREDEL",
    "date_creation": "2021-05-14 00:00:00",
    "accord_cadre": 1747,
    "adresse": "Bamako",
    "domaines": "Santé, éducation, protection de l'environnement, les affaires sociales, la bonne gouvernance, l'agriculture, promotion de l'entreprenariat, promotion des AGR, energie renouvelable",
    "zones": "Kays, Segou, Mopti, Menaka, Nioro, Gao, Tombouctou, Kidal, Menaka, San, Koutiala et le district de Bamako",
    "responsable": "Traore"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Développement Holistique Africa",
    "acronyme": "DHA",
    "date_creation": "2008-03-17 00:00:00",
    "accord_cadre": "0336/001307",
    "adresse": "Bamako",
    "domaines": "Technologies appropriées en recherche, action en cybernétique traditionne, santé, éducation, environnement,agriculture, élévage, arts et culture, microfinance, protection, de la femme et de l'enfant, sensibilisation pour le changement de comportementet enfin appui conseil psychologique parapsychologique",
    "zones": "Toute les regions du Mali et district de Bamako",
    "responsable": "Togo"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association des Jeunes Contre l'Enrolement dans le terrorisme",
    "acronyme": "AJCET",
    "date_creation": "2021-07-08 00:00:00",
    "accord_cadre": 1770,
    "adresse": "Bamako",
    "domaines": "La santé, l'éducation, l'Agriculture, les Affaires sociales, la promotion des droits de humains,  promotion de l'emploi et de la culture lutte contre le terrorisme, la Protection de l'environnement, l'Hydraulique, l'assainissement, les activités, génératrices de Revenus (AGR)",
    "zones": "Kays, Koulikororo, Sikasso, Segou, Mopti, Menako, Tombouctou, Taoudenit, Kita , Gao et le district de Bamako",
    "responsable": "Cissé"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Groupe de Formation, Consultation et Etude",
    "acronyme": "G.Force",
    "date_creation": "2008-01-28 00:00:00",
    "accord_cadre": "0145/001978",
    "adresse": "Bamako",
    "domaines": "Education, formation, appui, conseil, renforcement des capacité, decentralisation, promotion de la femme et de l'enfant, emploi des jeunes ruraux, santé, environnement, sécurité alimentaire, agro-pastorale.",
    "zones": "Tout le territoire national",
    "responsable": "Diarra"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association Groupe de Reflexion pour les Initiativesde Développement",
    "acronyme": "GRIDev",
    "date_creation": "2019-12-23 00:00:00",
    "accord_cadre": 1619,
    "adresse": "Gao",
    "domaines": "La santé, formation, l'information, l'appui aux organisations paysannes, l'environnement, sensibilisation, la nutrition, fourniture de l'eau potable, production agricole et les AGR",
    "zones": "Kays, Koulicoro, Sikasso, Segou, Gao, Tombouctou, Mopti et le district de Bamako",
    "responsable": "Maiga"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Harmonie du Développement au Sahel",
    "acronyme": "HDS",
    "date_creation": "2008-07-14 00:00:00",
    "accord_cadre": "0692/0243",
    "adresse": "Mopti",
    "domaines": "Envronnement, hydraulique, agro-pastoral, sanitaire, artisanat, recherche et formation",
    "zones": "Ensemble du territoire du Mali",
    "responsable": "Sagara"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association pour la Promotion de la Santé de la Mère et de l'enfant",
    "acronyme": "IMANEH MALI",
    "date_creation": "2011-01-06 00:00:00",
    "accord_cadre": NaN,
    "adresse": "Bamako",
    "domaines": "Promotion de la santé",
    "zones": "Ensemble du territoire du Mali",
    "responsable": "Keita "
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "INFA PLUSINFA PLUS",
    "acronyme": "INFO PLUS",
    "date_creation": "2008-08-22 00:00:00",
    "accord_cadre": "0798/002004",
    "adresse": "Bamako",
    "domaines": "Developpement durable, envrironnement, éducation-formation, apui à la decentralisation",
    "zones": "Koulicoro, Gao, Tombouctou, Sikasso, Segou et le district de Bamako",
    "responsable": "Hamma"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association NMA-DEVELOPPEMENT",
    "acronyme": "NEMADEV",
    "date_creation": "2023-03-10 00:00:00",
    "accord_cadre": 1978,
    "adresse": "Bamako",
    "domaines": "Santé, l'education, la bonne gouvernance, les affaires sociales, l'hydraulique, l'environnement, l'hygiène, l'energie renouvelable, la promotion du genre,les affaire sociale, la sécurité alimentaire, l'agriculture, l'élévage, la pêche et les AGR",
    "zones": "ays, Koulikoro,Sikasso, Mopti, Segou, Tombouctou,Gao, Kidal, Menaka et le district de Bamako",
    "responsable": "Dougouna "
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Organisation Malienne pour le Développement Durable au Sahel",
    "acronyme": "OMDDS",
    "date_creation": "2024-02-05 00:00:00",
    "accord_cadre": 2047,
    "adresse": "Doentza",
    "domaines": "Education, santé, environnement, l'agriculture, assainissement, l'élévage, dévéloppement communautaire, promotion du genre, le renforcement de capacité, sécurité alimentaire, prévention et la gestion des conflits, protection, lutte contre l'exclusion, bonne gouvernance, les AGR",
    "zones": "Koulikoro, Mopti, Segou, Sikasso, Gao, Kidal, menaka et le district de Bamako",
    "responsable": "Cissé"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association pour la Promotion et l'Apui au Développement",
    "acronyme": "PADL",
    "date_creation": "2022-10-20 00:00:00",
    "accord_cadre": 1950,
    "adresse": "Bamako",
    "domaines": "L'appui au développement local et communautaire, la santé, l'éducation, la sauvegarde de l'environnement, l'agriculture, les affaires sociales et les AGR",
    "zones": "Mopti, Tombouctou, Gao, Kidal, Taoudenit, Koutiala, San, Bougouni et le district de Bamako",
    "responsable": "Traore"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association Saheliennes pour la Justice, la Gouvernance, la Paix, et la sécurité",
    "acronyme": "SAGOPS",
    "date_creation": "2022-09-14 00:00:00",
    "accord_cadre": 1936,
    "adresse": "Kidal",
    "domaines": "La santé, l'éducation, la sauvegarde, de l'environnement, l'assainissement, la justice te paix, l'hydraulique, l'energie renouvelable, promotion des droits humains et les AGR",
    "zones": "ays,Sikasso, Mopti, Segou, Tombouctou,Gao, Kidal et le district de Bamako",
    "responsable": "Toure"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Sahélienne d'Apui aux Initiatives de Base",
    "acronyme": "SAIB",
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": "Bamako",
    "domaines": "Education, formation, alphabétisation, santé, nutrition, hydraulique, agriculture, micro-projet(AGR), appui à la décentralisation,aménagement des pisytesrurales",
    "zones": "Ensemble du territoire du Mali",
    "responsable": "Cissé"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Save Our Sahel",
    "acronyme": "SOS",
    "date_creation": "2023-10-23 00:00:00",
    "accord_cadre": 2025,
    "adresse": "Menaka",
    "domaines": "Santé, l'éducation, protection de l'environnement, ll'assainissement, l'élévage, les AGR, lsécurité alimentaire, promotion du genre et la protection ",
    "zones": "Kays, Koulikoro, Sikasso, Segou, Mopti, Tombouctou, Gao, Kidal, Douentza, Nioro, Nara, Bandiangara et le district de Bamako",
    "responsable": "Abdoulahi"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Sahel Etude Action pour le Développement",
    "acronyme": "SEAD",
    "date_creation": "2007-12-03 00:00:00",
    "accord_cadre": "0035/000122",
    "adresse": "Gao",
    "domaines": "Agriculture, élévage, hydraulique, reboissement, artisanat, santé, recherche et développement, éducation rurale",
    "zones": "Gao",
    "responsable": "Dicko"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association Tassaq Daouna",
    "acronyme": "Daouna",
    "date_creation": "2023-03-31 00:00:00",
    "accord_cadre": 1979,
    "adresse": "Tombouctou",
    "domaines": "Lsanté, l'éducation, l'agriculture, l'élévage, promotion du genre, l'assainissement, l'environnement, la defense humaine, la promotion des droits humains et les AGR",
    "zones": "Mopti, Tombouctou, Gao, Ménaka, Kidal et district de Bamako",
    "responsable": "Mohamed"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association TILE KOURA pour la Promotion des Femmes Rurales",
    "acronyme": "ATC",
    "date_creation": "2023-07-03 00:00:00",
    "accord_cadre": 1998,
    "adresse": NaN,
    "domaines": "La santé, éducation, la violence basée sur le genre, renforcement des capacité, développement communautaire, l'agriculture biologique et écologique, l'hydrolique, environnement, AGR",
    "zones": "Kays, Koulikoro, Sikasso, Ségou, Mopti, Tombouctou, Gao, Kidal, Ménaka et le district de Bamako",
    "responsable": "Marie"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Association ALMOUBARAKA",
    "acronyme": "Almoubaraka",
    "date_creation": "2023-09-27 00:00:00",
    "accord_cadre": 2022,
    "adresse": "Gandé Tama (Youwarou)",
    "domaines": "Santé, éducation, entreprenariat des jeunes, bonne gouvernance, renforcement des capacités, promotion des AGR",
    "zones": "Koulikoro, Sikasso, Ségou, Mopti, Tombouctou, Gao, Kidal, Ménaka et le district de Bamako",
    "responsable": "Cissé"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Associel Emergent",
    "acronyme": "A.S.EM",
    "date_creation": "2025-04-17 00:00:00",
    "accord_cadre": 2060,
    "adresse": "Kati Fouga",
    "domaines": "La protection de l'environnement, la santé, l'agriculture, l'hydraulique, les affaires sociales, la bonne gouvernance, les AGR",
    "zones": "Kays, Koulikoro, Sikasso, Ségou, Mopti, Tombouctou, Gao, Kidal, Ménaka et le district de Bamako",
    "responsable": "Guindo"
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": "Terre Douce d'Afrique ",
    "acronyme": "TDA",
    "date_creation": "2017-10-11 00:00:00",
    "accord_cadre": 1452,
    "adresse": "Bamako",
    "domaines": "Education, décentralisation, santé, protection de l'environnement, sécurité alimentaire, Eau, assainissement, protection de l'enfant",
    "zones": "Kayes, Kkoro, Sikasso, Mopti, et district de Bamako",
    "responsable": "Sékou"
  },
  {
    "nom": "Cabinet de Recherches Actions pour le Developpement Endogene",
    "acronyme": "CRADE",
    "date_creation": "2008-01-28 00:00:00",
    "accord_cadre": "0150/000214",
    "adresse": "Bamako",
    "domaines": "Education, Santé, Décentralisation, hydraulique villageoise, formation",
    "zones": "Sur toute l'étendue du territoire national",
    "responsable": "Abdoulkadri"
  },
  {
    "nom": "Union pour un Avenir Ecologique et Solidaire",
    "acronyme": "UAVES",
    "date_creation": "2009-09-01 00:00:00",
    "accord_cadre": 1095,
    "adresse": "Gao",
    "domaines": "Agrocologie, aide d'urgence, environnement, Santé, Education, agriculture, elevage, peche, genre, artisanat, tourisme ",
    "zones": "Sur toute l'étendue du territoire national",
    "responsable": "Adama"
  },
  {
    "nom": "Association TEKELTTE de Tessalit",
    "acronyme": "TEKELTTE",
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": "Tessalit",
    "domaines": "Santé, Education, Formation, Hydraulique villageoise et pastorale,  renforcement des capacités, protection de l'environnement, Elevage, insertion socio-professionnelle, AGR",
    "zones": "Gao, Tombouctou, Kidal, Taoudéni",
    "responsable": "Sidigaly "
  },
  {
    "nom": "Association SELLE",
    "acronyme": "SELLE",
    "date_creation": "2008-01-07 00:00:00",
    "accord_cadre": "0098/000752",
    "adresse": "Bamako",
    "domaines": "Environnement, éducation, formation, alphabétisation, santé, hydraulique, elevage, promotion féminine, aides d'urgence",
    "zones": "Tombouctou, Gao, Kidal",
    "responsable": "Fatoumata "
  },
  {
    "nom": "Action pour le Développementrt du Mali",
    "acronyme": "ADM",
    "date_creation": "2021-03-30 00:00:00",
    "accord_cadre": 1733,
    "adresse": "Bamako",
    "domaines": NaN,
    "zones": NaN,
    "responsable": "Nouhoum "
  },
  {
    "nom": "Association Tanfo de Kalanda",
    "acronyme": "ATK",
    "date_creation": "2008-01-28 00:00:00",
    "accord_cadre": "140/2002",
    "adresse": "Bamako",
    "domaines": "Agriculture, elevvage, artisanat, environnement, santé, éducation, art et culture, formation, alphabétisation",
    "zones": "Toute l'étendue du territoire national",
    "responsable": "Abdellahi"
  },
  {
    "nom": "Nouveau horizon",
    "acronyme": "NOHO",
    "date_creation": "03 Dcembre 2017",
    "accord_cadre": "0038/001193",
    "adresse": NaN,
    "domaines": "Education, formation, elevage, agriculture, environnement, hydraulique, promotion femmes et enfants, affaires socviales, santé, microfinance, AGR, Gouvernance et gestion des conflits",
    "zones": "Toute l'étendue du territoire national",
    "responsable": "Mohomodou"
  },
  {
    "nom": "Groupe de Recherches Actions Formation pour le Développement Local au Mali",
    "acronyme": "GRAFODEL",
    "date_creation": "2024-01-15 00:00:00",
    "accord_cadre": 2045,
    "adresse": NaN,
    "domaines": "action humanitaire, Santé, Education, agriculture, hygiène-assainissement, protection de l'environnement, Sécurité alimentaire, bonne gouvernance, renforcement des capacités, energies renouvelables, affaires sociales, promotion du genre, hydraulique, plaidoyer, promotion des AGR",
    "zones": "Kayes, Kkoro, Sikasso, Ségou, Mopti, Tombouctou, Gao, Kidal, Ménaka, Douentza, San, Bandiagara, Taoudeni et le dictrict de Bamako",
    "responsable": "Ousmane "
  },
  {
    "nom": "Collectif Cri de Cœur",
    "acronyme": "CCC",
    "date_creation": "2019-06-13 00:00:00",
    "accord_cadre": 1581,
    "adresse": NaN,
    "domaines": "Santé, Education, assainissement, Agriculture,  Hydraulique, AGR,  envirennement",
    "zones": " Kkoro, Sikasso,  Mopti, Tombouctou, Gao, Kidal, Ménaka Taoudeni et le dictrict de Bamako",
    "responsable": "Almahadi"
  },
  {
    "nom": "Association pour le Développement inclusif et intégral",
    "acronyme": "ADII Mamli",
    "date_creation": "2024-04-17 00:00:00",
    "accord_cadre": 2667,
    "adresse": NaN,
    "domaines": "Santé reproductive et sexuelle. ✓ Éducation (information, sensibilisation, communication). ✓ Environnement. ✓ Agriculture (maraîchage). ✓ Hydraulique. ✓ Hygiène. ✓ Santé. ✓ Éducation. ✓ Énergie renouvelable. ✓ Lutte contre la violence basée sur le genre (VBG). ✓ Promotion du genre. ✓ Affaires sociales. ✓ Sécurité alimentaire. ✓ Agriculture. ✓ Lutte contre l'excision. ✓ Activités génératrices de revenus (AGR).",
    "zones": "Kayes. ✓ Sikasso. ✓ Ségou. ✓ Mopti. ✓ Gao. ✓ Tombouctou. ✓ Taoudenni. ✓ Ménaka. ✓ Kidal. ✓ District de Bamako.",
    "responsable": "Achou"
  },
  {
    "nom": "imidierar (Les vulnérables)",
    "acronyme": "imidierar",
    "date_creation": "29 12 2016",
    "accord_cadre": 1401,
    "adresse": NaN,
    "domaines": "Education, Santé, elevage; AGR, protection",
    "zones": "région de kidal",
    "responsable": "Checkna"
  },
  {
    "nom": NaN,
    "acronyme": "Iamaleh",
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  },
  {
    "nom": NaN,
    "acronyme": NaN,
    "date_creation": "nan",
    "accord_cadre": NaN,
    "adresse": NaN,
    "domaines": NaN,
    "zones": NaN,
    "responsable": NaN
  }
];

export default membersData;