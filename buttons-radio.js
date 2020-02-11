import {Template} from 'meteor/templating';

Template.afButtonsRadio.onCreated(function () {
    this.currentValue = new ReactiveVar('');

    this.autorun(() => {
        const data = Template.currentData();

        this.currentValue.set(data.value);
    });
});

Template.afButtonsRadio.helpers({
    currentValue() {
        return Template.instance().currentValue.get();
    },
    iconLink() {
        return Meteor.settings.public.assetsCDN + this.icon + '.png';
    },
    attributes() {
        let attributes = {
            value: this.value,
            name: this.name
        };

        if (this.atts) {
            attributes.schemaKey = this.atts['data-schema-key'];
            attributes.id = this.atts.id;
        }

        return attributes;
    },
    isSelected() {
        return this.value == Template.instance().currentValue.get() ? 'primary' : '';
    }
});

Template.afButtonsRadio.events({
    'click .button'(event, template) {
        const $button = template.$(event.currentTarget);
        const removeClass = $button.hasClass('primary');
        const $input = template.$('input');
        const oldValue = template.currentValue.get();
        let newValue = '';

        if (removeClass) {
            $input.val('');
            template.currentValue.set('');
        } else {
            $input.val(this.value);
            template.currentValue.set(this.value);
            newValue = this.value;
        }
        if (newValue != oldValue) {
            $input.trigger('change');
        }
    }
});