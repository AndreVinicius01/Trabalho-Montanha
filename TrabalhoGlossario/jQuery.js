// Arquivo: script.js

jQuery(document).ready(function(){
    // Carregar o arquivo JSON
    jQuery.getJSON("glossary.json", function(data) {
        // Array para armazenar os itens do glossário
        var items = [];
        
        // Iterar sobre cada chave-valor do JSON
        jQuery.each(data, function(key, val) {
            // Criar HTML para cada termo e definição
            var itemHTML = "<div class='term'><h2>" + key + "</h2><p class='definition'>" + val + "</p></div>";
            // Adicionar o HTML ao array de itens
            items.push(itemHTML);
        });
        
        // Adicionar os itens do glossário ao elemento com id "glossary"
        jQuery("#glossary").append(items.join(""));
        
        // Adicionar funcionalidade de clique para exibir definições
        jQuery(".term").click(function(){
            jQuery(this).find(".definition").toggleClass("show");
        });
    });
});