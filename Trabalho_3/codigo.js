var vagas=48;
function gerar_comprovante(nm,flnm,tel,em,flem,data){
    let x=1
    nasc=document.getElementById('data').value
    if (!verificar_nome(nm,flnm)||Check(tel)==0||!verificar_email(em,flem)||nasc==""){
        x=verificar_nome(nm,flnm);
        
        Check(tel);
        verificar_email(em,flem);
        x=0
        
    }
    else{if(x==1){
    gerar_comprovante1()
    }}}

function gerar_comprovante1(){
    var jan = window.open("comprovante.html", " janelaNova", "toolbar=no,location=no,directories=no,status=no, menubar=no,scrollbars=yes,resizable=no,width=1000, height=700");// sem espaços entre as vírgulas !
}

function Efetuar_matricula(){
    

    if(vagas<51){
    document.getElementById("main").innerHTML="Pedido enviado <br/><br/>";
    document.getElementById("explicação").innerHTML="Sua vaga esta guardado por enquanto para terminar <br/>a matricula realize o pagamento no Banco";
    vagas++
    let link=document.getElementById('link')
    link.href='boleto.html';
    link.innerHTML="Boleto para pagar"; }
    else{document.getElementById("main").innerHTML="Não há vagas <br/><br/>";
    document.getElementById("explicação").innerHTML="Infelizmente o numero de vagas ja atingiu seu maximo para essa serie lamentamos";
    let link2=document.getElementById('link')
    link2.href='menu.html';
    link2.innerHTML='voltar'}
}

// formulario registro de aluno

function mascarar_tel() {
    var tel=document.getElementById('telefone');
    var r = tel.value.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    tel.value=r;
  }

function Check(id){
    let x=document.getElementById(id);
    if (x.value==""){
        x.style.border='2px solid red';
        x.placeholder='preencha esse campo';
        return 0
    } else{
        x.style.border='2px solid black';
        return 1

    }
    
    
}


function verificar_nome(id,fala){
    var nomeexp=new RegExp("^[a-zA-Z ]+$");
    var desc = document.getElementById(fala);
    var nome=document.getElementById("nome");
    let i=0;
    if (nome.value==""){Check(id)
        if (Check(id)==1){return true}else{return false}}
        else{ if(!nomeexp.test(nome.value)){
        desc.style.backgroundColor="#F08080";
        desc.innerHTML='nome não deve conter numeros ou caracteres especiais e não deve ser vazio!';
        if (ok){
        return false
        }
    
    
}else{desc.style.backgroundColor="white";desc.innerHTML=''; nome.style.backgroundColor='white';
      return true}}}

function verificar_email(id,fala){
    var emailexp = /\S+@\S+\.\S+/;
    var email=document.getElementById("email");
    var desce = document.getElementById(fala);
    if (email.value==""){Check(id)
        if (Check(id)==1){return true}else{return false}

        
    }else{if(!emailexp.test(email.value)){desce.innerHTML="email deve seguir o padrão @_mail.com";
        desce.style.backgroundColor="#F08080";
        return false
        
            
            }else{return true}}
    
}

//cancela 

function Check_RA(){
    let x=document.getElementById('RA');
    if (x.value==''){
        let RA='RA';
        Check(RA)
        return 0
        
    } else {
        if (x.value.length<=14){
            document.getElementById("fala_RA").innerHTML='RA informado é muito pequeno deve ter 15 caracteres';
            document.getElementById('fala_RA').style.backgroundColor='red';
            document.getElementById('fala_RA').style.color='white'
            return 0}else{
                return 1
            }
            }
            
        }
       


function Cancelar(){
    if(Check_RA()==1){
        
        let x=confirm('deseja realmente fazer o cancelamento');
        if (x==true){
            vagas.pop();
            Baixa('informação','info_extr','formu');
        }else{return 0};}
}


function Baixa(info1,info2,formu){
    vagas--
    document.getElementById(info1).innerHTML='Cancelamento concluido'
    document.getElementById(info2).innerHTML='todos os dados referentes ao aluno foram retirados do nosso banco de dados'
}


//gerar horario funções

//coluna para guardar os horarios das series
const coluna1=[[1,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[2,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[3,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[4,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[5,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[6,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[7,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[8,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[9,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[10,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[11,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]],[12,[1,[],[],[],[],[],[]],[2,[],[],[],[],[],[]],[3,[],[],[],[],[],[]],[4,[],[],[],[],[],[]],[5,[],[],[],[],[],[]]]];
//hora
hr=6

//função que guarda o que foi escrito dentro da lista e atualiza a lista na tela
function registra(series,day,disc,prof){
    
    let teste=0;
    disciplina=document.getElementById(disc).value
    serie=document.getElementById(series)
    dias=document.getElementById(day)
    professor=document.getElementById(prof).value
    ano=serie.options[serie.selectedIndex].value;
    dia=dias.options[dias.selectedIndex].value;
    for (i=0;i<coluna1.length;i++){
        if (coluna1[i][0]==ano){
        for (p=0;p<coluna1[0].length;p++){
            if (coluna1[i][p][0]==dia){
                for (x=0;x<coluna1[0][1].length;x++){
                    if (coluna1[i][p][x]==''){
                        coluna1[i][p][x].push(hr);
                        coluna1[i][p][x].push(professor)
                        hr++
                        
                        if (hr==10){
                            hr=11
                        }
                        if (teste==0){
                        document.getElementById('titulo').innerHTML="<br/><strong>"+dias.options[dias.selectedIndex].innerHTML+"</strong>";
                        document.getElementById('container').innerHTML+="<h5 style='border:1px solid black ; width: 10%;'><strong>"+ hr +":00  </strong></h5><h5 style='border:1px solid black ; width: 90%;'>"+coluna1[i][p][x][1]+"</h5>"
                        break
                        }
                        else{
                            break
                        }
                    }
                }
        }
    }
    
}else{
    for(p=0;p<coluna1[0].length;p++){
        if (coluna1[i][p][0]==dia){
            for  (x=0;x<coluna1[0][1].length;x++){
                if (coluna1[i][p][x][0]==hr && coluna1[i][p][x][1]==professor){
                    alert('Professor ja esta escalado para uma aula nesse horario!!')
                    teste=1
                    return
                }
            }
        }
    }
}}}

//finaliza o horario e recomeça
function finaliza(){
    document.getElementById('container').innerHTML=""
    alert('horario da serie finalizado')
    hr=6
}

