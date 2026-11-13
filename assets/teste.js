/* Teste de arquétipo: 10 perguntas, pesos por arquétipo, vence o maior total (empate: ordem da lista). */
(() => {
  const DATA = {"arquetipos": [{"id": "classico", "name": "O Clássico", "description": "Você transmite confiança e atemporalidade. Valoriza o equilíbrio, a discrição e a elegância que nunca sai de moda."}, {"id": "elegante", "name": "O Elegante", "description": "Sua imagem comunica sofisticação e cuidado. Linhas limpas, proporções certas e um refinamento que fala baixo, mas se faz ouvir."}, {"id": "romantico", "name": "O Romântico", "description": "Sensível e acolhedor, você aposta em texturas suaves e em um visual que convida à conexão e à leveza."}, {"id": "criativo", "name": "O Criativo", "description": "Você ousa. Mistura referências, brinca com texturas e imprime autoria em cada detalhe do seu visual."}, {"id": "esportivo", "name": "O Esportivo / Natural", "description": "Prático e em movimento, você busca conforto com personalidade, um visual que acompanha seu ritmo sem perder o estilo."}, {"id": "sensual", "name": "O Sensual", "description": "Sua imagem atrai olhares. Valoriza o corpo, a textura e a presença com um toque magnético e seguro."}, {"id": "sofisticado", "name": "O Sofisticado", "description": "Detalhista e seletivo, você busca qualidade e exclusividade. Cada peça é escolhida com intenção."}, {"id": "rebelde", "name": "O Rebelde", "description": "Você quebra regras com intenção. Atitude, contraste e um toque de provocação definem sua imagem."}, {"id": "moderno", "name": "O Moderno", "description": "Atual e conectado, você traduz tendências no seu jeito. Linhas retas, tecnologia e contemporaneidade."}, {"id": "dramatico", "name": "O Dramático", "description": "Presença forte e impacto imediato. Linhas marcantes, contrastes e uma imagem que não passa despercebida."}, {"id": "aventureiro", "name": "O Aventureiro", "description": "Espírito livre e curioso, você mistura referências do mundo em um visual que conta histórias e caminhos."}, {"id": "sonhador", "name": "O Sonhador", "description": "Sua imagem é etérea e expressiva. Cores, fluidez e um toque poético traduzem seu olhar sobre o mundo."}], "perguntas": [{"id": 1, "question": "Quando se veste para um compromisso importante, você busca…", "options": [{"text": "Um visual impecável e atemporal", "weights": {"classico": 2, "elegante": 2, "sofisticado": 1}}, {"text": "Algo que mostre personalidade e ousadia", "weights": {"criativo": 2, "rebelde": 1, "dramatico": 1}}, {"text": "Conforto que acompanhe seu ritmo", "weights": {"esportivo": 2, "aventureiro": 1}}, {"text": "Um toque de mistério e atração", "weights": {"sensual": 2, "dramatico": 1, "romantico": 1}}]}, {"id": 2, "question": "Sua barba e cabelo ideais são…", "options": [{"text": "Bem definidos, clássicos e alinhados", "weights": {"classico": 2, "elegante": 1}}, {"text": "Com textura e movimento, nada rígido", "weights": {"criativo": 1, "romantico": 1, "sonhador": 2}}, {"text": "Marcantes, com contraste e atitude", "weights": {"rebelde": 2, "dramatico": 2}}, {"text": "Práticos, fáceis de reproduzir no dia a dia", "weights": {"esportivo": 2, "moderno": 1}}]}, {"id": 3, "question": "Que mensagem você quer que sua imagem comunique?", "options": [{"text": "Confiança e credibilidade", "weights": {"classico": 1, "elegante": 2, "sofisticado": 1}}, {"text": "Criatividade e autoria", "weights": {"criativo": 2, "moderno": 1, "aventureiro": 1}}, {"text": "Força e presença", "weights": {"dramatico": 2, "rebelde": 1, "sensual": 1}}, {"text": "Leveza e sensibilidade", "weights": {"romantico": 2, "sonhador": 2}}]}, {"id": 4, "question": "Em um guarda-roupa, o que mais te atrai?", "options": [{"text": "Peças de alfaiataria e cortes precisos", "weights": {"elegante": 2, "sofisticado": 1, "classico": 1}}, {"text": "Mix de estampas, texturas e referências", "weights": {"criativo": 2, "aventureiro": 1}}, {"text": "Couro, preto e detalhes com atitude", "weights": {"rebelde": 2, "dramatico": 1}}, {"text": "Tecidos fluidos e tons suaves", "weights": {"romantico": 2, "sonhador": 1, "sensual": 1}}]}, {"id": 5, "question": "Como você lida com tendências?", "options": [{"text": "Prefiro o que é atemporal", "weights": {"classico": 2, "elegante": 1, "sofisticado": 1}}, {"text": "Adapto ao meu jeito, com autoria", "weights": {"criativo": 1, "moderno": 2, "aventureiro": 1}}, {"text": "Sigo o que combina com minha atitude", "weights": {"rebelde": 1, "dramatico": 1, "sensual": 1}}, {"text": "Aposto no conforto acima de tudo", "weights": {"esportivo": 2, "sonhador": 1}}]}, {"id": 6, "question": "Seu ambiente ideal de trabalho é…", "options": [{"text": "Sofisticado e organizado", "weights": {"sofisticado": 2, "elegante": 1, "classico": 1}}, {"text": "Um ateliê cheio de ideias", "weights": {"criativo": 2, "sonhador": 1}}, {"text": "Em movimento, ao ar livre", "weights": {"esportivo": 1, "aventureiro": 2}}, {"text": "Um palco onde me faço notar", "weights": {"dramatico": 2, "sensual": 1, "rebelde": 1}}]}, {"id": 7, "question": "Qual cor mais combina com você?", "options": [{"text": "Tons terrosos e neutros", "weights": {"classico": 1, "sofisticado": 1, "aventureiro": 1}}, {"text": "Preto, grafite e contrastes", "weights": {"dramatico": 2, "rebelde": 1, "moderno": 1}}, {"text": "Verde-oliva, conhaque e marfim", "weights": {"elegante": 1, "sofisticado": 1, "classico": 1}}, {"text": "Tons fluidos e suaves", "weights": {"romantico": 2, "sonhador": 1, "sensual": 1}}]}, {"id": 8, "question": "Como você gosta de ser percebido?", "options": [{"text": "Como alguém confiável", "weights": {"classico": 2, "elegante": 1}}, {"text": "Como alguém original", "weights": {"criativo": 2, "aventureiro": 1}}, {"text": "Como alguém magnético", "weights": {"sensual": 2, "dramatico": 1}}, {"text": "Como alguém autêntico e leve", "weights": {"sonhador": 2, "romantico": 1, "esportivo": 1}}]}, {"id": 9, "question": "Seu acessório preferido é…", "options": [{"text": "Discreto e de qualidade", "weights": {"sofisticado": 2, "elegante": 1, "classico": 1}}, {"text": "Que chame atenção com intenção", "weights": {"dramatico": 1, "rebelde": 2, "moderno": 1}}, {"text": "Confortável e funcional", "weights": {"esportivo": 2, "moderno": 1}}, {"text": "Expressivo e cheio de história", "weights": {"aventureiro": 2, "criativo": 1, "sonhador": 1}}]}, {"id": 10, "question": "Qual palavra melhor define você?", "options": [{"text": "Equilíbrio", "weights": {"classico": 2, "elegante": 1}}, {"text": "Ousadia", "weights": {"criativo": 1, "rebelde": 1, "dramatico": 1}}, {"text": "Sensibilidade", "weights": {"romantico": 2, "sonhador": 1, "sensual": 1}}, {"text": "Movimento", "weights": {"esportivo": 2, "aventureiro": 1, "moderno": 1}}]}]};
  const BOOKSY = "https://booksy.com/pt-br/instant-experiences/widget/391725";
  const box = document.getElementById("quiz");
  if (!box) return;
  const N = DATA.perguntas.length;
  let i = 0, resp = [];
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const L = "ABCD";

  function vencedor() {
    const t = Object.fromEntries(DATA.arquetipos.map(a => [a.id, 0]));
    resp.forEach((o, k) => Object.entries(DATA.perguntas[k].options[o].weights).forEach(([id, w]) => { t[id] = (t[id] || 0) + w; }));
    let best = DATA.arquetipos[0], max = -1;
    DATA.arquetipos.forEach(a => { if (t[a.id] > max) { max = t[a.id]; best = a; } });
    return best;
  }

  function pergunta() {
    const q = DATA.perguntas[i];
    box.innerHTML = `
      <div class="quiz__topo"><p class="wow-label">Pergunta ${i + 1} de ${N}</p>
        <div class="quiz__barra" aria-hidden="true"><i style="--q:${i / N}"></i></div></div>
      <h3 class="quiz__pergunta" tabindex="-1">${esc(q.question)}</h3>
      <div class="quiz__opcoes">${q.options.map((o, k) =>
        `<button type="button" data-k="${k}" aria-pressed="${resp[i] === k}"><span aria-hidden="true">${L[k]}</span>${esc(o.text)}</button>`).join("")}</div>
      <button type="button" class="quiz__voltar wow-label" ${i ? "" : "hidden"}>Voltar</button>`;
    requestAnimationFrame(() => box.querySelector(".quiz__barra i").style.setProperty("--q", (i + 1) / N));
    box.querySelector(".quiz__pergunta").focus({ preventScroll: true });
  }

  function resultado() {
    const a = vencedor();
    box.innerHTML = `
      <div class="quiz__resultado">
        <p class="wow-label rotulo">Seu arquétipo predominante</p>
        <h3 class="wow-display quiz__nome" tabindex="-1">${esc(a.name)}</h3>
        <p class="wow-body">${esc(a.description)}</p>
        <p class="wow-body">Leve esse resultado para a consultoria: é o ponto de partida do seu projeto de imagem.</p>
        <div class="quiz__acoes">
          <a class="botao botao--tinta" href="${BOOKSY}" target="_blank" rel="noopener">Agendar consultoria</a>
          <button type="button" class="botao botao--fio" data-quiz-start>Refazer o teste</button>
        </div>
      </div>`;
    box.querySelector(".quiz__nome").focus({ preventScroll: true });
  }

  box.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.hasAttribute("data-quiz-start")) { i = 0; resp = []; pergunta(); return; }
    if (b.classList.contains("quiz__voltar")) { i = Math.max(0, i - 1); pergunta(); return; }
    if (b.dataset.k !== undefined) {
      resp[i] = +b.dataset.k;
      b.setAttribute("aria-pressed", "true");
      setTimeout(() => { if (i < N - 1) { i++; pergunta(); } else resultado(); }, 220);
    }
  });
  window.__quiz = { DATA, vencedor: r => { resp = r; return vencedor().id; } };
})();
