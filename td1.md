https://github.com/OpenZeppelin/openzeppelin-contracts/tree/v5.0.2/contracts/token/ERC20

Decrivez le contrat ERC20.sol et expliquez son fonctionnement. A l'aide du lien sur l'heritage deployez un contrat qui herite de ERC20.sol et deployez le sur le testnet de votre choix.

1-Le contrat ERC20.sol est un contrat standard qui définit les fonctionnalités de base pour un token Ethereum conforme à la norme ERC-20. Ce contrat fournit des méthodes permettant de transférer des tokens, d'autoriser d'autres adresses à transférer des tokens en votre nom, de vérifier le solde d'un compte, etc.

SafeERC20.sol, est une bibliothèque qui enveloppe les opérations ERC20 pour éviter les échecs. Il permet d'effectuer des opérations ERC20 de manière sécurisée en lançant une erreur si une opération échoue, par exemple, si un transfert de tokens échoue. Cela permet d'éviter des situations où des tokens sont bloqués ou perdus sans que le contrat ne s'en aperçoive.

Voici une brève explication des principales fonctions de la bibliothèque SafeERC20 :

safeTransfer: Transfère une quantité donnée de tokens à une adresse donnée de manière sécurisée.
safeTransferFrom: Transfère une quantité donnée de tokens depuis une adresse source à une adresse destination de manière sécurisée.
safeIncreaseAllowance: Augmente l'autorisation du contrat appelant envers une autre adresse à dépenser ses tokens.
safeDecreaseAllowance: Diminue l'autorisation du contrat appelant envers une autre adresse à dépenser ses tokens.
forceApprove: Force l'approbation d'une certaine quantité de tokens à une adresse donnée. Utile pour certains tokens qui nécessitent que l'autorisation soit réinitialisée avant d'être fixée à une nouvelle valeur.

A l'aide de :

- https://solidity-by-example.org/inheritance/
  et de :
- https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol

Ensuite déployez le contrat de votre jeton sur le testnet de votre choix!

Ajoutez votre jeton a metamask et envoyez le a un ami!

https://solidity-by-example.org/

https://docs.soliditylang.org/en/v0.8.25/
