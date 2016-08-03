//criação de classes e padrões
var Cidade = Backbone.Model.extend({
    defaults: {
        nome: '',
        uf: ''
    }
});

var ListaCidades = Backbone.Collection.extend({
    model: Cidade, //obrigatório em Collection
    url: 'js/cidades.json'
});

var Listagem = Backbone.View.extend({
    el: '#lista',
    model: {}, //não é da classe: este objeto poderia ter qualquer nome
    
    initialize: function(opcoes){
        this.model = opcoes.model;
        this.listenTo(this.model, 'add', this.render); //objeto de Model: evento 'change'
        this.listenTo(this.model, 'change', this.render);
    },
    
    render: function(){
        $(this.el).empty();
        var el = $(this.el);
        this.model.each(function(elem,idx){
            var cidade = elem.get('nome');
            $('<li>' + cidade + '</li>').appendTo(el);
        });
        
    }
});