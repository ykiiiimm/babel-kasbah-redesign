// Multilingual Dictionary for Laboratoire BAB EL KASBAH
// Supported Languages: French (fr), Arabic (ar), English (en)

const translations = {
  fr: {
    meta: {
      title: "Laboratoire BAB EL KASBAH — Biologie médicale · Dr. CHELLAOUI Said",
      description: "Laboratoire BAB EL KASBAH à Taroudant — Dr. CHELLAOUI Said, spécialiste en biologie clinique. Analyses médicales de pointe, plateau technique moderne et espace patient."
    },
    mobile: {
      drawerKicker: "BAB EL KASBAH",
      drawerTitle: "À votre écoute.",
      navVisit: "Préparer ma visite",
      navInfo: "Le laboratoire",
      drawerIntern: "Postuler pour un stage",
      drawerCall: "Appeler le laboratoire",
      hours: "Lun. — Sam. · 07:00 — 18:00",
      heroCopy: "Laboratoire d’analyses médicales · Taroudant",
      ctaContact: "Prendre rendez-vous",
      analysesKicker: "02 / CATALOGUE",
      analysesHelpTitle: "Vous ne trouvez pas votre analyse ?",
      analysesHelpSub: "Notre équipe peut vous orienter directement.",
      analysesHelpLink: "Nous écrire",
      visitKicker: "03 / VOTRE VISITE",
      visitTitle: "Venir l’esprit tranquille.",
      visitLead: "Tout ce qu’il faut savoir avant votre passage au laboratoire.",
      visitOpen: "Ouvert aujourd’hui",
      visitDays: "Du lundi au samedi",
      visitS1Title: "Avant de venir",
      visitS1Desc: "Pour certaines analyses, un jeûne de 8 à 12 heures est conseillé. Un doute ? Appelez-nous avant de vous déplacer.",
      visitS2Title: "Sur place",
      visitS2Desc: "La majorité des prélèvements se fait sans rendez-vous, dans un espace calme et accueillant.",
      visitS3Title: "Après le prélèvement",
      visitS3Desc: "Les résultats sont validés avec soin. Les délais varient selon le type d’analyse.",
      visitCallBtn: "Appeler avant ma visite",
      visitMapBtn: "Itinéraire vers le laboratoire",
      visitFindUs: "Nous trouver",
      visitAddress: "Av. Moulay Rachid, face à l’hôpital Mokhtar Soussi",
      visitCity: "Taroudant",
      contactKicker: "04 / CONTACT",
      contactFastMsg: "MESSAGE RAPIDE",
      contactReply: "On vous répond dès que possible.",
      contactFixed: "Fixe",
      contactMobile: "Portable",
      infoKicker: "05 / LE LABORATOIRE",
      infoTitle: "La science, avec une vraie attention.",
      infoLead: "Une équipe engagée pour rendre la biologie médicale plus claire, plus humaine et plus fluide.",
      infoDir: "Direction médicale",
      faqKicker: "QUESTIONS FRÉQUENTES",
      faqTitle: "Les réponses essentielles.",
      langKicker: "LANGUE",
      langTitle: "Choisissez votre langue."
    },
    onboarding: {
      welcome: "Bienvenue.",
      kicker: "BIENVENUE · MARHABAN · WELCOME",
      chooseLanguage: "Choisissez votre langue",
      subtitle: "Portail officiel de biologie médicale et analyses cliniques",
      continue: "Accéder au site",
      tagline: "Laboratoire de Biologie Médicale · Taroudant",
      badgeTitle: "Biologie Médicale de Précision",
      badgeSub: "Plateau Technique Moderne · Taroudant",
      frName: "Français",
      frDesc: "Site en français",
      arName: "العربية",
      arDesc: "الموقع باللغة العربية",
      enName: "English",
      enDesc: "Website in English"
    },
    nav: {
      home: "Accueil",
      expertise: "Expertise",
      analyses: "Analyses",
      team: "Équipe",
      results: "Résultats",
      reviews: "Avis",
      faq: "FAQ",
      contact: "Contact",
      map: "Plan d'accès"
    },
    header: {
      cta: "Postuler pour un stage",
      ctaAria: "Postuler pour un stage au laboratoire",
      openMenu: "Ouvrir le menu de navigation"
    },
    hero: {
      title: "Votre santé.",
      titleEm: "Notre précision.",
      lead: "Laboratoire d'analyses médicales sous la direction du <strong>Dr. CHELLAOUI Said</strong>, spécialiste en biologie clinique. Plateau technique moderne, résultats rapides en ligne et accueil sans rendez-vous.",
      imgAlt: "Laboratoire BAB EL KASBAH moderne et équipé"
    },
    ticker: [
      "Analyses de routine",
      "Hématologie & Cytologie",
      "Biochimie Clinique",
      "Immunologie & Sérologie",
      "Microbiologie Médicale",
      "Hormonologie & Marqueurs",
      "Plateau Automatisé 24h",
      "Biologie Médicale Taroudant"
    ],
    expertise: {
      kicker: "01 / L'ADN BABEL",
      title: "La science, avec",
      titleSpan: "une vraie attention.",
      body: "Nous voulons rendre la biologie médicale plus claire, plus humaine et plus fluide. Derrière chaque résultat, il y a une personne, un besoin et une décision importante.",
      imgAlt: "Plateau technique automatisé du laboratoire",
      card1Title: "Une biologie<br>qui se lit facilement.",
      card1Body: "Des informations structurées, des parcours sans friction et des services conçus autour des usages réels des patients.",
      card2Title: "La technologie<br>au bon endroit.",
      card2Body: "Automatisation et expertise clinique travaillent ensemble pour sécuriser chaque étape du parcours analytique."
    },
    analyses: {
      kicker: "02 / ANALYSES",
      title: "Trouvez votre analyse.",
      lead: "Recherchez par nom, domaine ou besoin. L'interface est pensée pour aller droit à l'essentiel.",
      searchPlaceholder: "Ex. glycémie, NFS, cholestérol…",
      searchAria: "Rechercher une analyse",
      filterAll: "Toutes",
      filterRoutine: "Routine",
      filterHormones: "Hormones",
      filterImmuno: "Immunologie",
      filterMicro: "Microbiologie",
      cards: [
        {
          code: "NFS · 01",
          title: "Numération formule sanguine",
          body: "Globules, plaquettes et paramètres hématologiques.",
          searchKeywords: "nfs numération formule sanguine blood count hématologie"
        },
        {
          code: "GLY · 02",
          title: "Glycémie",
          body: "Dosage du glucose sanguin à jeun ou post-prandial.",
          searchKeywords: "glycemie glucose sucre diabete"
        },
        {
          code: "LIP · 03",
          title: "Bilan lipidique",
          body: "Cholestérol total, HDL, LDL, triglycérides.",
          searchKeywords: "bilan lipidique cholesterol triglycerides hdl ldl graisse"
        },
        {
          code: "TSH · 04",
          title: "TSH ultrasensible",
          body: "Exploration complète de la fonction thyroïdienne.",
          searchKeywords: "tsh hormones thyroide goitre endocrino"
        },
        {
          code: "FER · 05",
          title: "Ferritine",
          body: "Évaluation précise des réserves en fer de l'organisme.",
          searchKeywords: "ferritine hormones fer anemie fatigue"
        },
        {
          code: "CRP · 06",
          title: "CRP",
          body: "Marqueur biologique sensible de l'inflammation aiguë.",
          searchKeywords: "crp inflammation immunologie infection"
        },
        {
          code: "VD · 07",
          title: "Vitamine D",
          body: "Dosage de la 25-OH vitamine D pour le bilan osseux.",
          searchKeywords: "vitamine d hormones os fatigue immunite"
        },
        {
          code: "MIC · 08",
          title: "Culture microbiologique",
          body: "Recherche, isolement et antibiogramme des germes.",
          searchKeywords: "culture microbiologie bacteriologie germes antibiogramme ecbu"
        }
      ],
      emptyTitle: "Aucune analyse trouvée.",
      emptyBody: "Essayez un autre terme (ex. glycémie, NFS, ferritine...).",
      emptyReset: "Réinitialiser la recherche"
    },
    team: {
      kicker: "03 / L'ÉQUIPE & DIRECTION",
      title: "Des experts derrière",
      titleEm: "chaque résultat.",
      lead: "Sous la direction du <strong>Dr. CHELLAOUI Said</strong>, notre équipe pluridisciplinaire conjugue rigueur clinique, technologie de pointe et accompagnement personnalisé.",
      imgAlt: "L'Équipe & Direction - Laboratoire Babel Kasbah"
    },
    results: {
      kicker: "ESPACE PATIENT",
      title: "Vos résultats,",
      titleLine2: "au même endroit.",
      stat1Label: "analyses / an",
      stat2Label: "biologistes & experts",
      stat3Label: "délai moyen de rendu",
      stat4Label: "patients satisfaits"
    },
    voices: {
      kicker: "04 / VOIX DE PATIENTS",
      title: "Ils nous font",
      titleEm: "confiance.",
      lead: "Des parcours simples, des résultats clairs, un accompagnement humain.",
      reviews: [
        {
          quote: "« Prise en charge rapide et sans attente, équipe très professionnelle, et mes résultats étaient disponibles dès le lendemain matin en ligne. »",
          author: "Salma R.",
          role: "Patiente · bilan complet"
        },
        {
          quote: "« Un accueil chaleureux et des explications claires sur mon bilan. On sent une vraie rigueur derrière chaque résultat. »",
          author: "Youssef E.",
          role: "Patient · bilan de routine"
        },
        {
          quote: "« Des comptes rendus structurés et rapides : un vrai confort pour le suivi de mes patients. Je recommande sans réserve. »",
          author: "Dr. Imen T.",
          role: "Médecin prescripteur"
        }
      ]
    },
    faq: {
      kicker: "05 / QUESTIONS FRÉQUENTES",
      title: "Tout ce qu'il faut",
      titleEm: "savoir.",
      lead: "Une question spécifique ? Notre équipe vous répond au 08 08 504 833 ou au 06 23 960 756.",
      items: [
        {
          q: "Dois-je venir à jeun pour une prise de sang ?",
          a: "Cela dépend de l'analyse. Un jeûne de 8 à 12 h est recommandé pour la glycémie et le bilan lipidique. Pour la plupart des autres examens, ce n'est pas nécessaire. Les consignes précises vous sont rappelées lors de votre contact."
        },
        {
          q: "Sous quel délai puis-je recevoir mes résultats ?",
          a: "La majorité des analyses de routine est rendue sous 24 h. Certains dosages spécialisés peuvent nécessiter 48 à 72 h. Vous êtes notifié dès la validation biologique par SMS et e-mail."
        },
        {
          q: "Faut-il prendre rendez-vous pour une prise de sang ?",
          a: "La grande majorité des analyses de routine s'effectue sans rendez-vous, du lundi au samedi dès 07:00. Vous pouvez également nous contacter si vous préférez planifier votre venue."
        },
        {
          q: "Comment accéder à mon espace résultats ?",
          a: "Un lien sécurisé vous est envoyé par SMS et e-mail après votre prélèvement. Vous pouvez consulter vos comptes rendus, suivre vos examens en cours et télécharger vos résultats au format PDF."
        },
        {
          q: "Les analyses sont-elles couvertes par l'assurance ?",
          a: "Oui. Nous travaillons avec l'AMO, la CNSS, la CNOPS et la plupart des mutuelles partenaires. Une feuille de soins et une facture détaillée vous sont remises pour votre remboursement."
        }
      ]
    },
    contact: {
      kicker: "06 / CONTACT",
      title: "Parlons de",
      titleEm: "votre parcours.",
      lead: "Pour un rendez-vous, une question sur vos résultats ou des informations sur nos analyses, notre équipe est là.",
      directionLabel: "Direction",
      directionValue: "Dr. CHELLAOUI Said · Spécialiste en biologie clinique",
      phonesLabel: "Téléphones",
      emailLabel: "Email",
      addressLabel: "Adresse",
      addressValue: "Av. Moulay Rachid en face de l'hôpital Moukhtar Soussi — Taroudant",
      hoursLabel: "Horaires",
      hoursValue: "Lun — Sam · 07:00 — 18:00",
      formName: "Nom complet",
      formNamePlaceholder: "Votre nom et prénom",
      formPhone: "Téléphone",
      formPhonePlaceholder: "06XX XX XX XX",
      formSubject: "Votre demande",
      formSubjectOptions: [
        "Prendre rendez-vous",
        "Renseignement sur une analyse",
        "Question sur un résultat",
        "Autre demande"
      ],
      formMessage: "Message",
      formMessagePlaceholder: "Comment pouvons-nous vous aider ?",
      formSubmit: "Envoyer la demande",
      formSending: "Ouverture WhatsApp..."
    },
    map: {
      kicker: "07 / LOCALISATION & PLAN D'ACCÈS",
      title: "Nous trouver à",
      titleEm: "Taroudant.",
      lead: "Idéalement situé sur l'Avenue Moulay Rachid, directement en face de l'Hôpital Mokhtar Soussi.",
      openMap: "Ouvrir la carte ↗",
      openMapAria: "Ouvrir l'itinéraire vers le laboratoire sur Google Maps",
      iframeTitle: "Plan d'accès Laboratoire BAB EL KASBAH Taroudant"
    },
    footer: {
      copyright: "© 2026 Laboratoire BAB EL KASBAH — Dr. CHELLAOUI Said · Tous droits réservés"
    },
    whatsappTemplate: {
      header: "*Nouvelle demande - Laboratoire Babel Kasbah*",
      name: "Nom",
      phone: "Téléphone",
      subject: "Objet",
      message: "Message"
    },
    internship: {
      metaTitle: "Candidature de Stage — Laboratoire BAB EL KASBAH · Dr. CHELLAOUI Said",
      metaDescription: "Postulez pour un stage au Laboratoire BAB EL KASBAH à Taroudant. Formation pratique d'excellence sous la direction du Dr. CHELLAOUI Said.",
      heroBadge: "FORMATION & STAGES SCIENTIFIQUES",
      heroTitle: "Postuler pour un stage",
      heroTitleEm: "au Laboratoire.",
      heroLead: "Développez votre expertise au cœur d'un plateau technique moderne et automatisé sous la supervision du <strong>Dr. CHELLAOUI Said</strong>, spécialiste en biologie clinique. Nous accueillons les étudiants motivés pour des stages enrichissants et formateurs.",
      highlight1Title: "Encadrement Clinique",
      highlight1Desc: "Supervision directe et accompagnement scientifique par notre équipe de biologistes.",
      highlight2Title: "Plateau Moderne",
      highlight2Desc: "Pratique sur analyseurs automatisés récents en biochimie, hématologie et immunologie.",
      highlight3Title: "Validation & Convention",
      highlight3Desc: "Convention de stage rigoureuse et attestation officielle délivrée à l'issue du stage.",
      step1Title: "Informations Personnelles",
      step1Desc: "Coordonnées de contact du candidat",
      step2Title: "Parcours Académique",
      step2Desc: "Université et filière d'études",
      step3Title: "Détails du Stage",
      step3Desc: "Objectifs, dates et département souhaité",
      step4Title: "Documents & Fichiers",
      step4Desc: "CV obligatoire et pièces complémentaires",
      step5Title: "Protection des Données & Envoi",
      step5Desc: "Conformité légale et soumission",
      nameLabel: "Nom et Prénom *",
      namePlaceholder: "Ex. Sara El Idrissi",
      phoneLabel: "Numéro de Téléphone *",
      phonePlaceholder: "Ex. 06 12 34 56 78",
      emailLabel: "Adresse E-mail *",
      emailPlaceholder: "sara.idrissi@example.com",
      cityLabel: "Ville de Résidence Actuelle *",
      cityPlaceholder: "Ex. Taroudant, Agadir, Marrakech...",
      schoolLabel: "Université / Établissement Actuel *",
      schoolPlaceholder: "Ex. Faculté des Sciences Ibn Zohr, EST, FST, ISPITS...",
      degreeLabel: "Filière / Programme d'Études *",
      degreeOptions: [
        "Sélectionnez votre filière...",
        "Biologie Clinique / Analyses Médicales",
        "Biochimie & Biologie Moléculaire",
        "Microbiologie & Biotechnologie",
        "Sciences Biomédicales / Santé",
        "Chimie & Contrôle Qualité",
        "Pharmacie / Médecine",
        "Autre filière scientifique"
      ],
      yearLabel: "Niveau / Année d'Études *",
      yearOptions: [
        "Sélectionnez votre niveau...",
        "1ère année universitaire (Bac+1)",
        "2ème année / DEUG / DUT / BTS (Bac+2)",
        "3ème année / Licence Professionnelle ou Fondamentale (Bac+3)",
        "Master 1 (Bac+4)",
        "Master 2 / PFE / Ingénieur d'État (Bac+5)",
        "Doctorat / Résidence en biologie médicale"
      ],
      typeLabel: "Type de Stage *",
      typeOptions: [
        "Sélectionnez le type de stage...",
        "Stage PFE (Projet de Fin d'Études)",
        "Stage d'initiation / Découverte",
        "Stage technicien / Perfectionnement",
        "Stage de recherche / Master",
        "Stage d'observation"
      ],
      startDateLabel: "Date de Début Souhaitée *",
      durationLabel: "Durée Totale Envisagée *",
      durationOptions: [
        "Sélectionnez la durée...",
        "1 mois",
        "2 mois",
        "3 mois",
        "4 à 6 mois",
        "Plus de 6 mois"
      ],
      departmentLabel: "Département d'Intérêt Principal *",
      departmentOptions: [
        "Sélectionnez un département...",
        "Biochimie Clinique & Hormonologie",
        "Microbiologie, Bactériologie & Parasitologie",
        "Hématologie, Cytologie & Hémostase",
        "Immunologie & Sérologie Infectieuse",
        "Contrôle Qualité & Assurance Qualité",
        "R&D / Recherche Appliquée",
        "Polyvalent (Rotation sur l'ensemble des départements)"
      ],
      cvLabel: "Curriculum Vitae (CV) *",
      cvHint: "Format PDF obligatoire · Taille maximale : 5 Mo",
      cvDropText: "Glissez votre CV ici ou",
      cvBrowse: "Parcourir vos fichiers",
      coverLetterLabel: "Lettre de Motivation",
      coverLetterToggleFile: "Téléverser en PDF (Max 5 Mo)",
      coverLetterToggleText: "Rédiger en ligne",
      coverLetterDropText: "Glissez votre lettre de motivation en PDF ou",
      coverLetterTextPlaceholder: "Présentez brièvement vos motivations, vos compétences clés et ce que vous souhaitez apprendre durant votre stage au Laboratoire BAB EL KASBAH...",
      certificateLabel: "Attestation de Scolarité ou Convention",
      certificateHint: "Format PDF · Taille maximale : 5 Mo (Recommandé pour confirmer le statut étudiant)",
      certificateDropText: "Glissez votre attestation de scolarité ici ou",
      privacyNotice: "J'accepte que mes informations personnelles soient traitées et conservées par le Laboratoire BAB EL KASBAH pour l'étude exclusive de ma candidature de stage, conformément à la loi relative à la protection des données (Loi 09-08 / RGPD).",
      privacyRequired: "Vous devez accepter la politique de confidentialité pour postuler.",
      submitBtn: "Soumettre ma candidature",
      submitting: "Envoi de votre candidature en cours...",
      successTitle: "Candidature Enregistrée avec Succès !",
      successSub: "Votre dossier de stage a bien été transmis à la direction du Laboratoire BAB EL KASBAH.",
      refLabel: "Numéro de référence :",
      confirmDetailsTitle: "Récapitulatif de votre candidature",
      confirmEmailNotice: "Un accusé de réception automatique a été généré pour :",
      nextSteps: "La direction scientifique et le Dr. CHELLAOUI Said examineront votre dossier sous 48 à 72 heures. Vous serez recontacté(e) par téléphone ou par e-mail.",
      btnReturnHome: "Retour à l'accueil",
      btnNewSubmission: "Nouvelle candidature",
      fileSelected: "Fichier prêt :",
      fileSizeExceeded: "Le fichier dépasse la limite maximale autorisée de 5 Mo.",
      fileFormatInvalid: "Seul le format PDF est accepté pour ce document.",
      submitError: "Une erreur est survenue lors de l'envoi. Veuillez vérifier votre connexion et réessayer."
    }
  },

  ar: {
    meta: {
      title: "مختبر باب القصبة — التحاليل الطبية والبيولوجيا السريرية · د. شلاوي سعيد",
      description: "مختبر باب القصبة للتحاليل الطبية بتارودانت — تحت إدارة د. شلاوي سعيد، أخصائي في البيولوجيا السريرية. منصة تقنية متطورة، نتائج سريعة عبر الإنترنت واستقبال بدون موعد."
    },
    mobile: {
      drawerKicker: "مختبر باب القصبة",
      drawerTitle: "نحن في الاستماع.",
      navVisit: "تحضير زيارتي",
      navInfo: "المختبر",
      drawerIntern: "التقديم للتدريب",
      drawerCall: "اتصل بالمختبر",
      hours: "الإثنين — السبت · 07:00 — 18:00",
      heroCopy: "مختبر التحاليل الطبية · تارودانت",
      ctaContact: "حجز موعد",
      analysesKicker: "02 / قائمة التحاليل",
      analysesHelpTitle: "لم تجد التحليل الذي تبحث عنه؟",
      analysesHelpSub: "فريقنا مستعد لتوجيهك مباشرة.",
      analysesHelpLink: "راسلنا",
      visitKicker: "03 / زيارتكم",
      visitTitle: "زيارة بكل اطمئنان.",
      visitLead: "كل ما تحتاج لمعرفته قبل قدومك إلى المختبر.",
      visitOpen: "مفتوح اليوم",
      visitDays: "من الإثنين إلى السبت",
      visitS1Title: "قبل المجيء",
      visitS1Desc: "ينصح بالصيام من 8 إلى 12 ساعة لبعض التحاليل. هل لديك شك؟ اتصل بنا قبل الحضور.",
      visitS2Title: "في المختبر",
      visitS2Desc: "تتم أغلب التحاليل بدون موعد مسبق، في فضاء هادئ ومريح.",
      visitS3Title: "بعد التحليل",
      visitS3Desc: "تتم المصادقة على النتائج بعناية. تختلف الآجال حسب نوع التحليل.",
      visitCallBtn: "اتصل قبل الزيارة",
      visitMapBtn: "مسار المختبر",
      visitFindUs: "موقعنا",
      visitAddress: "شارع مولاي رشيد، قبالة مستشفى المختار السوسي",
      visitCity: "تارودانت",
      contactKicker: "04 / تواصل معنا",
      contactFastMsg: "رسالة سريعة",
      contactReply: "سنجيبك في أقرب وقت ممكن.",
      contactFixed: "هاتف ثابت",
      contactMobile: "هاتف محمول",
      infoKicker: "05 / المختبر",
      infoTitle: "العلم والدقة، بعناية إنسانية فائقة.",
      infoLead: "فريق ملتزم بجعل البيولوجيا الطبية أكثر وضوحاً، وقرباً، وسلاسة.",
      infoDir: "الإدارة الطبية",
      faqKicker: "أسئلة شائعة",
      faqTitle: "الإجابات الأساسية.",
      langKicker: "اللغة",
      langTitle: "اختر لغتك."
    },
    onboarding: {
      welcome: "مرحباً بكم.",
      kicker: "مرحباً بكم · BIENVENUE · WELCOME",
      chooseLanguage: "اختر لغتكم المفضلة",
      subtitle: "المنصة الرسمية للتحاليل الطبية والبيولوجيا السريرية",
      continue: "الدخول إلى الموقع",
      tagline: "مختبر باب القصبة للتحاليل الطبية · تارودانت",
      badgeTitle: "بيولوجيا طبية عالية الدقة",
      badgeSub: "منصة تقنية متطورة · تارودانت",
      frName: "Français",
      frDesc: "Site en français",
      arName: "العربية",
      arDesc: "الموقع باللغة العربية",
      enName: "English",
      enDesc: "Website in English"
    },
    nav: {
      home: "الرئيسية",
      expertise: "خبراتنا",
      analyses: "دليل التحاليل",
      team: "الفريق والإدارة",
      results: "فضاء النتائج",
      reviews: "آراء المرضى",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      map: "الموقع والوصول"
    },
    header: {
      cta: "التقديم على تدريب",
      ctaAria: "التقديم على تدريب مخبري",
      openMenu: "فتح قائمة التصفح"
    },
    hero: {
      title: "صحتكم أولويتنا.",
      titleEm: "دقتنا التزامنا.",
      lead: "مختبر التحاليل الطبية تحت إدارة <strong>الدكتور شلاوي سعيد</strong>، أخصائي في البيولوجيا السريرية. منصة تقنية حديثة ومؤتمتة، نتائج سريعة عبر الإنترنت واستقبال يومي بدون موعد مسبق.",
      imgAlt: "مختبر باب القصبة للتحاليل الطبية الحديثة بتارودانت"
    },
    ticker: [
      "التحاليل الروتينية",
      "أمراض الدم والخلايا",
      "الكيمياء الحيوية السريرية",
      "علم المناعة والمصليات",
      "الأحياء الدقيقة الطبية",
      "الهرمونات والدلالات الحيوية",
      "منصة تقنية مؤتمتة 24 ساعة",
      "البيولوجيا الطبية تارودانت"
    ],
    expertise: {
      kicker: "01 / هويتنا وقيمنا",
      title: "العلم والدقة،",
      titleSpan: "بعناية إنسانية فائقة.",
      body: "نسعى لجعل البيولوجيا الطبية أكثر وضوحاً وقرباً وسلاسة. وراء كل نتيجة تحليل، هناك شخص ينتظر وقرار علاجي مهم يستحق أعلى درجات الدقة والمسؤولية.",
      imgAlt: "المنصة التقنية المؤتمتة بالمختبر",
      card1Title: "نتائج واضحة<br>وسهلة الفهم للمريض.",
      card1Body: "تقارير طبية منظمة، مسار استقبال مريح، وخدمات رقمية مصممة خصيصاً لتلبية احتياجات المرضى اليومية.",
      card2Title: "تكنولوجيا حديثة<br>في خدمة التشخيص الطبي.",
      card2Body: "تكامل دقيق بين الأتمتة المتقدمة وخبرة الأطباء البيولوجيين لضمان أمان كل مرحلة من مراحل التحليل."
    },
    analyses: {
      kicker: "02 / دليل التحاليل الطبية",
      title: "ابحث عن تحليلك المخبري.",
      lead: "ابحث بالاسم، أو التخصص، أو الرمز الطبي. واجهة ذكية ومبسطة صُممت لتصل إلى ما تحتاجه مباشرة.",
      searchPlaceholder: "مثال: سكر الدم، فقر الدم، الكوليسترول...",
      searchAria: "البحث عن تحليل طبي",
      filterAll: "الكل",
      filterRoutine: "روتينية",
      filterHormones: "هرمونات",
      filterImmuno: "مناعة",
      filterMicro: "أحياء دقيقة",
      cards: [
        {
          code: "NFS · 01",
          title: "تعداد الدم الكامل (NFS)",
          body: "فحص الكريات البيضاء، الحمراء، الصفائح الدموية ومعايير أمراض الدم.",
          searchKeywords: "تعداد الدم الكامل nfs فقر الدم كريات حمراء صفائح هيموغلوبين"
        },
        {
          code: "GLY · 02",
          title: "سكر الدم (Glycémie)",
          body: "قياس تركيز الجلوكوز في الدم على الريق أو بعد الوجبات.",
          searchKeywords: "سكر الدم السكري glycémie glucose سكر"
        },
        {
          code: "LIP · 03",
          title: "تحليل الدهون الشامل",
          body: "الكوليسترول الكلي، الكوليسترول النافع (HDL)، الضار (LDL) والدهون الثلاثية.",
          searchKeywords: "الدهون الشامل الكوليسترول الدهون الثلاثية bilan lipidique cholesterol"
        },
        {
          code: "TSH · 04",
          title: "هرمون الغدة الدرقية (TSH)",
          body: "فحص فائق الحساسية لتقييم وتشخيص اضطرابات وظائف الغدة الدرقية.",
          searchKeywords: "هرمون الغدة الدرقية tsh الدرقية غدة هرمونات"
        },
        {
          code: "FER · 05",
          title: "الفيريتين (مخزون الحديد)",
          body: "تقييم دقيق لاحتياطي الحديد في الجسم وتشخيص فقر الدم الناتج عن نقصه.",
          searchKeywords: "الفيريتين مخزون الحديد ferritine فقر الدم حديد تعب"
        },
        {
          code: "CRP · 06",
          title: "بروتين سي التفاعلي (CRP)",
          body: "مؤشر بيولوجي دقيق وسريع للكشف عن الالتهابات والعدوى الحادة.",
          searchKeywords: "بروتين سي التفاعلي crp التهاب عدوى مناعة"
        },
        {
          code: "VD · 07",
          title: "فيتامين د (Vitamine D)",
          body: "قياس مستوى 25-هيدروكسي فيتامين د لصحة العظام والمناعة العامة.",
          searchKeywords: "فيتامين د vitamine d عظام مناعة مفاصل تعب"
        },
        {
          code: "MIC · 08",
          title: "الزرع الميكروبيولوجي",
          body: "الكشف عن الجراثيم، عزلها، وتحديد المضادات الحيوية الفعالة (Antibiogramme).",
          searchKeywords: "الزرع الميكروبيولوجي بكتيريا جراثيم مضاد حيوي بول ecbu culture"
        }
      ],
      emptyTitle: "لم يتم العثور على أي تحليل.",
      emptyBody: "يرجى تجربة كلمة بحث أخرى (مثال: سكر، فقر الدم، هرمون...).",
      emptyReset: "إعادة تعيين البحث"
    },
    team: {
      kicker: "03 / الفريق والإدارة الطبية",
      title: "كفاءات وخبرات علمية",
      titleEm: "وراء كل نتيجة.",
      lead: "تحت إشراف <strong>الدكتور شلاوي سعيد</strong>، يجمع فريقنا المتعدد التخصصات بين الدقة الطبية السريرية، أحدث التقنيات المخبرية، والاستماع الشخصي لكل مريض.",
      imgAlt: "فريق وإدارة مختبر باب القصبة للتحاليل الطبية"
    },
    results: {
      kicker: "فضاء المريض والنتائج",
      title: "نتائجكم المخبرية،",
      titleLine2: "في متناولكم دائماً.",
      stat1Label: "تحليل طبي / سنوياً",
      stat2Label: "بيولوجيون وخبراء مختبر",
      stat3Label: "متوسط تسليم النتائج",
      stat4Label: "مرضى راضون عن خدماتنا"
    },
    voices: {
      kicker: "04 / شهادات وآراء المرضى",
      title: "ثقتكم واطمئنانكم",
      titleEm: "مصدر فخرنا.",
      lead: "مسار سلس بدون انتظار، نتائج دقيقة وسريعة، وتوجيه طبي وإنساني مستمر.",
      reviews: [
        {
          quote: "« استقبال ممتاز وبدون أي انتظار. الطاقم الطبي محترف للغاية والنتائج كانت متوفرة على الإنترنت في صباح اليوم التالي. »",
          author: "سلمى ر.",
          role: "مريضة · فحص شامل"
        },
        {
          quote: "« تعامل راقٍ وتوضيحات وافية ومطمئنة حول نتائج الفحص. تشعر بجدية علمية حقيقية وانضباط في كل خطوة. »",
          author: "يوسف ع.",
          role: "مريض · فحوصات روتينية"
        },
        {
          quote: "« تقارير مخبرية دقيقة ومنظمة بدقة عالية وسرعة في الإنجاز؛ دعم حقيقي وراحة تامة لمتابعة مرضاي. أنصح به بشدة. »",
          author: "د. إيمان ت.",
          role: "طبيبة معالجة"
        }
      ]
    },
    faq: {
      kicker: "05 / الأسئلة الشائعة",
      title: "كل ما تحتاجون",
      titleEm: "معرفته.",
      lead: "هل لديكم استفسار محدد؟ فريقنا رهن إشارتكم عبر الهاتف 08 08 504 833 أو 06 23 960 756.",
      items: [
        {
          q: "هل يجب أن أكون صائماً قبل إجراء تحليل الدم؟",
          a: "يعتمد ذلك على نوع التحليل المطلوب. يوصى بالصيام لمدة تتراوح بين 8 إلى 12 ساعة لتحليل السكر وتحليل الدهون الشامل. بالنسبة لأغلب التحاليل الأخرى، الصيام غير ضروري. سيتم إرشادكم وتذكيركم بجميع التعليمات بدقة."
        },
        {
          q: "ما هو الوقت اللازم لاستلام نتائج التحاليل؟",
          a: "تسلم غالبية التحاليل الروتينية خلال أقل من 24 ساعة. قد تتطلب بعض الفحوصات الهرمونية أو الميكروبيولوجية التخصصية من 48 إلى 72 ساعة. يتم إشعاركم فور المصادقة الطبية على النتائج عبر رسالة نصية وبريد إلكتروني."
        },
        {
          q: "هل يتطلب إجراء الفحوصات حجز موعد مسبق؟",
          a: "تجرى الغالبية العظمى من التحاليل الروتينية مباشرة بدون موعد، من الإثنين إلى السبت ابتداءً من الساعة 07:00 صباحاً. كما يمكنكم التواصل معنا مسبقاً إذا كنتم تفضلون التنسيق المسبق."
        },
        {
          q: "كيف يمكنني الاطلاع على نتائجي عبر الإنترنت؟",
          a: "يصلكم رابط آمن ومباشر عبر رسالة نصية (SMS) وبريد إلكتروني بعد أخذ العينات مباشرة. يمكنكم مراجعة النتائج وتحميل التقرير الطبي بصيغة PDF وطباعته بكل سهولة وأمان."
        },
        {
          q: "هل التحاليل الطبية معوضة من طرف التأمين الصحي والتعاضديات؟",
          a: "نعم، بالتأكيد. نعمل في إطار التغطية الصحية الإجبارية (AMO، CNSS، CNOPS) وأغلب التعاضديات وشركات التأمين الخاصة الشريكة. تسلم لكم ورقة العلاج وفاتورة مفصلة لاسترجاع المصاريف."
        }
      ]
    },
    contact: {
      kicker: "06 / تواصل معنا",
      title: "نحن هنا من أجل",
      titleEm: "رعاية صحتكم.",
      lead: "لحجز موعد، أو الاستفسار عن نتائجكم، أو الحصول على معلومات حول أي فحص طبي، يسعد فريقنا باستقبالكم والإجابة عن أسئلتكم.",
      directionLabel: "الإدارة الطبية",
      directionValue: "د. شلاوي سعيد · أخصائي في البيولوجيا السريرية",
      phonesLabel: "أرقام الهاتف",
      emailLabel: "البريد الإلكتروني",
      addressLabel: "العنوان",
      addressValue: "شارع مولاي رشيد قبالة مستشفى المختار السوسي — تارودانت",
      hoursLabel: "أوقات العمل",
      hoursValue: "الإثنين — السبت · 07:00 — 18:00",
      formName: "الاسم الكامل",
      formNamePlaceholder: "الاسم العائلي والشخصي",
      formPhone: "رقم الهاتف",
      formPhonePlaceholder: "06XX XX XX XX",
      formSubject: "نوع الطلب",
      formSubjectOptions: [
        "حجز موعد لتحليل طبي",
        "استفسار حول تحليل مخبري",
        "سؤال حول نتيجة فحص",
        "طلب أو استفسار آخر"
      ],
      formMessage: "نص الرسالة",
      formMessagePlaceholder: "كيف يمكننا مساعدتكم؟ اكتب استفسارك هنا...",
      formSubmit: "إرسال الطلب",
      formSending: "جاري فتح واتساب..."
    },
    map: {
      kicker: "07 / الموقع وخريطة الوصول",
      title: "موقعنا في",
      titleEm: "تارودانت.",
      lead: "موقع استراتيجي وسهل الوصول بشارع مولاي رشيد، مباشرة قبالة مستشفى المختار السوسي الإقليمي.",
      openMap: "فتح الخريطة ↖",
      openMapAria: "فتح مسار الوصول إلى المختبر على خرائط جوجل",
      iframeTitle: "موقع مختبر باب القصبة تارودانت على خريطة جوجل"
    },
    footer: {
      copyright: "© 2026 مختبر باب القصبة للتحاليل الطبية — د. شلاوي سعيد · جميع الحقوق محفوظة"
    },
    whatsappTemplate: {
      header: "*طلب جديد عبر الموقع الإلكتروني - مختبر باب القصبة*",
      name: "الاسم",
      phone: "الهاتف",
      subject: "نوع الطلب",
      message: "الرسالة"
    },
    internship: {
      metaTitle: "طلب التقديم على تدريب — مختبر باب القصبة · د. شلاوي سعيد",
      metaDescription: "قدم طلبك لإجراء تدريب في مختبر باب القصبة بتارودانت. تكوين تطبيقي متميز تحت إشراف الدكتور شلاوي سعيد.",
      heroBadge: "التكوين والتدريب المخبري",
      heroTitle: "التقديم على تدريب",
      heroTitleEm: "بالمختبر.",
      heroLead: "طوروا خبراتكم العملية في قلب منصة تحاليل حديثة ومؤتمتة تحت إشراف <strong>الدكتور شلاوي سعيد</strong>، أخصائي في البيولوجيا السريرية. نرحب بالطلبة والباحثين الطموحين لخوض تجربة تدريبية نوعية وتطبيقية.",
      highlight1Title: "تأطير سريري مباشر",
      highlight1Desc: "إشراف دائم ومرافقة علمية من طرف أطباء وبيولوجيي المختبر.",
      highlight2Title: "منصة تقنية متطورة",
      highlight2Desc: "ممارسة عملية على أحدث أجهزة التحاليل المؤتمتة في الكيمياء الحيوية وأمراض الدم والمناعة.",
      highlight3Title: "اتفاقية وشهادة تدريب",
      highlight3Desc: "تأطير قانوني باتفاقية تدريب ومنح شهادة رسمية عند استكمال فترة التدريب بنجاح.",
      step1Title: "المعلومات الشخصية",
      step1Desc: "بيانات الاتصال المباشر بالمترشح",
      step2Title: "المسار الأكاديمي",
      step2Desc: "الجامعة أو المعهد والشعبة الدراسية",
      step3Title: "تفاصيل التدريب",
      step3Desc: "الأهداف، التواريخ والقسم المطلوب",
      step4Title: "الوثائق والمستندات",
      step4Desc: "السيرة الذاتية الإلزامية والوثائق الداعمة",
      step5Title: "حماية البيانات والإرسال",
      step5Desc: "الموافقة القانونية وإرسال الملف",
      nameLabel: "الاسم الكامل *",
      namePlaceholder: "مثال: سارة الإدريسي",
      phoneLabel: "رقم الهاتف *",
      phonePlaceholder: "مثال: 06 12 34 56 78",
      emailLabel: "البريد الإلكتروني *",
      emailPlaceholder: "sara.idrissi@example.com",
      cityLabel: "مدينة الإقامة الحالية *",
      cityPlaceholder: "مثال: تارودانت، أكادير، مراكش، الدار البيضاء...",
      schoolLabel: "الجامعة / المؤسسة الحالية *",
      schoolPlaceholder: "مثال: كلية العلوم ابن زهر، EST، FST، ISPITS...",
      degreeLabel: "الشعبة / التخصص الدراسي *",
      degreeOptions: [
        "اختر شعبتك الدراسية...",
        "البيولوجيا السريرية / التحاليل الطبية",
        "الكيمياء الحيوية والبيولوجيا الجزيئية",
        "الأحياء الدقيقة والتقنيات الحيوية",
        "العلوم الطبية الحيوية والصحة",
        "الكيمياء ومراقبة الجودة",
        "الصيدلة / الطب",
        "شعبة علمية أخرى"
      ],
      yearLabel: "المستوى / السنة الدراسية *",
      yearOptions: [
        "اختر مستواك الدراسي...",
        "السنة الأولى جامعي (بكالوريا+1)",
        "السنة الثانية / DEUG / DUT / BTS (بكالوريا+2)",
        "السنة الثالثة / الإجازة المهنية أو الأساسية (بكالوريا+3)",
        "السنة الرابعة / ماستر 1 (بكالوريا+4)",
        "السنة الخامسة / ماستر 2 / PFE / مهندس دولة (بكالوريا+5)",
        "الدكتوراه / طبيب مقيم في البيولوجيا الطبية"
      ],
      typeLabel: "نوع التدريب المطلوب *",
      typeOptions: [
        "اختر نوع التدريب...",
        "تدريب مشروع نهاية الدراسة (Stage PFE)",
        "تدريب استئناسي / اكتشاف المجال",
        "تدريب تقني / تطوير المهارات",
        "تدريب بحثي / ماستر",
        "تدريب ملاحظة واستكشاف"
      ],
      startDateLabel: "تاريخ البدء المتوقع *",
      durationLabel: "المدة الإجمالية المتوقعة *",
      durationOptions: [
        "اختر المدة المتوقعة...",
        "شهر واحد",
        "شهران (2)",
        "3 أشهر",
        "من 4 إلى 6 أشهر",
        "أكثر من 6 أشهر"
      ],
      departmentLabel: "القسم أو التخصص المطلوب *",
      departmentOptions: [
        "اختر قسماً مخبرياً...",
        "الكيمياء الحيوية السريرية والهرمونات",
        "الأحياء الدقيقة والبكتيريا والطفيليات",
        "أمراض الدم والخلايا والتخثر",
        "علم المناعة والمصليات المعدية",
        "مراقبة الجودة وضمان الجودة",
        "البحث والتطوير (R&D)",
        "متعدد التخصصات (دوران شامل على كافة الأقسام)"
      ],
      cvLabel: "السيرة الذاتية (CV) *",
      cvHint: "صيغة PDF إلزامية · الحجم الأقصى: 5 ميغابايت",
      cvDropText: "اسحب وأفلت سيرتك الذاتية هنا أو",
      cvBrowse: "تصفح من جهازك",
      coverLetterLabel: "رسالة التحفيز",
      coverLetterToggleFile: "رفع ملف PDF (الحد 5 ميغابايت)",
      coverLetterToggleText: "كتابة مباشرة",
      coverLetterDropText: "اسحب وأفلت رسالة التحفيز بصيغة PDF هنا أو",
      coverLetterTextPlaceholder: "اكتب بإيجاز عن دوافعك، مهاراتك وأهدافك التي تود تحقيقها خلال فترة تدريبك بمختبر باب القصبة...",
      certificateLabel: "شهادة متابعة الدراسة أو اتفاقية التدريب",
      certificateHint: "بصيغة PDF · الحجم الأقصى: 5 ميغابايت (موصى بها لإثبات الصفة الطلابية)",
      certificateDropText: "اسحب وأفلت شهادة التسجيل أو الاتفاقية هنا أو",
      privacyNotice: "أوافق على جمع ومعالجة بياناتي الشخصية من قبل مختبر باب القصبة حصرياً لغرض دراسة طلب التدريب، وذلك وفقاً لقوانين حماية المعطيات ذات الطابع الشخصي (القانون 09-08 واللائحة العامة لحماية البيانات). لن يتم مشاركة بياناتكم مع أي طرف ثالث.",
      privacyRequired: "يجب الموافقة على سياسة الخصوصية لإرسال الطلب.",
      submitBtn: "إرسال طلب التدريب",
      submitting: "جارٍ إرسال ملف الترشيح بأمان...",
      successTitle: "تم تسجيل طلبكم بنجاح !",
      successSub: "تم إرسال ملف ترشيحكم للتدريب بنجاح إلى إدارة مختبر باب القصبة.",
      refLabel: "رقم تتبع الملف :",
      confirmDetailsTitle: "ملخص طلب التدريب",
      confirmEmailNotice: "تم إرسال إشعار تأكيد مع تفاصيل الطلب إلى البريد الإلكتروني :",
      nextSteps: "الخطوات التالية: تقوم الإدارة العلمية والدكتور شلاوي سعيد بمراجعة ملفات الترشيح خلال 48 إلى 72 ساعة. سنتواصل معكم عبر الهاتف أو البريد الإلكتروني.",
      btnReturnHome: "العودة إلى الرئيسية",
      btnNewSubmission: "تقديم طلب جديد",
      fileSelected: "الملف المختار :",
      fileSizeExceeded: "حجم الملف يتجاوز الحد الأقصى المسموح به (5 ميغابايت).",
      fileFormatInvalid: "نقبل فقط الملفات بصيغة PDF لهذا المستند.",
      submitError: "حدث خطأ أثناء إرسال الطلب. يرجى التحقق من اتصالكم والمحاولة مجدداً."
    }
  },

  en: {
    meta: {
      title: "Babel Kasbah Laboratory — Medical Biology · Dr. CHELLAOUI Said",
      description: "BAB EL KASBAH Medical Laboratory in Taroudant — Led by Dr. CHELLAOUI Said, clinical pathology specialist. State-of-the-art diagnostic testing, automated platform, and patient portal."
    },
    mobile: {
      drawerKicker: "BAB EL KASBAH",
      drawerTitle: "We are listening.",
      navVisit: "Prepare my visit",
      navInfo: "The laboratory",
      drawerIntern: "Apply for internship",
      drawerCall: "Call the laboratory",
      hours: "Mon. — Sat. · 07:00 — 18:00",
      heroCopy: "Medical diagnostics laboratory · Taroudant",
      ctaContact: "Book an appointment",
      analysesKicker: "02 / DIRECTORY",
      analysesHelpTitle: "Can't find your analysis?",
      analysesHelpSub: "Our team can guide you directly.",
      analysesHelpLink: "Write to us",
      visitKicker: "03 / YOUR VISIT",
      visitTitle: "Visit with peace of mind.",
      visitLead: "Everything you need to know before coming to the lab.",
      visitOpen: "Open today",
      visitDays: "Monday to Saturday",
      visitS1Title: "Before coming",
      visitS1Desc: "Fasting for 8-12 hours is recommended for some tests. In doubt? Call us.",
      visitS2Title: "On site",
      visitS2Desc: "Most blood draws are done without an appointment in a welcoming environment.",
      visitS3Title: "After the test",
      visitS3Desc: "Results are carefully validated. Turnaround times vary depending on the analysis.",
      visitCallBtn: "Call before my visit",
      visitMapBtn: "Directions to the lab",
      visitFindUs: "Find us",
      visitAddress: "Av. Moulay Rachid, facing Mokhtar Soussi hospital",
      visitCity: "Taroudant",
      contactKicker: "04 / CONTACT",
      contactFastMsg: "QUICK MESSAGE",
      contactReply: "We'll reply as soon as possible.",
      contactFixed: "Landline",
      contactMobile: "Mobile",
      infoKicker: "05 / THE LABORATORY",
      infoTitle: "Science, with genuine care.",
      infoLead: "A team committed to making medical biology clearer, more human, and seamless.",
      infoDir: "Medical Direction",
      faqKicker: "FREQUENTLY ASKED QUESTIONS",
      faqTitle: "Essential answers.",
      langKicker: "LANGUAGE",
      langTitle: "Choose your language."
    },
    onboarding: {
      welcome: "Welcome.",
      kicker: "WELCOME · BIENVENUE · MARHABAN",
      chooseLanguage: "Choose your language",
      subtitle: "Official clinical biology and diagnostic testing portal",
      continue: "Enter Website",
      tagline: "BAB EL KASBAH Medical Laboratory · Taroudant",
      badgeTitle: "High-Precision Clinical Biology",
      badgeSub: "Modern Automated Platform · Taroudant",
      frName: "Français",
      frDesc: "Site in French",
      arName: "العربية",
      arDesc: "Website in Arabic",
      enName: "English",
      enDesc: "Website in English"
    },
    nav: {
      home: "Home",
      expertise: "Expertise",
      analyses: "Analyses",
      team: "Team",
      results: "Results",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      map: "Location"
    },
    header: {
      cta: "Apply for Internship",
      ctaAria: "Apply for an internship at the laboratory",
      openMenu: "Open navigation menu"
    },
    hero: {
      title: "Your Health.",
      titleEm: "Our Precision.",
      lead: "Medical diagnostic laboratory directed by <strong>Dr. CHELLAOUI Said</strong>, specialist in clinical pathology. Advanced technical platform, rapid online results, and walk-in service without appointment.",
      imgAlt: "Modern and fully equipped BAB EL KASBAH Medical Laboratory"
    },
    ticker: [
      "Routine Health Panels",
      "Hematology & Cytology",
      "Clinical Biochemistry",
      "Immunology & Serology",
      "Medical Microbiology",
      "Hormones & Biomarkers",
      "24h Automated Platform",
      "Medical Biology Taroudant"
    ],
    expertise: {
      kicker: "01 / OUR DNA",
      title: "Rigorous science, with",
      titleSpan: "genuine human care.",
      body: "We believe clinical diagnostics should be transparent, human-centered, and seamless. Behind every test result stands an individual, a clinical question, and a decisive healthcare decision.",
      imgAlt: "Automated laboratory testing platform",
      card1Title: "Clear reports<br>easy to interpret.",
      card1Body: "Structured findings, frictionless patient journeys, and digital tools tailored to real everyday clinical needs.",
      card2Title: "Cutting-edge tech<br>in expert hands.",
      card2Body: "Seamless automation and pathologist expertise join forces to ensure total precision at every diagnostic step."
    },
    analyses: {
      kicker: "02 / ANALYSES DIRECTORY",
      title: "Find your analysis.",
      lead: "Search by test name, medical domain, or clinical requirement. Clear, fast, and designed to get right to the point.",
      searchPlaceholder: "e.g. Glucose, CBC, Cholesterol, Thyroid…",
      searchAria: "Search medical analyses",
      filterAll: "All",
      filterRoutine: "Routine",
      filterHormones: "Hormones",
      filterImmuno: "Immunology",
      filterMicro: "Microbiology",
      cards: [
        {
          code: "CBC · 01",
          title: "Complete Blood Count (CBC/NFS)",
          body: "Red and white blood cells, platelets, and hematological indices.",
          searchKeywords: "complete blood count cbc nfs hematology anemia platelets"
        },
        {
          code: "GLY · 02",
          title: "Blood Glucose (Fasting)",
          body: "Fasting or postprandial blood sugar level assessment.",
          searchKeywords: "blood glucose fasting sugar diabetes glycemie"
        },
        {
          code: "LIP · 03",
          title: "Complete Lipid Panel",
          body: "Total cholesterol, HDL, LDL, and triglyceride levels.",
          searchKeywords: "lipid panel cholesterol triglycerides hdl ldl heart risk"
        },
        {
          code: "TSH · 04",
          title: "Ultrasensitive TSH",
          body: "High-precision screening for thyroid gland function and disorders.",
          searchKeywords: "tsh thyroid hormones goiter endocrine metabolic"
        },
        {
          code: "FER · 05",
          title: "Serum Ferritin",
          body: "Accurate quantification of the body's iron stores and reserves.",
          searchKeywords: "ferritin iron storage anemia fatigue deficiency"
        },
        {
          code: "CRP · 06",
          title: "C-Reactive Protein (CRP)",
          body: "Sensitive biological marker for acute inflammation and infection.",
          searchKeywords: "crp c-reactive protein inflammation infection immune"
        },
        {
          code: "VD · 07",
          title: "Vitamin D (25-OH)",
          body: "Quantification of 25-hydroxy vitamin D for bone and immune health.",
          searchKeywords: "vitamin d 25-oh bone health fatigue calcium immunity"
        },
        {
          code: "MIC · 08",
          title: "Microbiological Culture & Antibiogram",
          body: "Identification of bacterial pathogens and antimicrobial susceptibility.",
          searchKeywords: "microbiology culture bacteria infection antibiogram urine ecbu"
        }
      ],
      emptyTitle: "No analysis found.",
      emptyBody: "Try another keyword (e.g. glucose, CBC, ferritin, thyroid...).",
      emptyReset: "Reset search"
    },
    team: {
      kicker: "03 / TEAM & MEDICAL DIRECTION",
      title: "Seasoned specialists behind",
      titleEm: "every single diagnosis.",
      lead: "Under the leadership of <strong>Dr. CHELLAOUI Said</strong>, our multidisciplinary clinical team unites clinical rigor, advanced laboratory instrumentation, and dedicated patient support.",
      imgAlt: "Team & Medical Direction - Babel Kasbah Laboratory"
    },
    results: {
      kicker: "PATIENT PORTAL",
      title: "Your results,",
      titleLine2: "all in one place.",
      stat1Label: "tests / year",
      stat2Label: "pathologists & specialists",
      stat3Label: "average turnaround",
      stat4Label: "satisfied patients"
    },
    voices: {
      kicker: "04 / PATIENT EXPERIENCES",
      title: "They place their",
      titleEm: "trust in us.",
      lead: "Frictionless appointments, lucid diagnostic reports, and attentive human care.",
      reviews: [
        {
          quote: "« Seamless registration without any wait, extremely professional medical staff, and my complete report was available online early the next morning. »",
          author: "Salma R.",
          role: "Patient · Comprehensive check-up"
        },
        {
          quote: "« Warm welcome and clear explanations of my lab work. You truly feel rigorous scientific standards behind each result. »",
          author: "Youssef E.",
          role: "Patient · Routine blood panel"
        },
        {
          quote: "« Structured, prompt laboratory reporting makes clinical follow-up for my patients effortless. I recommend them wholeheartedly. »",
          author: "Dr. Imen T.",
          role: "Prescribing Physician"
        }
      ]
    },
    faq: {
      kicker: "05 / FREQUENTLY ASKED QUESTIONS",
      title: "Everything you",
      titleEm: "need to know.",
      lead: "Have a specific question? Our team is available by phone at 08 08 504 833 or 06 23 960 756.",
      items: [
        {
          q: "Do I need to fast before my blood test?",
          a: "It depends on the requested panel. An 8 to 12-hour fast is recommended for blood glucose and lipid panels. For most other routine tests, fasting is not required. Precise instructions are confirmed whenever you reach out."
        },
        {
          q: "How quickly will I receive my test results?",
          a: "The vast majority of routine panels are delivered within 24 hours. Specialized endocrine or microbiological cultures may require 48 to 72 hours. You are notified via SMS and email as soon as results are validated."
        },
        {
          q: "Is an appointment required for blood work?",
          a: "Most routine diagnostic tests are conducted walk-in without an appointment, Monday to Saturday starting at 07:00 AM. You can also contact us in advance if you prefer a scheduled visit."
        },
        {
          q: "How do I access my online results portal?",
          a: "A private, encrypted link is dispatched to you via SMS and email following your sample collection. You can inspect your reports, track pending tests, and download PDF files anytime."
        },
        {
          q: "Are laboratory tests covered by health insurance?",
          a: "Yes. We work in direct agreement with AMO, CNSS, CNOPS, and leading private mutual insurance funds. A comprehensive care sheet and itemized invoice are provided for your reimbursement."
        }
      ]
    },
    contact: {
      kicker: "06 / CONTACT US",
      title: "Let's discuss",
      titleEm: "your healthcare journey.",
      lead: "Whether booking an appointment, asking about test results, or requesting info on our analyses, our team is right here to assist.",
      directionLabel: "Medical Direction",
      directionValue: "Dr. CHELLAOUI Said · Clinical Pathology Specialist",
      phonesLabel: "Phone Numbers",
      emailLabel: "Email",
      addressLabel: "Address",
      addressValue: "Moulay Rachid Ave, opposite Mokhtar Soussi Hospital — Taroudant",
      hoursLabel: "Opening Hours",
      hoursValue: "Mon — Sat · 07:00 AM — 06:00 PM",
      formName: "Full Name",
      formNamePlaceholder: "Your full name",
      formPhone: "Phone Number",
      formPhonePlaceholder: "06XX XX XX XX",
      formSubject: "Subject of Request",
      formSubjectOptions: [
        "Book an appointment",
        "Inquiry regarding a medical test",
        "Question about results",
        "Other inquiry"
      ],
      formMessage: "Message",
      formMessagePlaceholder: "How can we assist you today?",
      formSubmit: "Send Request",
      formSending: "Opening WhatsApp..."
    },
    map: {
      kicker: "07 / LOCATION & ACCESS MAP",
      title: "Find us in",
      titleEm: "Taroudant.",
      lead: "Conveniently located on Moulay Rachid Avenue, directly opposite Mokhtar Soussi Regional Hospital.",
      openMap: "Open in Google Maps ↗",
      openMapAria: "Open itinerary to the laboratory on Google Maps",
      iframeTitle: "Babel Kasbah Laboratory Taroudant Google Map Location"
    },
    footer: {
      copyright: "© 2026 BAB EL KASBAH Laboratory — Dr. CHELLAOUI Said · All rights reserved"
    },
    whatsappTemplate: {
      header: "*New Website Inquiry - Babel Kasbah Laboratory*",
      name: "Name",
      phone: "Phone",
      subject: "Subject",
      message: "Message"
    },
    internship: {
      metaTitle: "Internship Application — BAB EL KASBAH Laboratory · Dr. CHELLAOUI Said",
      metaDescription: "Apply for an internship at BAB EL KASBAH Medical Laboratory in Taroudant. Excellence in hands-on clinical biology training under Dr. CHELLAOUI Said.",
      heroBadge: "CLINICAL TRAINING & ACADEMIC INTERNSHIPS",
      heroTitle: "Apply for an internship",
      heroTitleEm: "at the Laboratory.",
      heroLead: "Advance your clinical and diagnostic laboratory skills within our modern automated facility under the mentorship of <strong>Dr. CHELLAOUI Said</strong>, clinical pathology specialist. We welcome motivated students for rigorous, hands-on internships.",
      highlight1Title: "Clinical Mentorship",
      highlight1Desc: "Direct guidance and continuous scientific support from our team of clinical pathologists.",
      highlight2Title: "Automated Platform",
      highlight2Desc: "Hands-on experience with modern biochemistry, hematology, and serology analyzers.",
      highlight3Title: "Official Agreement & Certificate",
      highlight3Desc: "Formal internship agreement and official completion certificate awarded upon conclusion.",
      step1Title: "Personal Details",
      step1Desc: "Applicant contact information",
      step2Title: "Academic Background",
      step2Desc: "University, program & academic level",
      step3Title: "Internship Details",
      step3Desc: "Objectives, schedule & department of interest",
      step4Title: "Required Documents",
      step4Desc: "Mandatory CV & supporting files",
      step5Title: "Data Privacy & Submission",
      step5Desc: "GDPR compliance & application dispatch",
      nameLabel: "Full Name *",
      namePlaceholder: "e.g. Sara El Idrissi",
      phoneLabel: "Phone Number *",
      phonePlaceholder: "e.g. +212 6 12 34 56 78",
      emailLabel: "Email Address *",
      emailPlaceholder: "sara.idrissi@example.com",
      cityLabel: "Current City / Location *",
      cityPlaceholder: "e.g. Taroudant, Agadir, Marrakech, Casablanca...",
      schoolLabel: "Current University / Institution *",
      schoolPlaceholder: "e.g. Ibn Zohr Faculty of Sciences, EST, FST, ISPITS...",
      degreeLabel: "Degree Program / Major *",
      degreeOptions: [
        "Select your program...",
        "Clinical Biology / Medical Lab Science",
        "Biochemistry & Molecular Biology",
        "Microbiology & Biotechnology",
        "Biomedical Sciences / Healthcare",
        "Chemistry & Quality Control",
        "Pharmacy / Medicine",
        "Other Scientific Program"
      ],
      yearLabel: "Current Year of Study *",
      yearOptions: [
        "Select your year...",
        "1st Year (Undergraduate)",
        "2nd Year / Associate / Diploma (Bac+2)",
        "3rd Year / Bachelor's Degree / Licence (Bac+3)",
        "4th Year / Master 1 (Bac+4)",
        "5th Year / Master 2 / PFE / Engineering (Bac+5)",
        "PhD / Medical Biology Resident"
      ],
      typeLabel: "Type of Internship *",
      typeOptions: [
        "Select internship type...",
        "Graduation Project (Stage PFE)",
        "Introductory / Discovery Internship",
        "Technical / Skills Development Internship",
        "Research / Master's Internship",
        "Observational Internship"
      ],
      startDateLabel: "Expected Start Date *",
      durationLabel: "Total Duration *",
      durationOptions: [
        "Select duration...",
        "1 month",
        "2 months",
        "3 months",
        "4 to 6 months",
        "More than 6 months"
      ],
      departmentLabel: "Field / Department of Interest *",
      departmentOptions: [
        "Select a department...",
        "Clinical Biochemistry & Hormonology",
        "Microbiology, Bacteriology & Parasitology",
        "Hematology, Cytology & Hemostasis",
        "Immunology & Infectious Serology",
        "Quality Control & Quality Assurance",
        "R&D / Applied Research",
        "Multidisciplinary (Full Departmental Rotation)"
      ],
      cvLabel: "Curriculum Vitae (CV) *",
      cvHint: "Mandatory PDF format · 5 MB max file size",
      cvDropText: "Drag & drop your CV here or",
      cvBrowse: "Browse files",
      coverLetterLabel: "Cover Letter",
      coverLetterToggleFile: "Upload PDF (Max 5 MB)",
      coverLetterToggleText: "Write online",
      coverLetterDropText: "Drag & drop your cover letter PDF here or",
      coverLetterTextPlaceholder: "Briefly outline your motivations, key skills, and goals for this internship at BAB EL KASBAH Laboratory...",
      certificateLabel: "School Certificate or Internship Agreement",
      certificateHint: "PDF format · 5 MB max (Recommended to confirm active student enrollment)",
      certificateDropText: "Drag & drop your certificate or agreement here or",
      privacyNotice: "I consent to the collection and processing of my personal data by BAB EL KASBAH Laboratory exclusively for the evaluation of my internship application, in compliance with applicable data protection regulations (GDPR / Moroccan Law 09-08). Information will never be shared with third parties.",
      privacyRequired: "You must accept the privacy policy to submit your application.",
      submitBtn: "Submit Application",
      submitting: "Securely transmitting application...",
      successTitle: "Application Successfully Submitted!",
      successSub: "Your internship application has been successfully delivered to the leadership of BAB EL KASBAH Laboratory.",
      refLabel: "Reference Number:",
      confirmDetailsTitle: "Application Summary",
      confirmEmailNotice: "An automated confirmation receipt has been dispatched to:",
      nextSteps: "Next steps: The scientific committee and Dr. CHELLAOUI Said review all applications within 48 to 72 hours. You will be contacted via telephone or email.",
      btnReturnHome: "Back to Home",
      btnNewSubmission: "Submit Another Application",
      fileSelected: "Selected file:",
      fileSizeExceeded: "File exceeds the 5 MB maximum size limit.",
      fileFormatInvalid: "Only PDF files are permitted for upload.",
      submitError: "An error occurred while transmitting your application. Please check your connection and try again."
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
