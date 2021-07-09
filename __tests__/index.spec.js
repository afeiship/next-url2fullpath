(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.url2fullpath normal/with querystring/with hash', function () {
      var url1 = 'https://github.com/afeiship/next-url2fullpath';
      var url2 = 'https://confluence.demo.cn/pages/viewpage.action?pageId=25196240';
      var url3 = 'https://owlcarousel2.github.io/OwlCarousel2/demos/urlhashnav.html#seven';

      expect(nx.url2fullpath(url1)).toBe('/afeiship/next-url2fullpath');
      expect(nx.url2fullpath(url2)).toBe('/pages/viewpage.action?pageId=25196240');
      expect(nx.url2fullpath(url3)).toBe('/OwlCarousel2/demos/urlhashnav.html#seven');
    });
  });
})();
