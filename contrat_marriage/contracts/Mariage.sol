pragma solidity ^0.8.0;

contract Mariage {
    address public marie1;
    address public marie2;
    mapping(address => bool) public estParent;
    mapping(address => bool) public estDecede;
    mapping(address => bool) public estDivorce;
    
    event EnfantAjoute(address enfant, address parent1, address parent2);
    event DecesDeclare(address personneDecedee);
    event DivorceDeclare(address marie1, address marie2);

    constructor(string memory _marie1, string memory _marie2) {
        marie1 = address(uint160(uint256(keccak256(abi.encodePacked(_marie1)))));
        marie2 = address(uint160(uint256(keccak256(abi.encodePacked(_marie2)))));
    }

    function ajouterEnfant(address _enfant) public {
        require(msg.sender == marie1 || msg.sender == marie2, "Vous devez etre un parent");
        require(!estDivorce[msg.sender], "Vous etes divorce, impossible d'ajouter un enfant");
        estParent[_enfant] = true;
        emit EnfantAjoute(_enfant, marie1, marie2);
    }

    function declarerDeces(address _personne) public {
        require(msg.sender == marie1 || msg.sender == marie2, "Vous devez etre un conjoint");
        require(_personne == marie1 || _personne == marie2, "Seul un conjoint peut declarer un deces");
        estDecede[_personne] = true;
        emit DecesDeclare(_personne);
    }

    function declarerDivorce() public {
        require(msg.sender == marie1 || msg.sender == marie2, "Vous devez etre un conjoint");
        require(!estDivorce[msg.sender], "Vous etes deja divorce");
        estDivorce[marie1] = true;
        estDivorce[marie2] = true;
        emit DivorceDeclare(marie1, marie2);
    }

    function getMarie1() public view returns (address) {
        return marie1;
    }

    function getMarie2() public view returns (address) {
        return marie2;
    }

    function leConjoint(address _conjoint) public view returns (address) {
        if (_conjoint == marie1) {
            return marie2;
        }
        else if (_conjoint == marie2) {
            return marie1;
        }
        else {
            return address(0);
        }
    }
}