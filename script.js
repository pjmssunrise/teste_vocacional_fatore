document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("quiz-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const resultDiv = document.getElementById("result");
        const responses = {
            "a": 0,
            "b": 0,
            "c": 0,
            "d": 0
        };

        for (let i = 1; i <= 20; i++) {
            const question = document.querySelector(`input[name="q${i}"]:checked`);
            if (question) {
                responses[question.value]++;
            }
        }

        const maxScore = Math.max(responses.a, responses.b, responses.c, responses.d);
        const careerPaths = [];

        if (responses.a === maxScore) {
            careerPaths.push("Você se destaca em áreas criativas, como artes, design e comunicação.");
            careerPaths.push("Profissões: Artista, Designer Gráfico, Publicitário, Fotógrafo, Escritor, Diretor de Arte, Designer de Moda, Ilustrador, Animador, Web Designer, Redator Publicitário, Roteirista.");
        }
        if (responses.b === maxScore) {
            careerPaths.push("Você tem aptidão para cargos de liderança, negócios e gestão.");
            careerPaths.push("Profissões: Gerente de Projetos, Administrador, Consultor de Negócios, Executivo, Empreendedor, Gerente de Marketing, Diretor Financeiro, Analista de Negócios, Coordenador de Logística, Diretor de Vendas, Planejador Estratégico, Economista.");
        }
        if (responses.c === maxScore) {
            careerPaths.push("Você se destaca em áreas sociais, como serviço social e educação.");
            careerPaths.push("Profissões: Professor, Assistente Social, Psicólogo, Enfermeiro, Conselheiro, Terapeuta Ocupacional, Fonoaudiólogo, Pedagogo, Coordenador Pedagógico, Especialista em Educação Infantil, Gestor de Projetos Sociais, Orientador Educacional.");
        }
        if (responses.d === maxScore) {
            careerPaths.push("Você é apto para trabalhar em tecnologia, engenharia e áreas analíticas.");
            careerPaths.push("Profissões: Engenheiro Civil, Cientista de Dados, Programador, Analista de Sistemas, Engenheiro de Software, Engenheiro Elétrico, Especialista em Redes, Arquiteto de Soluções, Matemático, Físico, Químico, Engenheiro Mecânico, Arquiteto.");
        }

        resultDiv.innerHTML = `<h2>Resultado:</h2><p>${careerPaths.join('</p><p>')}</p>`;
    });
});
