document.addEventListener('DOMContentLoaded', function(evento){
    console.log('carregado');
    let botaoClick = document.querySelector('#botaoCalcular');
    botaoClick.addEventListener('click',function(e){
        console.log('clicado ');
        let inputDado = document.querySelector('#salarioBruto');
        if(inputDado.value.length >0){
            let inssPorcentagem = 0;
                let salarioBruto =Number(inputDado.value);
                    if(salarioBruto<=1693.72){
                        inssPorcentagem = salarioBruto*0.08;
                    }else if(salarioBruto >= 1693.73 ||salarioBruto <= 2822.90){
                        inssPorcentagem = salarioBruto*0.09;
                    }else if(salarioBruto >= 2822.91 ||salarioBruto <= 5645.80){
                        inssPorcentagem = salarioBruto*0.11;
                    }else{
                        inssPorcentagem = 621.00;
                    }
                        console.log(`desconto do inss ${inssPorcentagem}`);
                        let descontoInss = salarioBruto - inssPorcentagem;
                        let impostoIRFF = 0;
                            if(descontoInss<=1903.98){
                                impostoIRFF =  descontoInss * 0;
                            }
                            else if(descontoInss >= 1903.99 ||descontoInss <= 2826.65){
                                impostoIRFF =  descontoInss * 0.075
                                
                            }
                            else if(descontoInss >= 2826.66 ||descontoInss <= 3751.05){
                                impostoIRFF =  descontoInss * 0.15;
                                
                            }
                            else if(descontoInss >= 3751.06 ||descontoInss <= 4664.68){
                                impostoIRFF =  descontoInss * 0.22;
                                
                            }
                            else{
                                impostoIRFF =  descontoInss * 0.275;
                            }
                                let salarioFinal = salarioBruto - inssPorcentagem - impostoIRFF;
                                console.log(`salario bruto ${salarioBruto} `+
                                `- desconto inss ${inssPorcentagem} - imposto irff ${impostoIRFF} `
                                +` salario final = ${salarioFinal}`);

                                    let divResposta = document.querySelector('#respota');
                                    divResposta.style.display = "block";
                                       
                                        let salarioTexto = document.createElement('p');
                                            let salarioBrutoTexto = document.createElement('p');
                                                let inssDescontoTexto = document.createElement('p');
                                                    let irffioTexto = document.createElement('p');
                                                    
                                        salarioTexto.innerHTML=` Renda Final :${salarioFinal} `;
                                            salarioBrutoTexto.innerHTML=` Salario Bruto :${salarioBruto}`;
                                                inssDescontoTexto.innerHTML=`  Desconto inss :${inssPorcentagem} `;
                                                    irffioTexto.innerHTML=` Imposto DE Renda :${impostoIRFF}`;

                                        
                                        divResposta.appendChild(salarioBrutoTexto);
                                            divResposta.appendChild(inssDescontoTexto);
                                                divResposta.appendChild(irffioTexto);
                                                    divResposta.appendChild(salarioTexto);       

        }else{
            alert('campo obrigatorio');
        }
        console.log(` ${Number(inputDado.value)} `);

    });
});