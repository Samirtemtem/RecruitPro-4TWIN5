# RecruitPro - Plateforme de Recrutement Intelligente

## Description
RecruitPro est une plateforme de recrutement complète qui facilite le processus d'embauche de bout en bout, en connectant les candidats, les recruteurs et les gestionnaires d'équipe dans un écosystème intégré.

## Acteurs du Système

### 1. Candidats
- Inscription et gestion de profil
- Téléchargement de CV
- Postulation aux offres d'emploi
- Suivi des candidatures
- Participation aux entretiens en ligne
- Gestion des offres d'emploi reçues

### 2. Gestionnaires RH
- Création et gestion des offres d'emploi
- Évaluation des candidatures
- Planification des entretiens
- Gestion du processus de recrutement
- Génération de rapports

### 3. Gestionnaires de Département
- Création d'offres d'emploi spécifiques au département
- Évaluation des candidats
- Participation aux entretiens
- Gestion des équipes

### 4. Chefs d'Équipe
- Participation aux entretiens
- Évaluation technique des candidats
- Feedback sur les candidatures

### 5. Administrateur
- Gestion des utilisateurs
- Configuration du système
- Supervision globale
- Gestion des droits d'accès

## Fonctionnalités Principales

### 1. Gestion des Utilisateurs
- Inscription avec validation par email
- Authentification à deux facteurs (2FA)
- Gestion des profils utilisateurs
- Intégration avec Google et LinkedIn
- Reconnaissance faciale pour la connexion

### 2. Gestion des Offres d'Emploi
- Création et publication d'offres
- Catégorisation par département
- Définition des exigences et compétences
- Gestion des dates de publication et deadline
- Statuts multiples (OPEN, CLOSED, PENDING)

### 3. Gestion des Candidatures
- Soumission de candidature avec CV
- Analyse automatique des CV
- Scoring de compatibilité
- Suivi du statut des candidatures
- Pipeline de recrutement (SUBMITTED → REVIEWED → INTERVIEWED → ACCEPTED/REJECTED)

### 4. Système d'Entretiens
- Planification automatique des entretiens
- Intégration avec Google Calendar
- Génération automatique de liens Google Meet
- Gestion des participants (managers, chefs d'équipe)
- Suivi des feedbacks d'entretien

### 5. Analyse et IA
- Analyse SWOT automatique des candidatures
- Matching de compétences
- Évaluation de compatibilité
- Suggestions de candidats
- Analyse des tendances de recrutement

### 6. Tableau de Bord et Rapports
- Vue d'ensemble du processus de recrutement
- Statistiques en temps réel
- Rapports de performance
- Suivi des métriques clés
- Visualisation des données

## Aspects Techniques

### Frontend
- React.js avec TypeScript
- Interface responsive et moderne
- Composants réutilisables
- Gestion d'état avec Context API
- Validation des formulaires avec Yup

### Backend
- Node.js avec Express
- MongoDB pour le stockage des données
- JWT pour l'authentification
- API RESTful
- Gestion des fichiers avec Cloudinary

### Sécurité
- Authentification JWT
- Validation 2FA
- Hachage des mots de passe
- Vérification des emails
- Gestion des sessions

### Intégrations
- Google Calendar
- Google Meet
- LinkedIn
- Cloudinary pour le stockage
- Modele AI d'analyse de CV

## Installation et Configuration

### Prérequis
- Node.js (v14 ou supérieur)
- MongoDB
- npm ou yarn
- Compte Cloudinary
- Compte Google Cloud Platform

### Installation

1. Cloner le repository :
```bash
git clone https://github.com/votre-repo/RecruitPro.git
cd RecruitPro
```

2. Installer les dépendances Frontend :
```bash
cd Frontend
npm install
```

3. Installer les dépendances Backend :
```bash
cd Backend
npm install
```

4. Configuration des variables d'environnement :
Créer un fichier `.env` dans le dossier Backend avec :
```
PORT=5000
MONGODB_URI=votre_uri_mongodb
JWT_SECRET=votre_secret_jwt
CLOUDINARY_CLOUD_NAME=votre_cloud_name
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret
GOOGLE_CLIENT_ID=votre_google_client_id
GOOGLE_CLIENT_SECRET=votre_google_client_secret
```

5. Lancer l'application :
```bash
# Dans le dossier Backend
npm run dev

# Dans le dossier Frontend
npm start
```

## Contribution
Les contributions sont les bienvenues ! Veuillez suivre ces étapes :
1. Forker le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

