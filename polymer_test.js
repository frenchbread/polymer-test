if (Meteor.isClient) {

    Template.helperOne.helpers({
        attributeObject: function(){
            return {checked: true}
        }
    })
}