/*

3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

*/


// Aqui eu fiz para ler o arquivo json
const fs = require('fs');
const path = require('path');


const caminhoArquivo = path.join(__dirname, 'dados.json');

fs.readFile(caminhoArquivo, 'utf8', (err,data) => {
    if(err){
        console.error("Erro ao ler o arquivo\n", err);
        return;
    }


    // Aqui confesso que tive difuldade e o código deu muitos problemas rsrs. Tive que pesquisar bem. Mas aqui vai converter o json para objeto
    const faturamentoMes = JSON.parse(data);


    // Aqui vai ser a function onde calcula o faturamento. Um adendo, aqui é onde ele filtra e calcula os dias que teve faturamento e dias que não teve faturamento
    function calcFaturamento(faturamento){
        const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);

        if(diasComFaturamento.length === 0){
            return{
                menorValor: 0,
                maiorValor: 0,
                diasSuperiorMedia: 0
            };
        }

        // CALCULOS

        //calcuclo do menor e maior valor
        const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
        const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

        //calculo da media
        const faturamentoTotal = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
        const mediaMes = faturamentoTotal / diasComFaturamento.length;

        //calcula os dias com faturamento superior a media
        const diasSuperiorMedia = diasComFaturamento.filter(dia => dia.valor > mediaMes).length;

        return{
            menorValor,
            maiorValor,
            diasSuperiorMedia
        };

    }
    
        const resultado = calcFaturamento(faturamentoMes);

        console.log("Menor valor de faturamento: ", resultado.menorValor);
        console.log("Maior valor de faturamento: ", resultado.maiorValor);
        console.log("Quantidade de dias com faturamento superior da média: ", resultado.diasSuperiorMedia);
});