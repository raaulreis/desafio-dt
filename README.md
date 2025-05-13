# Desafio Digital Twin – Entrega 1

Este projeto é a entrega do Challange Sprint 1 da matéria Advanced Programming & Mobile Dev da faculdade para construção de um Digital Twin de um sistema pneumático.  
Nesta etapa, foi desenvolvido um aplicativo mobile com React Native (Expo), que exibe sensores com dados simulados.

---

## 📱 Funcionalidades do App

- Tela de splash com logo e botão “Começar”
- Lista de sensores pneumáticos com dados mockados
- Tela de detalhe com histórico de valores do sensor
- Tela de configurações para informar a URL da API (mock)

---

## 🛠️ Tecnologias utilizadas

- React Native + Expo
- React Navigation
- Axios
- Victory Native (para gráficos - opcional)
- Dados mockados em JSON local (`/mock/sensors.json`)

---

## 📂 Estrutura de pastas

desafio-dt/
├── assets/ → Logo
├── components/ → SensorItem.js
├── mock/ → sensors.json
├── screens/ → Todas as telas (Splash, List, Detail, Settings)
├── App.js
└── README.md


---

## ▶️ Como rodar o projeto

### 1. Instale o Expo CLI (se ainda não tiver)
```bash
npm install -g expo-cli

## 2. Clone o repositório e entre na pasta

git clone https://github.com/seu-usuario/desafio-dt.git
cd desafio-dt

## 3. Instale as dependências

npm install

## 4. Rode o projeto

npm start

### 5. Teste no celular (com Expo Go) ou no emulador