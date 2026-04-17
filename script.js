<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Indústria 4.0 - O Futuro da Automação</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #0a0a2a, #1a1a3a);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            width: 100%;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .relogio {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
            background: rgba(0, 0, 0, 0.5);
            padding: 15px;
            border-radius: 15px;
        }

        .relogio div {
            text-align: center;
            background: linear-gradient(145deg, #00aaff, #0066aa);
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .relogio span {
            font-size: 2.5rem;
            font-family: monospace;
            letter-spacing: 2px;
        }

        .relogio .tempo-texto {
            font-size: 0.8rem;
            display: block;
            margin-top: 5px;
            opacity: 0.8;
        }

        .caixa-principal {
            background: rgba(0, 0, 0, 0.7);
            border-radius: 15px;
            padding: 25px;
            margin-top: 10px;
        }

        .caixa-perguntas {
            font-size: 1.3rem;
            color: #00ddff;
            margin-bottom: 25px;
            line-height: 1.4;
            text-shadow: 0 0 5px rgba(0,221,255,0.5);
        }

        .caixa-alternativas {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .caixa-alternativas button {
            background: linear-gradient(90deg, #1a3a5a, #0d2a4a);
            border: 1px solid #00aaff;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
            text-align: left;
        }

        .caixa-alternativas button:hover {
            background: linear-gradient(90deg, #2a5a8a, #1a4a7a);
            transform: translateX(5px);
            border-color: #ffaa00;
            box-shadow: 0 0 10px rgba(0,170,255,0.5);
        }

        .caixa-resultado {
            text-align: center;
        }

        .texto-resultado {
            color: #ffdd88;
            font-size: 1.1rem;
            line-height: 1.6;
            background: rgba(0,0,0,0.5);
            padding: 20px;
            border-radius: 10px;
            margin-top: 15px;
        }

        .titulo-Industria {
            text-align: center;
            margin-bottom: 20px;
            color: #ffaa44;
            font-size: 1.8rem;
            text-shadow: 0 0 10px rgba(255,170,68,0.5);
        }

        .subtitulo {
            text-align: center;
            color: #88ddff;
            margin-bottom: 15px;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="titulo-Industria">
            🤖 Indústria 4.0 🤖
        </div>
        <div class="subtitulo">
            Robôs | Máquinas Inteligentes | IA Avançada
        </div>
        
        <div class="relogio">
            <div>
                <span id="horas">00</span>
                <span class="tempo-texto">Horas</span>
            </div>
            <div>
                <span id="minutos">00</span>
                <span class="tempo-texto">Minutos</span>
            </div>
            <div>
                <span id="segundos">00</span>
                <span class="tempo-texto">Segundos</span>
            </div>
        </div>

        <div class="caixa-principal">
            <div class="caixa-perguntas"></div>
            <div class="caixa-alternativas"></div>
            <div class="caixa-resultado">
                <div class="texto-resultado"></div>
            </div>
        </div>
    </div>

    <script>
        const caixaPrincipal = document.querySelector(".caixa-principal");
        const caixaPerguntas = document.querySelector(".caixa-perguntas");
        const caixaAlternativas = document.querySelector(".caixa-alternativas");
        const caixaResultado = document.querySelector(".caixa-resultado");
        const textoResultado = document.querySelector(".texto-resultado");

        const perguntas = [
            {
                enunciado: "Assim que sai da linha de produção, você se depara com uma nova tecnologia da Indústria 4.0: robôs autônomos, máquinas com IA e sistemas integrados que otimizam toda a fábrica. Qual o primeiro pensamento?",
                alternativas: [
                    {
                        texto: "Isso vai substituir muitos trabalhadores! É assustador!",
                        afirmacao: "No início ficou com medo do impacto dos robôs e máquinas no emprego humano. "
                    },
                    {
                        texto: "Isso é incrível para a indústria! Quero aprender tudo!",
                        afirmacao: "Quis saber como usar a Indústria 4.0 e robôs no seu dia a dia profissional."
                    }
                ]
            },
            {
                enunciado: "Com a descoberta desta tecnologia da Indústria 4.0 (robôs inteligentes, IA e automação), um instrutor técnico chamado MV114 decidiu fazer uma sequência de aulas sobre este tema. No fim de uma aula ele pede que você escreva um trabalho sobre o uso de IA e robôs na indústria. Qual atitude você toma?",
                alternativas: [
                    {
                        texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para ajudar a encontrar informações relevantes sobre robôs industriais e explicar numa linguagem que facilite o entendimento.",
                        afirmacao: "Conseguiu utilizar a IA para buscar informações úteis sobre automação industrial."
                    },
                    {
                        texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre máquinas e robôs.",
                        afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho sobre Indústria 4.0."
                    }
                ]
            },
            {
                enunciado: "Após a elaboração do trabalho escrito, o instrutor MV114 realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a Indústria 4.0 (robôs, máquinas inteligentes e IA) impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
                alternativas: [
                    {
                        texto: "Defende a ideia de que robôs e IA podem criar novas oportunidades de emprego e melhorar habilidades humanas na indústria.",
                        afirmacao: "Vem impulsionando a inovação na área de robótica e luta para abrir novos caminhos profissionais com Indústria 4.0."
                    },
                    {
                        texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e robôs, defendendo a importância de proteger os trabalhadores.",
                        afirmacao: "Sua preocupação com os trabalhadores motivou a criar um grupo de estudos entre operários para discutir meios de utilização de robôs de forma ética."
                    }
                ]
            },
            {
                enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre a Indústria 4.0. E agora?",
                alternativas: [
                    {
                        texto: "Criar uma imagem utilizando uma plataforma de design tradicional como o Paint, representando robôs manualmente.",
                        afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design sobre máquinas e robôs."
                    },
                    {
                        texto: "Criar uma imagem utilizando um gerador de imagem de IA especializado em robôs e indústria 4.0.",
                        afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem com IA e agora consegue ensinar pessoas que sentem dificuldades em desenhar robôs manualmente como utilizar também!"
                    }
                ]
            },
            {
                enunciado: "Você tem um trabalho em grupo sobre automação industrial para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao que o chat gerou sobre robôs e máquinas. O que você faz?",
                alternativas: [
                    {
                        texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho sobre Indústria 4.0, por isso não é um problema utilizar o texto inteiro gerado pela IA.",
                        afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas sobre robôs e agora se sente dependente da IA para tudo."
                    },
                    {
                        texto: "O chat com IA pode ser uma tecnologia muito avançada da Indústria 4.0, mas é preciso manter a atenção pois toda máquina e robô pode errar, por isso revisar o trabalho e contribuir com as perspectivas pessoais sobre automação é essencial.",
                        afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia sobre robôs não refletia o que pensava, e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
                    }
                ]
            },
        ];

        let atual = 0;
        let perguntaAtual;
        let historiaFinal = "";

        function mostraPergunta() {
            if (atual >= perguntas.length) {
                mostraResultado();
                return;
            }
            perguntaAtual = perguntas[atual];
            caixaPerguntas.textContent = perguntaAtual.enunciado;
            caixaAlternativas.textContent = "";
            mostraAlternativas();
        }

        function mostraAlternativas(){
            for(const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativas = document.createElement("button");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
                caixaAlternativas.appendChild(botaoAlternativas);
            }
        }

        function respostaSelecionada(opcaoSelecionada) {
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
        }

        function mostraResultado() {
            caixaPerguntas.textContent = "Em 2049 - Indústria 4.0 Avançada...";
            textoResultado.innerHTML = "🔧 RESULTADO DA SUA JORNADA NA INDÚSTRIA 4.0 🔧<br><br>" + historiaFinal + "<br><br>⚙️ O futuro da automação, robôs e IA está em suas mãos! ⚙️";
            caixaAlternativas.textContent = "";
        }

        mostraPergunta();

        const horas = document.getElementById('horas');
        const minutos = document.getElementById('minutos');
        const segundos = document.getElementById('segundos');

        const relogio = setInterval(function time() {
            let dateToday = new Date();
            let hr = dateToday.getHours();
            let min = dateToday.getMinutes();
            let s = dateToday.getSeconds();

            if (hr < 10) hr = '0' + hr;
            if (min < 10) min = '0' + min;
            if (s < 10) s = '0' + s;

            horas.textContent = hr;
            minutos.textContent = min;
            segundos.textContent = s;
        });
    </script>
</body>
</html>
