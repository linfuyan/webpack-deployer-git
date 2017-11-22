/*!
 *  <https://github.com/linfuyan/webpack-deployer-git.git>
 *
 * Copyright (c) 2017, linfuyan(Fuyan Lin).
 * Licensed under the MIT License.
 */

'use strict';

var deployer = require('./lib/deployer');

function WebpackDeployerGit(options) {
    this.options = options;
}

WebpackDeployerGit.prototype.apply = function (compiler) {

    var self = this;

    compiler.plugin('after-emit', function (compilation) {

        console.log(self.options);
        deployer(self.options);

    });
};

module.exports = WebpackDeployerGit;

