var form = document.getElementById('formulario');
var campo = document.getElementById('cidadeDigitada');
var cont = 0;

function descerTela(){
    var target_offset = $("#saida").offset();
    var target_top = target_offset.top;
    $('html, body').animate({ scrollTop: target_top }, 1000);
}

function tabelaClima(clima){
    if(clima == "ec"){
	Traducao = "Encoberto com Chuvas Isoladas";
    }
    if(clima == "ci"){
        Traducao = "Chuvas Isoladas<Br>";
    }
    if(clima == "c"){
        Traducao = "Chuva<Br>";
    }
    if(clima == "in"){
        Traducao = "Instável<Br>";
    }
    if(clima == "pp"){
        Traducao = "Poss. de Pancadas de Chuva";
    }
    if(clima == "cm"){
        Traducao = "Chuva pela Manhã<Br>";
    }
    if(clima == "cn"){
        Traducao = "Chuva a Noite<Br>";
    }
    if(clima == "pt"){
        Traducao = "Pancadas de Chuva a Tarde";
    }
    if(clima == "pm"){
        Traducao = "Pancadas de Chuva pela Manhã";
    }
    if(clima == "np"){
        Traducao = "Nublado e Pancadas de Chuva";
    }
    if(clima == "pc"){
        Traducao = "Pancadas de Chuva<Br>";
    }
    if(clima == "pn"){
        Traducao = "Parcialmente Nublado<Br>";
    }
    if(clima == "cv"){
        Traducao = "Chuvisco<Br>";
    }
    if(clima == "ch"){
        Traducao = "Chuvoso<Br>";
    }
    if(clima == "t"){
        Traducao = "Tempestade<Br>";
    }
    if(clima == "ps"){
        Traducao = "Predomínio de Sol<Br>";
    }
    if(clima == "e"){
        Traducao = "Encoberto<Br>";
    }
    if(clima == "n"){
        Traducao = "Nublado<Br>";
    }
    if(clima == "cl"){
        Traducao = "Céu Claro<Br>";
    }
    if(clima == "nv"){
        Traducao = "Nevoeiro<Br>";
    }
    if(clima == "g"){
        Traducao = "Geada<Br>";
    }
    if(clima == "ne"){
        Traducao = "Neve<Br>";
    }
    if(clima == "nd"){
        Traducao = "Não Definido<Br>";
    }
    if(clima == "pnt"){
        Traducao = "Pancadas de Chuva a Noite";
    }
    if(clima == "psc"){
        Traducao = "Possibilidade de Chuva<Br>";
    }
    if(clima == "pcm"){
        Traducao = "Possibilidade de Chuva pela Manhã";
    }
    if(clima == "pct"){
        Traducao = "Possibilidade de Chuva a Tarde";
    }
    if(clima == "pcn"){
        Traducao = "Possibilidade de Chuva a Noite";
    }
    if(clima == "npt"){
        Traducao = "Nublado com Pancadas a Tarde";
    }
    if(clima == "npn"){
        Traducao = "Nublado com Pancadas a Noite";
    }
    if(clima == "ncn"){
        Traducao = "Nublado com Poss. de Chuva a Noite";
    }
    if(clima == "nct"){
        Traducao = "Nublado com Poss. de Chuva a Tarde";
    }
    if(clima == "ncm"){
        Traducao = "Nubl. c/ Poss. de Chuva pela Manhã";
    }
    if(clima == "npm"){
        Traducao = "Nublado com Pancadas pela Manhã";
    }
    if(clima == "npp"){
        Traducao = "Nublado com Possibilidade de Chuva";
    }
    if(clima == "vn"){
        Traducao = "Variação de Nebulosidade";
    }
    if(clima == "ct"){
        Traducao = "Chuva a Tarde<Br>";
    }
    if(clima == "ppn"){
        Traducao = "Poss. de Panc. de Chuva a Noite";
    }
    if(clima == "ppt"){
        Traducao = "Poss. de Panc. de Chuva a Tarde";
    }
    if(clima == "ppm"){
        Traducao = "Poss. de Panc. de Chuva pela Manhã";
    }
    
    return Traducao;
}

