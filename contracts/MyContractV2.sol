//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract MyContractV2{

    uint256 private value;

    function setValue(uint256 _value) public {
        value = _value;
    }

    function get() public view returns(uint256){
        return value;
    }

    function incrementValue() public{
        value = value + 1;
    }
}