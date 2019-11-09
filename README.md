# grupo-ecorodovias-api

Para o hackaton FIAP, criamos uma API para fazer POC:

*O PROBLEMA* 
Redução de custos com fornecedores que realizam as podas e redução do trabalho manual de monitoramento do crescimento da vegetação.

*IDENTIFICAÇÃO DO TAMANHO DA VEGETAÇÃO*
Instalação de sensores de presença que irão ficar acoplado ao chão no mesmo canteiro onde a vegetação se encontra. A ideia é formar 3 anéis, um acima do outro, conforme a vegetação cresce e ultrapassa cada um dos anéis, capturamos essa informação para saber em que estágio de crescimento está a mata.

*INFORMAÇÃO DE CONSULTA*
Com os dados em mãos, independente da plataforma escolhida, podemos criar dashboards e alertas sobre o crescimento e manutenção da vegetação de uma determinada região das rodovias administradas.

WEB-API:	https://us-central1-grupo-ecorodovias.cloudfunctions.net/inserirDadoSensor
Exemplo	de	chamada	POST:
{
"gruposensorid":	"HBkbutSH2vtske7JHLyi",
"sensor1":200,
"sensor2":150
}