function removerAcentos(str){
    com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    novastr="";
    for(i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<com_acento.length; a++) {
            if (str.substr(i,1)==com_acento.substr(a,1)) {
                novastr+=sem_acento.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return(novastr);
}

function getDiaSemana(data){
    data = (new Date(data)).getDay();
    if (data == "0") {
        return "Domingo";
    }
    if (data == "1") {
        return "Segunda-Feira";
    }
    if (data == "2") {
        return "Terça-Feira";
    }
    if (data == "3") {
        return "Quarta-Feira";
    }
    if (data == "4") {
        return "Quinta-Feira";
    }
    if (data == "5") {
        return "Sexta-Feira";
    }
    if (data == "6") {
        return "Sábado";
    }
}

function semImagem(imagem){
    imagem.src = "img/sem_foto.png";
}

function consultarCidade() {
    if (obj.readyState == 4) {                    
        if (obj.status == 200) {
            imp = document.getElementById("saida");
            consultarCidade = obj.responseXML;
            var cont = 1;
            var codigo = "";

            cidades = consultarCidade.getElementsByTagName("cidade");
            if(cidades.length == 0){
                imp.innerHTML = '<hr><center><h1>Nenhuma cidade localizada com o termo "' + cidade + '"</h1></center><hr>';
            }else if(cidades.length == 1){
                descerTela();
                codigo = cidades[0].getElementsByTagName("id");
                codigo = codigo[0].textContent;
                consultarPrevisao(codigo);
            }else{
                var html = "";
                for (ix = 0; ix < cidades.length; ix++) {
                    codigo = cidades[ix].getElementsByTagName("id");
                    codigo = codigo[0].textContent;
                    cidade = cidades[ix].getElementsByTagName("nome");
                    cidade = cidade[0].textContent;
                    estado = cidades[ix].getElementsByTagName("uf");
                    estado = estado[0].textContent;

                    var cidadeMod = cidade.toLowerCase();
                    cidadeMod = (cidadeMod.split(" ").join("-"));
                    if(cont == 1){
                        html += "<div class='d-flex flex-nowrap'>";
                        html += "<div class='order-1 p-2'>";
                    }else if(cont == 2){
                        html += "<div class='order-2 p-2'>";
                    }else if(cont == 3){
                        html += "<div class='order-3 p-2'>";
                    }else if(cont == 4){
                        html += "<div class='order-4 p-2'>";
                    }

                    var imagem = "https://dwpt1kkww6vki.cloudfront.net/img/brasil/brasao/" + removerAcentos(cidadeMod) + ".png";

                    html += "<div class='zoom'><div class='card' style='width: 18rem;'>";
                    html += "<img onerror='semImagem(this)' onclick='consultarPrevisao(" + codigo + ")' width='75' height='150' class='card-img-top' src='" + imagem + "'>";
                    html += "<div class='card-body'><hr>";
                    html += "<h5 class='card-title'><center>" + cidade + " - " + estado + "</center></h5></div></div></div></div>";

                    cont++;
                    if(cont == 5){
                        html += "</div>";
                        cont = 1;
                    }
                }
                imp.innerHTML += html;
            }
        }
    }
}

function consultarPrevisao(cidade){
    descerTela();
    iniciaRequest("http://servicos.cptec.inpe.br/XML/cidade/7dias/" + cidade + "/previsao.xml", "consultar7Dias");
}

function consultar7Dias() {
    if (obj.readyState == 4) {                    
        if (obj.status == 200) {
            imp = document.getElementById("saida");
            imp.innerHTML = "<ul>";
            consultar7Dias = obj.responseXML;
            var cont = 1;
            dias = consultar7Dias.getElementsByTagName("previsao");
            cidade = consultar7Dias.getElementsByTagName("nome");
            uf = consultar7Dias.getElementsByTagName("uf"); 
            imp.innerHTML = "<hr><center><h1>" + (cidade[0].textContent) + " - " + (uf[0].textContent) + "</center></h1><hr>";
            var html = "";
            for (ix = 0; ix < dias.length; ix++) {                            
                var valor = dias[ix].textContent;
                if (!valor) {
                    valor = dias[ix].text;
                }
                
                dia = dias[ix].getElementsByTagName("dia"); 
                dia = (dia[0].textContent);
                dia = new Date(dia);
                dia2 = new Date(dia.getTime() + (1 * 24 * 60 * 60 * 1000));
                diaSemana = getDiaSemana(dia2);
                dia2 = new Date(dia2).toLocaleDateString();
                iuv = dias[ix].getElementsByTagName("iuv"); 
                iuv = (iuv[0].textContent);
                tempo = dias[ix].getElementsByTagName("tempo"); 
                tempo = (tempo[0].textContent);
                var definicaoTempo = "";
                switch (tempo){
                    case "ci":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "c":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "ci":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "cm":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "cn":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "cv":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "ch":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "t":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "pnt":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "ct":
                        this.definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "ec":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "pt":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "pm":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "pc":
                        definicaoTempo = "cloud-showers-heavy";
                        break;
                    case "cl":
                        definicaoTempo = "sun";
                        break;
                    case "cl":
                        definicaoTempo = "sun";
                        break;
                    case "ps":
                        definicaoTempo = "sun";
                        break;
                    case "g":
                        definicaoTempo = "snowflake";
                        break;
                    case "ne":
                        definicaoTempo = "snowflake";
                        break;
                    default:
                        definicaoTempo = "cloud";
                        break;
                }
                
                tempo = tabelaClima(tempo);
                minima = dias[ix].getElementsByTagName("minima");
                minima = (minima[0].textContent);
                maxima = dias[ix].getElementsByTagName("maxima");
                maxima = (maxima[0].textContent);
                
                if(cont == 1){
                    html += "<div class='d-flex flex-nowrap'>";
                    html += "<div class='order-1 p-2'>";
                }else if(cont == 2){
                    html += "<div class='order-2 p-2'>";
                }else if(cont == 3){
                    html += "<div class='order-3 p-2'>";
                }else if(cont == 4){
                    html += "<div class='order-4 p-2'>";
                }
                
                html += "<div class='zoom'><div class='features-icons-icon d-flex'><div class='card' style='width: 18rem;'>";
                html += "<center><h2><br></i>" + diaSemana + "</h2><br><h5>" + dia2 + "</h5></center>";
                html += "<div class='card-body'><hr>";
                html += "<h5 class='card-title'><center>";
                html += "<div title='Clima'><i class='fas fa-" + definicaoTempo + "'></i> " + tempo + "<br></div><hr>";
                html += "<div title='Índice Ultravioleta'><i class='fas fa-radiation'> IUV: </i> " + iuv + "<br></div><hr>";
                html += "<div title='Temperatura máxima'><i class='fas fa-arrow-up'></i> Máxima: " + maxima + " ºC<br></div><hr>";
                html += "<div title='Temperatura mínima'><i class='fas fa-arrow-down'></i> Mínima: " + minima + " ºC</center></h5></div></div></div></div></div>";
                
                cont++;
                if(cont == 5){
                    html += "</div>";
                    cont = 1;
                }
            }
            html += "<div class='order-4 p-2'>";
            html += "<div class='zoom'><div class='features-icons-icon d-flex'><div class='card' style='width: 18rem;'>";
            html += "<br><center><h4>Tabela IUV</h4></center><hr>";
            html += "<div class='card-body'>";
                html += "<img width='370' height='350' class='card-img-top' src='img/iuv.png'>";
                html += "</center></h5></div></div></div></div>";
            
            imp.innerHTML += html;
        }
    }
}

function iniciaRequest(url, consulta) {
    if (window.XMLHttpRequest) {
        obj = new XMLHttpRequest();
        if(consulta == "consultarCidade"){
            obj.onreadystatechange = consultarCidade;
        }
        if(consulta == "consultar7Dias"){
            obj.onreadystatechange = consultar7Dias;
        }
        try {
            obj.open("GET", url, true);
            obj.send(null);
        } catch (exc) {
            alert("Exception: " + exc);
        }
    } else if (window.ActiveXObject) {
        obj = new ActiveXObject("Microsoft.XMLHTTP");
        obj.onreadystatechange = resposta;
        obj.open("GET", url, true);
        obj.send();
    } else {
        alert("Seu navegador não suporta ajax");
        return;
    }
}

form.addEventListener('submit', function(e) {
    window.location = '?cidade=' + campo.value;
    
    // impede o envio do form
    e.preventDefault();
}); 

var url = purl(window.location.href);
var cidade = url.param('cidade');

if(cidade != null){
    iniciaRequest("http://servicos.cptec.inpe.br/XML/listaCidades?city=" + removerAcentos(cidade), "consultarCidade");
    descerTela();
}