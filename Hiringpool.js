import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './HiringPool.html';






/*

if (Meteor.isClient){
	
	Template.body.helpers({resolutions: [{ title: "hello"}
	
	
	]
		
	});
}


if(Meteor.isServer){
	Meteor.startup(function) () {
	
	}); 
}


HiringPool = new Mongo.Collection('HiringPool')

HiringPool: function (){
	return HiringPool.find();
}};
*/

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});
Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
	
	
    instance.counter.set(instance.counter.get() + 1);
  },
});
