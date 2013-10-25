Ember.SimpleAuth.AuthenticatedRouteMixin = Ember.Mixin.create({
  beforeModel: function(transition) {
    if (!this.get('session.isAuthenticated')) {
      transition.abort();
      this.triggerLogin(transition);
    }
  },

  triggerLogin: function(transition) {
    this.set('session.attemptedTransition', transition);
    this.send('login');
  }
});
