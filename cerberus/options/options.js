const inputColuna = document.getElementById('inputColuna');
const txtColuna = document.getElementById('txtColuna');
txtColuna.textContent = `${inputColuna.value} repetições de colunas`;

const inputDuzia = document.getElementById('inputDuzia');
const txtDuzia = document.getElementById('txtDuzia');
txtDuzia.textContent = `${inputDuzia.value} repetições de dúzias`;

const inputGale = document.getElementById('inputGale');
const txtGale = document.getElementById('txtGale');
txtGale.textContent = `${inputGale.value} gale`;

const btnSalvar = document.getElementById('btnSalvar');
btnSalvar.addEventListener("click", salvarConfig);

inputColuna.addEventListener("input", () => {
  txtColuna.textContent = `${inputColuna.value} repetições de colunas`;
});

inputDuzia.addEventListener("input", () => {
  txtDuzia.textContent = `${inputDuzia.value} repetições de dúzias`;
});

inputGale.addEventListener("input", () => {
  txtGale.textContent = `${inputGale.value} gale`;
});

function salvarConfig() {
  const configuracao = {
    coluna: inputColuna.value,
    duzia: inputDuzia.value,
    gale: inputGale.value
  };

  chrome.storage.local.set({ configuracao }, () => {
    alert("Configuração gravada com sucesso");
  });
}

function carregarConfiguracao() {
  chrome.storage.local.get(["configuracao"], (res) => {
    if (!res.configuracao) {
      const configuracao = {
        coluna: 5,
        duzia: 5,
        gale: 1
      };

      chrome.storage.local.set({ configuracao }, () => {
        setTextAndValues(configuracao);
      });
    } else {
      setTextAndValues(res.configuracao);
    }
  });
}

function setTextAndValues(configuracao) {
  txtColuna.textContent = `${configuracao.coluna} repetições de colunas`;
  txtDuzia.textContent = `${configuracao.duzia} repetições de dúzias`;
  txtGale.textContent = `${configuracao.gale} gale`;
  inputColuna.value = configuracao.coluna;
  inputDuzia.value = configuracao.duzia;
  inputGale.value = configuracao.gale;
}

carregarConfiguracao();