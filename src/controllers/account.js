const Account = require('../models/account');

module.exports.createAccount =  (req, res, next) => {
  const args = [req.body.description, req.body.account_type, req.body.currency, req.user.uid];
  console.log(args);
  Account.create(args)
  .then(() => res.status(200).json({ valid: true, message: 'Account created!' }))
  .catch((e) => res.status(400).json({ valid: false, message: e }));
}

module.exports.getAccount = (req, res, next) => {
  res.status(200).json({ valid: true, message: 'getAccount' })
}

module.exports.getAccounts = (req, res, next) => {
  const args = [req.user.uid];
  Account.fetchAll(args)
  .then(({rows}) => res.status(200).json({ valid: true, data: rows }))
  .catch((e) => res.status(400).json({ valid: false, message: e }));
}
