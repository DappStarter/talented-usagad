require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind purpose gesture deposit flip gather'; 
let testAccounts = [
"0x99e55b22978eaafcdf07014145fed8b132edc9dae3fea72476a7332dba28a43a",
"0x883831b435b04fc7b04f78b7fb54eba7b94fd0f9ab41a3ca3b81dae79ea87de8",
"0x4dc72f350be665c3540ab741cfb6143f729aa72ba46bfb160f685470d25acda8",
"0xbe5f08ce842e771b669b4765e19735cdaa7dde427ed71711680eec7dc229fb93",
"0x015d3d6143bc645369ddf1cfc62200855d7bbdce9624b4d090526747fb7454f9",
"0x0ed42a1a290ecf58be45933dc5aa63ac9602b636c21eb28ae90dde059d685b34",
"0x2b156f798b88f09c72620fe5e6d3576cff448bd2728a658f744b1b3b0db08141",
"0xa7720c0dc529e6be1fe0fcb347c4e896d67df67d5d7ca728aca9247e7aee61f4",
"0x38496d4888776d5605d1f1218590066d53ec0478dfed2bbe8df85392daa60ed1",
"0x8d2cb226394f4393e7f52c69e6b5f6a74e0c5c9d84315ecb7def2f105bca5289"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
