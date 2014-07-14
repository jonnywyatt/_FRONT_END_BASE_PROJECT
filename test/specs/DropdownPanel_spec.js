describe('Dropdown panel', function () {

  'use strict';

  beforeEach(function (done) {
    var self = this;
    requirejs(
        ['jquery', 'DropdownPanel'],
        function ($, Mod) {
          self.$html = $(window.__html__['test/fixtures/DropdownPanel.html']);
          self.module = new Mod(self.$html);
          self.$panel = self.$html.find('.panel');
          done();
        }, done);
  });

  function isOpen($el) {
    return $el.hasClass('active');
  }

  describe('toggle panel', function () {

    it('should open when user clicks the open button', function () {
      this.$html.find('button').click();
      expect(isOpen(this.$panel)).to.be.true;
    });

    it('should close when user clicks the open button and the panel is open', function () {
      this.$html.find('button').click();
      this.$html.find('button').click();
      expect(isOpen(this.$panel)).to.be.false;
    });

  });

});

