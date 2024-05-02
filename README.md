# Blockchain notes utiles pour correcteur

## Partie théorique
Partie théorique assez claire et compréhensible abordé sans difficultés.

## Partie pratique
Partie pratique plus complexe, beaucoup de temps passé dessus et rencontre de nombreux problèmes plus ou moins simple à résoudre.  
ci-dessous mes différents éssaies concernant la création de tokens et le déploiement de contrats (dont l'interface utilisateur pour les mariages).  

### Web3_Complete :
Fourth attempt(à la maison) :  
Objectif : tout refaire depuis chez moi pour vérifier si j'ai bien compris et proposer un rendu plus complet et fonctionnel.  
tester de marier : "0x2ea018e72Fa373dD48DF581C0f6466fA79ddFde2" , "0x8cC38bD6E448fFA17458d5D32c6CAf530A09c998" et ajouter des enfant ou encore les divorcer.  
Je n'ai pas pu aller plus loin dans les tests de mon contrat 'MODULE_NOT_FOUND' lors de l'execution de mes commandes, je suis sur une machine sur laquelle je recontre des problèmes pour l'utilisation de metamask(réglés) et node.js(non réglés) je n'ai pas l'installation fait en classe car j'avais emprunté un ordinateur(j'ai testé avec node derniere version ainsi que node LTS mais mes problèmes persistent).  
Néanmoins j'ai quand même pu connecter mon contrat à mon account 1(ci-dessous) depuis etherscan et proposer un nouveau code plus logique dans cette partie "Web3_Complete".  

### 9Zhardhat-boilerplate-master :
Third attempt(à l'école) :  
Dans cette partie "9Zhardhat-boilerplate-master" je me suis basé sur le projet donné en cours pour gérer la lecture des contrat.  
Lecture des contrats (9Zhardhat-boilerplate-master frontend src components LireContrat)  
(Lecture non fonctionnels car appel aux getMarie1 et getMarie2 sont à réaliser dans LireContrat)  

### contrat_marriage :
Second attempt(à l'école) : 
Dans cette partie "contrat_marriage" j'ai continué à réfléchir sur la mise en place du système de mariage et pour ce faire j'ai donc déployé mon contrat.  
Déploiement du contrat sur https://sepolia.etherscan.io/address/0x46256fA6d3D088a1EcE110dd134734A4005A070e#readContract  
adresse : 0x46256fA6d3D088a1EcE110dd134734A4005A070e  

### contrat_mariage :
First attempt(à l'école) :  
Dans cette partie "contrat_mariage" j'ai commencé à réfléchir sur la mise en place du système de mariage en créant une interface pour les mariages.  
Interface pour mariage dans contrat_mariage src components CreateMariage  
(Mariages non fonctionnels)  

# Adresse account 1
0x0176FB5DA91dB2600CcC7878D8f1E143491e6866  
## Token TKN
0x208B9426B092770Fc056beE8Ec5DFfB7DcC4dA79  
## Token NHD
0x76081d69736A002948Ae11650F07996b2A2f5A7b  
## Token NHD (avec IERC20)
0x6A0A4a782B09dF39e53D9d013072F76ABE159009  
  
# Adresse account 2 (local)
0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266  