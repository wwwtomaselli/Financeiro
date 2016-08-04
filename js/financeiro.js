var Registro = Backbone.Model.extend({
    defaults: {
        data: '',
        desc: '',
        cat: '',
        tipo: 'D',
        valor: 0.0
    }
});

var ContaCorrente = Backbone.Collection.extend({
    model: Registro,
    //url: 'js/dados.json',
    url: 'js/dados.php',
    update: function(){
        this.sync('update', this);
    }
});

var Tabela = Backbone.View.extend({
    el: '#tbl-cc',
    initialize: function(opt){
        this.coll = opt.coll;
        this.listenTo(this.coll,'sync',this.render);
        this.listenTo(this.coll,'add',this.render);
    },
    
    render: function(){
        var el = $(this.el);
        el.find('tbody').empty();
        this.coll.each(function(elem, idx){
            var tr = $('<tr><td>' +elem.get('data') + '</td><td>'+elem.get('desc') + 
                    '</td><td>'+elem.get('cat') +'</td><td>'+elem.get('tipo') +
                    '</td><td class="valor">R$ '+ elem.get('valor') +'</td></tr>')
            el.find('tbody').append(tr);
        });        
    }
});

var Saldo = Backbone.View.extend({
    el: '#saldo-valor',
    initialize: function(opt){
        this.coll = opt.coll;
        this.listenTo(this.coll,'sync',this.render);
        this.listenTo(this.coll,'add',this.render);
    },
    
    render: function(){
        var el = $(this.el);
        var saldo = 0;
        var sinal = 1;
        this.coll.each(function(elem, idx){
            sinal = 1;
            if (elem.get('tipo') == 'D'){sinal = -1;}
            saldo += sinal*elem.get('valor');
        });
        el.html('R$ '+ Math.abs(saldo));
        if (saldo < 0){
            el.addClass('negativo');
            $('#saldo-tipo').html('D');
            $('#saldo-tipo').addClass('negativo');
        } else {
            el.addClass('positivo');
            $('#saldo-tipo').html('C');
            $('#saldo-tipo').addClass('positivo');
        }
    }
});