require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remain mistake hunt castle swift trust'; 
let testAccounts = [
"0x68b1298db941caa7641570bcb6acf17fa6085a358b6f7f16ca8fb3006d799569",
"0x0b46b0619f93997e25f5f35e57eaf8a6d72d7371cfb655a820b35d9b813d6b7d",
"0xf08a3f235bc841d6d3030533e66a6bea6c4ca801a5611c006a06820e63cfc68f",
"0xe5b754969002db67c4d640541257b745e26a97f850dec093136c7a6e837c0cff",
"0x3d1c34e2483742472a6837979741bf67c10b5ab575b8765f7e5b8e22477d2156",
"0xd3c722b9549af3aa51476cf45096cc96556ac35ca5716b00d897b05b9385511d",
"0x5402fa5f64eb1d5befd83a2482eeb3d417a360faed229e0590c7a8e96a173637",
"0x0bb65ffd547c57c57b6c6de1a954bf134c71a6e03123ba1c6ec3e5c41094a12f",
"0x479809a39c44d0768b5fbc56d5a75b06e12ba2d780c1ff28864ce2f8ff637c77",
"0x266e8ca7eee90db4a794a22fe592b157ff6062d494b8d317429583dd788fbe95"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
