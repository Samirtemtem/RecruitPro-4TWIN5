import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Header translations
      "RECRUITPRO": "RECRUITPRO",
      "JOB POSTS": "Job Posts",
      "ABOUT US": "About Us",
      "CONTACT": "Contact",
      "TERMS": "Terms",
      "Login / Register": "Login / Register",
      "Logout": "Logout",
      "Admission": "Admission",
      "Language": "Language",
      "English": "English",
      "French": "French",
      // JobSearchBanner translations
      "Unlock Your Career Potential Today": "Unlock Your Career Potential Today",
      "Find your next opportunity": "Find your next opportunity: job title, company, or skill...",
      "Find Jobs": "Find Jobs",
      "Recruit Pro Logo": "Recruit Pro Logo",
      "Hero Image": "Hero Image",
      "Owners": "Owners",
      "10k+ Candidates": "10k+ Candidates",
      "RecruitPro": "RecruitPro",
      "Recruitment": "Recruitment",
      "Upload Your CV": "Upload Your CV",
      "It only takes a few seconds": "It only takes a few seconds",
      // JobCategorie translations
      "category": {
        "accounting_finance": "Accounting / Finance",
        "marketing": "Marketing",
        "design": "Design",
        "development": "Development",
        "human_resource": "Human Resource",
        "automotive_jobs": "Automotive Jobs",
        "customer_service": "Customer Service",
        "health_and_care": "Health and Care",
        "project_management": "Project Management",
      },
      "jobNumber": {
        "join_us_for_exciting_opportunities": "Join us for exciting opportunities!",
        "explore_a_variety_of_roles": "Explore a variety of roles!",
        "creativity_awaits_you": "Creativity awaits you!",
        "build_the_future_with_us": "Build the future with us!",
        "become_a_part_of_our_team": "Become a part of our team!",
        "drive_your_career_forward": "Drive your career forward!",
        "help_us_make_a_difference": "Help us make a difference!",
        "care_for_others_join_us": "Care for others, join us!",
        "lead_exciting_projects": "Lead exciting projects!",
      },
      // Home translations
      "Popular Job Categories": "Popular Job Categories",
      "Explore thousands of job opportunities": "Explore thousands of job opportunities available now!",
      "Featured Jobs": "Featured Jobs",
      "Know your worth and find the job": "Know your worth and find the job that qualifies your life",
      "Load More Listing": "Load More Listing",
      "Testimonials From Our Customers": "Testimonials From Our Customers",
      "Lorem ipsum dolor sit amet elit": "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor",
      "Recent News Articles": "Recent News Articles",
      "Fresh job related news content": "Fresh job related news content posted each day.",
      // About translations
      "Hundred of Jobs": "Hundred of Jobs. Find the one that suits you.",
      "Search all the open positions": "Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.",
      "Bring to the table win-win survival": "Bring to the table win-win survival",
      "Capitalize on low hanging fruit": "Capitalize on low hanging fruit to identify",
      "But I must explain to you": "But I must explain to you how all this",
      "Get Started": "Get Started",
      "About Image": "About Image",
      "Resource Logo": "Resource Logo",
      "300k+ Employers": "300k+ Employers",
      // CallToAction translations
      "CallToAction": {
        "Find Your Dream Job": "Find Your Dream Job!",
        "Explore exciting opportunities": "Explore exciting opportunities and connect with top employers looking for talent like yours.",
        "Start Your Journey Now": "Start Your Journey Now",
        "Call to Action Image": "Call to Action Image",
      },
      // Footer translations
      "Infinite Loopers": "Infinite Loopers",
      "All Rights Reserved": "All Rights Reserved.",
      "Social facebook-f": "Facebook",
      "Social twitter": "Twitter",
      "Social instagram": "Instagram",
      "Social linkedin-in": "LinkedIn",
      // Footer content
      "Company": "Company",
      "Resources": "Resources",
      "About Us": "About Us",
      "Contact": "Contact",
      "Careers": "Careers",
      "Blog": "Blog",
      "Help Center": "Help Center",
      "Privacy Policy": "Privacy Policy",
      // JobListFront translations
      "Jobs": "Jobs",
      // FilterSidebar translations
      "FilterSidebar": {
        "Search by Keywords": "Search by Keywords",
        "Category": "Category",
        "Date Posted": "Date Posted",
      },
      // Categories translations
      "Categories": {
        "Choose a department": "Choose a department",
        "TIC": "Information Technology",
        "ELECTROMECANIQUE": "Electromechanical",
        "GENIE-CIVIL": "Civil Engineering",
      },
      // AboutUs translations
      "AboutUs": {
        "How It Works": "How It Works?",
        "Job for anyone, anywhere": "Job for anyone, anywhere",
      },
      // Funfact translations
      "Funfact": {
        "Daily active users": "Daily active users",
        "Open job positions": "Open job positions",
        "Candidates registered": "Candidates registered",
      },
      // IntroDescriptions translations
      "IntroDescriptions": {
        "About RECRUIT PRO": "About RECRUIT PRO",
        "Description": "Recruit Pro is an innovative platform designed to transform the recruitment process by automating hiring tasks and enhancing the experience for both employers and candidates. With Recruit Pro, employers can effortlessly post job listings, manage applications, and track candidates through a streamlined interface, significantly reducing time and effort in recruitment.\n\nCandidates enjoy a dedicated dashboard that allows real-time monitoring of their application status, providing transparency and keeping them informed throughout their journey. The intuitive design ensures easy navigation for both recruiters and job seekers, making the process more engaging.\n\nIntegrated communication tools facilitate seamless interaction, ensuring important messages and updates are never missed. Additionally, Recruit Pro offers data-driven insights through analytics and reporting, empowering recruiters to make informed decisions based on candidate performance.",
      },
      // CallToAction2 translations
      "CallToAction2": {
        "Your Dream Jobs Are Waiting": "Your Dream Jobs Are Waiting",
        "Over 1 million interactions": "Over 1 million interactions, 50,000 success stories Make yours now.",
        "Search Job": "Search Job",
        "Apply Job Now": "Apply Job Now",
      },
      // WorkBlock translations
      "WorkBlock": {
        "FreeResumeAssessments": {
          "Title": "Free Resume Assessments",
          "Text": "Employers on average spend 31 seconds scanning resumes to identify potential matches."
        },
        "JobFitScoring": {
          "Title": "Job Fit Scoring",
          "Text": "Employers on average spend 31 seconds scanning resumes to identify potential matches."
        },
        "HelpEveryStep": {
          "Title": "Help Every Step of the Way",
          "Text": "Employers on average spend 31 seconds scanning resumes to identify potential matches."
        }
      },
      // ContactPage translations
      "ContactPage": {
        "LeaveAMessage": "Leave A Message"
      },
      // Address translations
      "Address": {
        "Title": "Address",
        "Text": "1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala.",
        "CallUs": "Call Us",
        "Email": "Email"
      },
      // ContactForm translations
      "ContactForm": {
        "YourName": {
          "Label": "Your Name",
          "Placeholder": "Your Name*"
        },
        "YourEmail": {
          "Label": "Your Email",
          "Placeholder": "Your Email*"
        },
        "Subject": {
          "Label": "Subject",
          "Placeholder": "Subject*"
        },
        "YourMessage": {
          "Label": "Your Message",
          "Placeholder": "Write your message..."
        },
        "SendMessage": "Send Message",
        "SuccessMessage": "Message sent successfully: {message}",
        "ErrorMessage": "Error: {error}",
        "UnknownError": "An unknown error occurred"
      },
      // TermsPage translations
      "TermsPage": {
        "Title": "Terms and Conditions",
        "Meta": "Terms",
        "BreadcrumbText": "Home / Terms and Conditions"
      },
        TermsText: {
        Terms: {
          Heading: "1. Terms",
          Paragraph1: "By accessing or using RecruitPro, a recruitment platform developed for Esprit, an IT engineering school in Tunisia, you agree to be bound by these Terms of Use. RecruitPro leverages an Applicant Tracking System (ATS) and online interview scheduling to connect Esprit students, alumni, and employers for job opportunities, internships, and recruitment activities. These terms apply to all users, including students, alumni, recruiters, and administrators. Unauthorized use, including attempts to bypass the ATS or manipulate interview scheduling, may result in termination of access.",
          Paragraph2: "You agree to provide accurate, complete, and up-to-date information when creating profiles, submitting applications, posting job opportunities, or scheduling interviews through RecruitPro. The ATS relies on accurate data to filter and match candidates with opportunities. Esprit and RecruitPro reserve the right to verify user information and suspend accounts that violate these terms. Users must comply with all applicable Tunisian laws and regulations while using the platform.",
        },
        Limitations: {
          Heading: "2. Limitations",
          Paragraph1: "RecruitPro’s ATS and online interview scheduling features are designed exclusively for recruitment-related activities, such as job postings, candidate screening, application management, and scheduling interviews. Users are prohibited from using the platform for non-recruitment purposes, including spamming, unauthorized data scraping, or scheduling interviews for non-recruitment activities. Violations may lead to account suspension or legal action.",
          Paragraph2: "While the ATS facilitates candidate filtering and matching, and the online scheduling tool streamlines interview coordination, RecruitPro does not guarantee job placements, interview outcomes, or the accuracy of user-provided information. Employers are responsible for verifying candidate qualifications, and candidates must confirm the legitimacy of job postings. RecruitPro and Esprit are not liable for disputes arising from interactions, transactions, or scheduled interviews facilitated through the platform.",
        },
        Revisions: {
          Heading: "3. Revisions and Errata",
          Paragraph1: "The content and functionality of RecruitPro, including its ATS and online interview scheduling features, may contain errors or inaccuracies, such as incorrect job postings, profile data, or scheduling conflicts. Esprit and RecruitPro do not warrant that the platform is error-free or that all content is accurate or complete. We reserve the right to correct errors, inaccuracies, or omissions in the ATS, scheduling system, or other features without prior notice.",
          Paragraph2: "RecruitPro may undergo updates to enhance the ATS, improve interview scheduling, or ensure compliance with regulations. Users will be notified of significant changes via email or platform announcements. Continued use of the platform after such revisions constitutes acceptance of the updated terms.",
        },
        Modifications: {
          Heading: "4. Site Terms of Use Modifications",
          Paragraph1: "Esprit and RecruitPro reserve the right to modify these Terms of Use at any time to reflect changes in the ATS, online interview scheduling features, legal requirements, or operational needs. Modifications will be effective immediately upon posting on the RecruitPro platform or notification to users. It is your responsibility to review these terms periodically.",
          Paragraph2: "If you do not agree with any modifications, you must discontinue using RecruitPro. Continued use after changes are posted constitutes your acceptance of the revised terms. For questions or concerns about these terms, please contact the Esprit recruitment office at [insert contact email or link].",
        },
      },
       LoginUser: {
        SeoTitle: "Login",
        LogoAlt: "Logo",
        SignInPrompt: "Please enter your details to sign in",
        EmailLabel: "Email Address",
        EmailPlaceholder: "Enter your email",
        PasswordLabel: "Password",
        PasswordPlaceholder: "Enter your password",
        RememberMe: "Remember Me",
        ForgotPassword: "Forgot Password?",
        SignIn: "Sign In",
        SigningIn: "Signing In...",
        NoAccount: "Don't have an account?",
        CreateAccount: "Create Account",
        Or: "Or",
        GoogleAlt: "Google",
        LinkedInAlt: "LinkedIn",
        GitHubAlt: "GitHub",
        FaceRecognitionAlt: "Face Recognition",
        Errors: {
          GoogleLoginCancelled: "Google login was canceled. Please try again.",
          LinkedInLoginCancelled: "LinkedIn login was canceled. Please try again.",
          InvalidCredentials: "Email and password are required.",
          UserNotFound: "No account found with this email. Please register first.",
          EmailNotVerified: "Your email is not verified. Please check your inbox.",
          IncorrectPassword: "The password you entered is incorrect.",
          UserPasswordEmail:
            "You have not set a password yet. Please check your email. A new password will be sent to you.",
          UnexpectedError: "An unexpected error occurred. Please try again.",
        },
      },
    },
  },
  fr: {
    translation: {
      // Header translations
      "RECRUITPRO": "RECRUITPRO",
      "JOB POSTS": "Offres d'emploi",
      "ABOUT US": "À propos de nous",
      "CONTACT": "Contact",
      "TERMS": "Conditions",
      "Login / Register": "Connexion / Inscription",
      "Logout": "Déconnexion",
      "Admission": "Admission",
      "Language": "Langue",
      "English": "Anglais",
      "French": "Français",
      // JobSearchBanner translations
      "Unlock Your Career Potential Today": "Déverrouillez votre potentiel de carrière aujourd'hui",
      "Find your next opportunity": "Trouvez votre prochaine opportunité : titre de poste, entreprise ou compétence...",
      "Find Jobs": "Trouver des emplois",
      "Recruit Pro Logo": "Logo Recruit Pro",
      "Hero Image": "Image héroïque",
      "Owners": "Propriétaires",
      "10k+ Candidates": "Plus de 10 000 candidats",
      "RecruitPro": "RecruitPro",
      "Recruitment": "Recrutement",
      "Upload Your CV": "Téléchargez votre CV",
      "It only takes a few seconds": "Cela ne prend que quelques secondes",
      // JobCategorie translations
      "category": {
        "accounting_finance": "Comptabilité / Finance",
        "marketing": "Marketing",
        "design": "Conception",
        "development": "Développement",
        "human_resource": "Ressources humaines",
        "automotive_jobs": "Emplois automobiles",
        "customer_service": "Service client",
        "health_and_care": "Santé et soins",
        "project_management": "Gestion de projet",
      },
      "jobNumber": {
        "join_us_for_exciting_opportunities": "Rejoignez-nous pour des opportunités passionnantes !",
        "explore_a_variety_of_roles": "Explorez une variété de rôles !",
        "creativity_awaits_you": "La créativité vous attend !",
        "build_the_future_with_us": "Construisez l'avenir avec nous !",
        "become_a_part_of_our_team": "Faites partie de notre équipe !",
        "drive_your_career_forward": "Faites avancer votre carrière !",
        "help_us_make_a_difference": "Aidez-nous à faire la différence !",
        "care_for_others_join_us": "Prenez soin des autres, rejoignez-nous !",
        "lead_exciting_projects": "Dirigez des projets passionnants !",
      },
      // Home translations
      "Popular Job Categories": "Catégories d'emplois populaires",
      "Explore thousands of job opportunities": "Explorez des milliers d'opportunités d'emploi disponibles maintenant !",
      "Featured Jobs": "Emplois en vedette",
      "Know your worth and find the job": "Connaissez votre valeur et trouvez l'emploi qui qualifie votre vie",
      "Load More Listing": "Charger plus d'annonces",
      "Testimonials From Our Customers": "Témoignages de nos clients",
      "Lorem ipsum dolor sit amet elit": "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor",
      "Recent News Articles": "Articles de presse récents",
      "Fresh job related news content": "Contenu d'actualités liées à l'emploi publié chaque jour.",
      // About translations
      "Hundred of Jobs": "Des centaines d'emplois. Trouvez celui qui vous convient.",
      "Search all the open positions": "Recherchez toutes les positions ouvertes sur le web. Obtenez votre propre estimation de salaire personnalisée. Lisez les avis sur plus de 600 000 entreprises dans le monde.",
      "Bring to the table win-win survival": "Apporter à la table une survie gagnant-gagnant",
      "Capitalize on low hanging fruit": "Capitaliser sur les fruits à portée de main",
      "But I must explain to you": "Mais je dois vous expliquer comment tout cela",
      "Get Started": "Commencer",
      "About Image": "Image À propos",
      "Resource Logo": "Logo de ressource",
      "300k+ Employers": "Plus de 300 000 employeurs",
      // CallToAction translations
      "CallToAction": {
        "Find Your Dream Job": "Trouvez l'emploi de vos rêves !",
        "Explore exciting opportunities": "Explorez des opportunités passionnantes et connectez-vous avec les meilleurs employeurs à la recherche de talents comme le vôtre.",
        "Start Your Journey Now": "Commencez votre voyage maintenant",
        "Call to Action Image": "Image d'appel à l'action",
      },
      // Footer translations
      "Infinite Loopers": "Infinite Loopers",
      "All Rights Reserved": "Tous droits réservés.",
      "Social facebook-f": "Facebook",
      "Social twitter": "Twitter",
      "Social instagram": "Instagram",
      "Social linkedin-in": "LinkedIn",
      // Footer content
      "Company": "Entreprise",
      "Resources": "Ressources",
      "About Us": "À propos de nous",
      "Contact": "Contact",
      "Careers": "Carrières",
      "Blog": "Blog",
      "Help Center": "Centre d'aide",
      "Privacy Policy": "Politique de confidentialité",
      // JobListFront translations
      "Jobs": "Emplois",
      // FilterSidebar translations
      "FilterSidebar": {
        "Search by Keywords": "Rechercher par mots-clés",
        "Category": "Catégorie",
        "Date Posted": "Date de publication",
      },
      // Categories translations
      "Categories": {
        "Choose a department": "Choisir un département",
        "TIC": "Technologies de l'information",
        "ELECTROMECANIQUE": "Électromécanique",
        "GENIE-CIVIL": "Génie civil",
      },
      // AboutUs translations
      "AboutUs": {
        "How It Works": "Comment ça marche ?",
        "Job for anyone, anywhere": "Emploi pour tous, partout",
      },
      // Funfact translations
      "Funfact": {
        "Daily active users": "Utilisateurs actifs quotidiens",
        "Open job positions": "Postes vacants",
        "Candidates registered": "Candidats inscrits",
      },
      // IntroDescriptions translations
      "IntroDescriptions": {
        "About RECRUIT PRO": "À propos de RECRUIT PRO",
        "Description": "Recruit Pro est une plateforme innovante conçue pour transformer le processus de recrutement en automatisant les tâches d'embauche et en améliorant l'expérience pour les employeurs et les candidats. Avec Recruit Pro, les employeurs peuvent facilement publier des offres d'emploi, gérer les candidatures et suivre les candidats grâce à une interface simplifiée, réduisant considérablement le temps et l'effort nécessaires au recrutement.\n\nLes candidats bénéficient d'un tableau de bord dédié qui permet de suivre en temps réel l'état de leur candidature, offrant transparence et les tenant informés tout au long de leur parcours. La conception intuitive garantit une navigation facile pour les recruteurs et les chercheurs d'emploi, rendant le processus plus engageant.\n\nDes outils de communication intégrés facilitent une interaction fluide, garantissant que les messages et mises à jour importants ne sont jamais manqués. De plus, Recruit Pro offre des informations basées sur les données grâce à des analyses et des rapports, permettant aux recruteurs de prendre des décisions éclairées en fonction des performances des candidats.",
      },
      // CallToAction2 translations
      "CallToAction2": {
        "Your Dream Jobs Are Waiting": "Vos emplois de rêve vous attendent",
        "Over 1 million interactions": "Plus d'1 million d'interactions, 50 000 histoires de succès. Créez la vôtre maintenant.",
        "Search Job": "Rechercher un emploi",
        "Apply Job Now": "Postuler maintenant",
      },
      // WorkBlock translations
      "WorkBlock": {
        "FreeResumeAssessments": {
          "Title": "Évaluations gratuites de CV",
          "Text": "Les employeurs passent en moyenne 31 secondes à scanner les CV pour identifier les correspondances potentielles."
        },
        "JobFitScoring": {
          "Title": "Score d'adéquation au poste",
          "Text": "Les employeurs passent en moyenne 31 secondes à scanner les CV pour identifier les correspondances potentielles."
        },
        "HelpEveryStep": {
          "Title": "Aide à chaque étape",
          "Text": "Les employeurs passent en moyenne 31 secondes à scanner les CV pour identifier les correspondances potentielles."
        }
      },
      // ContactPage translations
      "ContactPage": {
        "LeaveAMessage": "Laissez un message"
      },
      // Address translations
      "Address": {
        "Title": "Adresse",
        "Text": "1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala.",
        "CallUs": "Appelez-nous",
        "Email": "E-mail"
      },
      // ContactForm translations
      "ContactForm": {
        "YourName": {
          "Label": "Votre nom",
          "Placeholder": "Votre nom*"
        },
        "YourEmail": {
          "Label": "Votre e-mail",
          "Placeholder": "Votre e-mail*"
        },
        "Subject": {
          "Label": "Sujet",
          "Placeholder": "Sujet*"
        },
        "YourMessage": {
          "Label": "Votre message",
          "Placeholder": "Écrivez votre message..."
        },
        "SendMessage": "Envoyer le message",
        "SuccessMessage": "Message envoyé avec succès : {message}",
        "ErrorMessage": "Erreur : {error}",
        "UnknownError": "Une erreur inconnue s'est produite"
      },
      // TermsPage translations
      "TermsPage": {
        "Title": "Conditions générales",
        "Meta": "Conditions",
        "BreadcrumbText": "Accueil / Conditions générales"
      },
         TermsText: {
        Terms: {
          Heading: "1. Conditions",
          Paragraph1: "En accédant ou en utilisant RecruitPro, une plateforme de recrutement développée pour Esprit, une école d'ingénierie informatique en Tunisie, vous acceptez d'être lié par ces conditions d'utilisation. RecruitPro utilise un système de suivi des candidatures (ATS) et la planification d'entretiens en ligne pour connecter les étudiants, les anciens élèves et les employeurs d'Esprit pour des opportunités d'emploi, des stages et des activités de recrutement. Ces conditions s'appliquent à tous les utilisateurs, y compris les étudiants, les anciens élèves, les recruteurs et les administrateurs. Une utilisation non autorisée, y compris les tentatives de contournement de l'ATS ou de manipulation de la planification des entretiens, peut entraîner la résiliation de l'accès.",
          Paragraph2: "Vous vous engagez à fournir des informations précises, complètes et à jour lors de la création de profils, de la soumission de candidatures, de la publication d'opportunités d'emploi ou de la planification d'entretiens via RecruitPro. L'ATS repose sur des données précises pour filtrer et associer les candidats aux opportunités. Esprit et RecruitPro se réservent le droit de vérifier les informations des utilisateurs et de suspendre les comptes qui violent ces conditions. Les utilisateurs doivent se conformer à toutes les lois et réglementations tunisiennes applicables lors de l'utilisation de la plateforme.",
        },
        Limitations: {
          Heading: "2. Limitations",
          Paragraph1: "Les fonctionnalités ATS et de planification d'entretiens en ligne de RecruitPro sont exclusivement conçues pour des activités liées au recrutement, telles que la publication d'offres d'emploi, le filtrage des candidats, la gestion des candidatures et la planification d'entretiens. Il est interdit aux utilisateurs d'utiliser la plateforme à des fins non liées au recrutement, y compris l'envoi de spams, le scraping de données non autorisé ou la planification d'entretiens pour des activités non liées au recrutement. Les violations peuvent entraîner la suspension du compte ou des poursuites judiciaires.",
          Paragraph2: "Bien que l'ATS facilite le filtrage et l'association des candidats, et que l'outil de planification en ligne simplifie la coordination des entretiens, RecruitPro ne garantit pas les placements professionnels, les résultats des entretiens ou l'exactitude des informations fournies par les utilisateurs. Les employeurs sont responsables de vérifier les qualifications des candidats, et les candidats doivent confirmer la légitimité des offres d'emploi. RecruitPro et Esprit ne sont pas responsables des litiges découlant des interactions, transactions ou entretiens planifiés facilités par la plateforme.",
        },
        Revisions: {
          Heading: "3. Révisions et Errata",
          Paragraph1: "Le contenu et les fonctionnalités de RecruitPro, y compris ses fonctionnalités ATS et de planification d'entretiens en ligne, peuvent contenir des erreurs ou des inexactitudes, telles que des offres d'emploi incorrectes, des données de profil ou des conflits de planification. Esprit et RecruitPro ne garantissent pas que la plateforme est exempte d'erreurs ou que tout le contenu est précis ou complet. Nous nous réservons le droit de corriger les erreurs, inexactitudes ou omissions dans l'ATS, le système de planification ou d'autres fonctionnalités sans préavis.",
          Paragraph2: "RecruitPro peut faire l'objet de mises à jour pour améliorer l'ATS, optimiser la planification des entretiens ou assurer la conformité avec les réglementations. Les utilisateurs seront informés des changements significatifs par e-mail ou via des annonces sur la plateforme. L'utilisation continue de la plateforme après ces révisions constitue une acceptation des conditions mises à jour.",
        },
        Modifications: {
          Heading: "4. Modifications des conditions d'utilisation du site",
          Paragraph1: "Esprit et RecruitPro se réservent le droit de modifier ces conditions d'utilisation à tout moment pour refléter les changements dans l'ATS, les fonctionnalités de planification d'entretiens en ligne, les exigences légales ou les besoins opérationnels. Les modifications prendront effet immédiatement après leur publication sur la plateforme RecruitPro ou la notification aux utilisateurs. Il est de votre responsabilité de consulter ces conditions périodiquement.",
          Paragraph2: "Si vous n'êtes pas d'accord avec les modifications, vous devez cesser d'utiliser RecruitPro. L'utilisation continue après la publication des modifications constitue votre acceptation des conditions révisées. Pour toute question ou préoccupation concernant ces conditions, veuillez contacter le bureau de recrutement d'Esprit à [insérer l'e-mail ou le lien de contact].",
        },
      },
        LoginUser: {
        SeoTitle: "Connexion",
        LogoAlt: "Logo",
        SignInPrompt: "Veuillez entrer vos informations pour vous connecter",
        EmailLabel: "Adresse e-mail",
        EmailPlaceholder: "Entrez votre e-mail",
        PasswordLabel: "Mot de passe",
        PasswordPlaceholder: "Entrez votre mot de passe",
        RememberMe: "Se souvenir de moi",
        ForgotPassword: "Mot de passe oublié ?",
        SignIn: "Se connecter",
        SigningIn: "Connexion en cours...",
        NoAccount: "Vous n'avez pas de compte ?",
        CreateAccount: "Créer un compte",
        Or: "Ou",
        GoogleAlt: "Google",
        LinkedInAlt: "LinkedIn",
        GitHubAlt: "GitHub",
        FaceRecognitionAlt: "Reconnaissance faciale",
        Errors: {
          GoogleLoginCancelled: "La connexion Google a été annulée. Veuillez réessayer.",
          LinkedInLoginCancelled: "La connexion LinkedIn a été annulée. Veuillez réessayer.",
          InvalidCredentials: "L'e-mail et le mot de passe sont requis.",
          UserNotFound: "Aucun compte trouvé avec cet e-mail. Veuillez vous inscrire d'abord.",
          EmailNotVerified: "Votre e-mail n'est pas vérifié. Veuillez vérifier votre boîte de réception.",
          IncorrectPassword: "Le mot de passe saisi est incorrect.",
          UserPasswordEmail:
            "Vous n'avez pas encore défini de mot de passe. Veuillez vérifier votre e-mail. Un nouveau mot de passe vous sera envoyé.",
          UnexpectedError: "Une erreur inattendue s'est produite. Veuillez réessayer..",
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;