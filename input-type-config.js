let AutoForm;

if (Package['aldeed:autoform']) {
    AutoForm = Package['aldeed:autoform'].AutoForm;
} else if (Package['perfectsofttunisia:autoform']) {
    AutoForm = Package['perfectsofttunisia:autoform'].AutoForm;
} else {
    throw new Meteor.Error('You need to add an autoform package');
}

AutoForm.addInputType('buttons-radio', {
    template: 'afButtonsRadio',
    valueOut: function() {
      return this.val();
    },
    valueConverters: {
      string: function(val) {
        return val;
      },
      stringArray: function(val) {
        return [val];
      },
      number: function(val) {
        return parseInt(val);
      },
      numberArray: function(val) {
        return [parseInt(val)];
      }
    },
});