const { createApp } = Vue;

createApp({
  data() {
    return {
      titre: "Ma liste",
      visible: true,
      liste: ["Gaston Crampe", "James Bond"],
      prenom: '',
      nom: '',
      erreur: false
    };
  },
  methods: {
    masquer() {
      this.visible = !this.visible;
    },
    ajouter() {
      if (this.nom && this.prenom) {
        this.liste.push(this.prenom + ' ' + this.nom);
        this.prenom = '';
        this.nom = '';
        this.erreur = false;
      } else {
        if(this.prenom && !this.nom) {
          alert("Vous n'avez pas de nom ???");
        } else if(this.nom && !this.prenom) {
          alert("Vous n'avez pas de prénom ???");
        } else {
          alert("Vous n'avez rien saisie !!!");
        }
        this.erreur = true;
      }
    },
    retirer() {
      this.liste.pop();
    }
  }
}).mount('#monForm');
