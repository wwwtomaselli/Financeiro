$(document).ready(function(){
    var listagem = new ContaCorrente();
    listagem.fetch();
    var tabela = new Tabela({coll: listagem});
    var saldo = new Saldo({coll: listagem});
    
    $('#data').datepicker({
        format: "dd/mm/yyyy",
        endDate: "today",
        todayBtn: "linked",
        clearBtn: true,
        language: "pt-BR"
    });
    
    $('#valor').maskMoney();
    
    $('#salvar').click(function(){
        var valores = {
            data: $('#data').val(),
            desc: $('#descricao').val(),
            cat: $('#categoria').val(),
            tipo: $('input[name="tipo"]:checked').val(),
            valor: $('#valor').maskMoney('unmasked')[0]
        };
        listagem.add(valores);
        $('#form-add').modal('hide');
        $('input').val('');
        listagem.update();
    });
});