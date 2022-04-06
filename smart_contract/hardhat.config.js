// https://eth-ropsten.alchemyapi.io/v2/F2_i3Vny4pZJ_5K5tPAg1xfe9nr6dH2m

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/F2_i3Vny4pZJ_5K5tPAg1xfe9nr6dH2m',
      accounts: ['0dcf8894d0d3c904379141b8973b794ab50ae6a5ebe318d9857a32f797867fd4']
    }
  }
}