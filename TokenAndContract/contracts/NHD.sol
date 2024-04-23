//SPDX-Licence-Identifier: UNLICENSED
 
pragma solidity ^0.8.0;
 
// la ligne ce dessous declare un contrat Token
contract NHDToken {
    string public name = "NHD_Token";
    string public symbol = "NHD";
 
    // la ligne ci dessous declare une variable de type uint256
    uint256 public totalSupply = 1000000;
 
    //
    address public owner;

    mapping(address => uint256) public balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(){
        balances[msg.sender]=totalSupply;
        owner=msg.sender;
    }

function transfer(address to, uint256 value) external {
        require(balances[msg.sender] >= value, "Insufficient balance");

        balances[msg.sender] -= value;
        balances[to] += value;

        emit Transfer(msg.sender, to, value);
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }

}