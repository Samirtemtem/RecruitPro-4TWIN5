# RecruitPro - Solution Complète de Recrutement

RecruitPro est une plateforme de recrutement de bout en bout qui connecte les candidats avec les employeurs et fournit une mise en relation intelligente des emplois grâce à un système intégré de suivi des candidatures.

## Table des Matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Exécution du Frontend](#exécution-du-frontend)
- [Exécution du Backend](#exécution-du-backend)
- [Configuration du Système de Suivi des Candidatures](#configuration-du-système-de-suivi-des-candidatures)
- [Intégration](#intégration)
- [Dépannage](#dépannage)

## Prérequis

- Node.js (v14.x ou ultérieur)
- npm (v7.x ou ultérieur)
- MongoDB (v4.4 ou ultérieur)
- Python (v3.8 ou ultérieur)
- pip (dernière version)
- Docker (optionnel, pour déploiement en conteneur)

## Installation

### Cloner le Dépôt

```bash
git clone https://github.com/yourusername/RecruitPro.git
cd RecruitPro
```

### Installer les Dépendances Frontend

```bash
cd Frontend
npm install
```

### Installer les Dépendances Backend

```bash
cd Backend
npm install
```

## Exécution du Frontend

Depuis la racine du projet:

```bash
cd Frontend
npm start
```

L'application frontend sera disponible à l'adresse `http://localhost:3000`.

## Exécution du Backend

### Configuration de l'Environnement

Créez un fichier `.env` dans le répertoire Backend avec les variables suivantes:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/recruitpro
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RECOMMENDATION_SERVICE_URL=http://localhost:5001
```

### Démarrer le Serveur Backend

Depuis la racine du projet:

```bash
cd Backend
npm start
```

Ou pour le développement avec redémarrage automatique:

```bash
npm run dev
```

L'API backend sera disponible à l'adresse `http://localhost:5000`.

## Configuration du Système de Suivi des Candidatures

Le Système de Suivi des Candidatures (ATS) est un service basé sur Python qui fournit des recommandations d'emploi intelligentes grâce à l'apprentissage automatique.

### Installer les Dépendances Python

```bash
cd Backend/applicant_tracking_system
pip install -r requirements.txt
```

### Exécution du Système de Suivi des Candidatures

L'ATS peut être exécuté de deux façons:

#### Option 1: Exécution Python Directe

```bash
cd Backend/applicant_tracking_system
python app.py
```

Cela démarrera le service de recommandation à l'adresse `http://localhost:5001`.

#### Option 2: Utilisation de Docker (Recommandé pour la Production)

```bash
cd Backend/applicant_tracking_system
docker build -t recruit-pro-ats .
docker run -p 5001:5001 recruit-pro-ats
```

### Planification des Mises à Jour Régulières des Recommandations

Le système comprend un script pour mettre à jour périodiquement les recommandations:

```bash
cd Backend/applicant_tracking_system
chmod +x schedule_recommendations.sh
./schedule_recommendations.sh
```

Cela configurera une tâche cron pour exécuter le moteur de recommandation quotidiennement.

## Intégration

L'application principale communique avec le Système de Suivi des Candidatures via l'API du service de recommandation. Assurez-vous que:

1. L'ATS est en cours d'exécution avant d'utiliser les fonctionnalités de recommandation dans l'application principale
2. Le `RECOMMENDATION_SERVICE_URL` dans le fichier `.env` du backend pointe vers l'adresse correcte où l'ATS est en cours d'exécution

## Flux de Données

1. Les profils d'utilisateurs et les offres d'emploi sont stockés dans MongoDB via le backend principal
2. L'ATS récupère périodiquement ces données pour mettre à jour ses modèles de recommandation
3. Lorsqu'un utilisateur demande des recommandations d'emploi, le backend principal transmet la demande à l'ATS
4. L'ATS calcule des recommandations personnalisées et les renvoie au backend principal
5. Le backend principal renvoie ces recommandations au frontend

