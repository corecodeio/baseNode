const pgdb = require('../util/posgre-database');

const AccountType = {};

AccountType.create = (data) => {
  return new Promise((resolve, reject) => resolve(true));
}

AccountType.findById = (data) => {
  return new Promise((resolve, reject) => resolve({rows:[]}));
}

AccountType.fetchAll = () => {
  return new Promise((resolve, reject) => resolve({rows:[]}));
}

module.exports = AccountType;