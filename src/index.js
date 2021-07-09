(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.url2fullpath = function (inUrl) {
    var url = new URL(inUrl || location.href);
    return url.href.replace(url.protocol + '//' + url.host, '');
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.url2fullpath;
  }
})();
