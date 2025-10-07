<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=32&duration=4000&pause=2000&color=00C853&center=true&vCenter=true&width=600&height=80&lines=BarryAI;Seu+tempo+é+valioso?;BarryAi+entende;+Entre+em+contato." alt="BarryAI" />
</div>

> **Uma IA acessível para todos — mesmo para quem tem dificuldade com tecnologia.**

BarryAI é um **chatbot inteligente** desenvolvido com foco em **usabilidade e inclusão digital**. Projetado especialmente para usuários que enfrentam barreiras no uso de tecnologias, BarryAI oferece uma interface simples, intuitiva e poderosa, com diferentes níveis de acesso conforme o plano do usuário.

---

## 🎯 Objetivo

Tornar a interação com inteligência artificial **acessível, segura e produtiva** para pessoas de todas as idades e níveis de familiaridade com tecnologia.

---

## 👥 Tipos de Usuários

| Tipo de Usuário      | Acesso                                                                 |
|----------------------|------------------------------------------------------------------------|
| **Admin**            | - Gerencia todos os usuários (básico e premium)<br>- Acesso total ao sistema<br>- Pode visualizar métricas, logs e gerenciar planos |
| **Usuário Básico**   | - Acesso limitado às funcionalidades da IA<br>- Interface simplificada<br>- Sem acesso a ferramentas avançadas |
| **Usuário Premium**  | - Acesso completo às funcionalidades da IA<br>- Integração com múltiplos modelos (ChatGPT, Qwen, Gemini, Copilot)<br>- Recursos avançados de personalização |

---

## 📋 Requisitos do Sistema — BarryAI

### ✅ Requisitos Funcionais (RF)

| ID  | Descrição |
|-----|----------|
| **RF-01** | O sistema deve permitir o cadastro de novos usuários com nome, e-mail e senha. |
| **RF-02** | O sistema deve permitir o login seguro com autenticação por e-mail e senha. |
| **RF-03** | O sistema deve diferenciar três tipos de usuários: **Admin**, **Usuário Básico** e **Usuário Premium**. |
| **RF-04** | O **Admin** deve poder visualizar, editar e excluir contas de todos os usuários (básicos e premium). |
| **RF-05** | O **Admin** deve ter acesso total a todas as funcionalidades da IA (modelos, histórico, configurações). |
| **RF-06** | O **Usuário Básico** deve poder interagir com o BarryAI, mas com funcionalidades limitadas (ex: respostas simples, sem personalização). |
| **RF-07** | O **Usuário Premium** deve ter acesso completo às funcionalidades da IA, incluindo troca de modelo (ChatGPT, Qwen, Gemini, Copilot), histórico detalhado e respostas avançadas. |
| **RF-08** | O sistema deve permitir que o usuário premium selecione qual modelo de IA deseja usar em cada interação. |
| **RF-09** | O sistema deve registrar o histórico de conversas do usuário (com data e modelo usado) e permitir sua visualização (apenas para o próprio usuário e admin). |
| **RF-10** | O sistema deve oferecer uma interface visual simples, com linguagem clara e ícones intuitivos, voltada para usuários com pouca familiaridade com tecnologia. |
| **RF-11** | O sistema deve validar e-mails e senhas fortes durante o cadastro. |
| **RF-12** | O sistema deve permitir a atualização de plano (básico → premium) diretamente pela interface. |

---

### 🛡️ Requisitos Não Funcionais (RNF)

| ID   | Categoria | Descrição |
|------|----------|----------|
| **RNF-01** | **Usabilidade** | A interface deve ser intuitiva o suficiente para que um usuário leigo consiga interagir com o BarryAI sem ajuda técnica. |
| **RNF-02** | **Acessibilidade** | O sistema deve seguir diretrizes WCAG 2.1 (ex: contraste adequado, navegação por teclado, leitores de tela compatíveis). |
| **RNF-03** | **Desempenho** | O tempo de resposta da IA não deve exceder **5 segundos** em 95% das requisições (em condições normais de rede). |
| **RNF-04** | **Segurança** | Todas as senhas devem ser armazenadas com hash (bcrypt). A autenticação deve usar JWT com tempo de expiração. |
| **RNF-05** | **Privacidade** | O histórico de conversas deve ser privado e criptografado em trânsito (HTTPS) e em repouso (MongoDB com criptografia opcional). |
| **RNF-06** | **Confiabilidade** | O sistema deve ter disponibilidade mínima de **99%** durante o horário comercial (8h–22h). |
| **RNF-07** | **Escalabilidade** | A arquitetura deve suportar até **10.000 usuários ativos simultâneos** com mínima degradação de desempenho. |
| **RNF-08** | **Compatibilidade** | O frontend deve funcionar corretamente nos navegadores: Chrome, Firefox, Edge e Safari (últimas 2 versões). |
| **RNF-09** | **Manutenibilidade** | O código deve seguir boas práticas (naming, comentários, modularização) e incluir testes unitários para rotas críticas. |
| **RNF-10** | **Internacionalização** | A interface deve suportar pelo menos **português (BR)** e **inglês**, com possibilidade de expansão futura. |

---

## 💡 Observações

- Os requisitos foram definidos com foco em **inclusão digital** e **experiência do usuário leigo**.
- A diferenciação clara entre planos (básico vs. premium) garante **monetização** e **valor percebido**.
- A integração com múltiplos modelos de IA oferece **flexibilidade** e **resiliência** (se uma API falhar, outra pode ser usada).

---

## 🛠️ Tecnologias Utilizadas

### Backend (Python + Node.js)
- **Python**: Lógica principal da IA (integração com modelos de linguagem)
- **Node.js + Express**: Servidor da API
- **MongoDB + Mongoose**: Banco de dados não relacional
- **JWT + Bcrypt**: Autenticação e criptografia de senhas
- **Express Validator**: Validação de requisições
- **Nodemon**: Reinicialização automática durante o desenvolvimento

### Frontend (Angular)
- **Angular CLI**: Estrutura do projeto
- **RxJS**: Gerenciamento de estados e streams assíncronos
- **AuthGuard**: Proteção de rotas por nível de acesso
- **JSON**: Formato de troca de dados

### Ferramentas & Outros
- **Figma**: Prototipagem de interface
- **Microsoft Word**: Documentação detalhada
- **README.md**: Documentação técnica e de uso
- **Modelos de IA**: ChatGPT, Qwen, Gemini, GitHub Copilot (via APIs)

---

## 📊 Diagramas (Mermaid)

### 1. Diagrama de Classes

```mermaid
classDiagram
    class User {
        +String id
        +String name
        +String email
        +String password
        +String planType
        +login()
        +logout()
    }

    class Admin {
        +viewAllUsers()
        +managePlans()
        +accessProFeatures()
    }

    class BasicUser {
        +accessBasicAI()
    }

    class PremiumUser {
        +accessFullAI()
        +useAdvancedTools()
        +switchAIModel()
    }

    class BarryAI {
        +String currentModel
        +generateResponse(prompt: String): String
        +switchModel(model: String)
    }

    User <|-- Admin
    User <|-- BasicUser
    User <|-- PremiumUser
    Admin --> BarryAI : usa
    BasicUser --> BarryAI : usa (limitado)
    PremiumUser --> BarryAI : usa (completo)
```

---

### 2. Diagrama de Casos de Uso

```mermaid 
flowchart TD

    %% Atores
    A[Admin] -->|Gerenciar Usuários| B(BarryAI)
    A -->|Acessar Todas Ferramentas da IA| B

    C[Usuário Básico] -->|Enviar Mensagem Básica| B
    C -->|Receber Resposta Simples| B

    D[Usuário Premium] -->|Acessar Ferramentas Avançadas| B
    D -->|Mudar Modelo de IA| B
    D -->|Personalizar Respostas| B

    %% Relacionamento de extensão (opcional, representado como nota)
    style A fill:#d4f7e5,stroke:#2e8b57
    style C fill:#e6f2ff,stroke:#1e70bf
    style D fill:#fff2e6,stroke:#d98c3a
    style B fill:#f9f,stroke:#333,stroke-width:2px,color:#000

    classDef actor fill:#e0e0e0,stroke:#555;
    class A,C,D actor;
```


---

### 3. Diagrama de Fluxo de Interação

```mermaid
flowchart TD
    A[Usuário Acessa o Sistema] --> B{Autenticado?}
    B -- Não --> C[Redireciona para Login]
    B -- Sim --> D{Tipo de Usuário?}
    D -- Admin --> E[Acessa Painel de Administração]
    D -- Básico --> F[Interface Simples com IA Limitada]
    D -- Premium --> G[Interface Completa com Múltiplos Modelos de IA]
    E --> H[Gerencia Usuários e Planos]
    F --> I[Envia Pergunta → Recebe Resposta Básica]
    G --> J[Escolhe Modelo → Personaliza → Recebe Resposta Avançada]
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (v18+)
- Python 3.9+
- MongoDB (local ou Atlas)
- Contas nas APIs de IA (ChatGPT, Qwen, Gemini, etc.)

### Backend
```bash
cd backend
npm install
npm run dev  
```

### Frontend
```bash
cd frontend
npm install
ng serve
```

---

## 📄 Documentação

- **Protótipo de Interface**: [Link para Figma] *(adicione seu link)*  
- **Documentação Detalhada**: `docs/` (ou em Word, conforme sua estrutura)  
- **Variáveis de Ambiente**: Veja `.env.example`

---

## 📜 Licença

Este projeto é privado e de propriedade da equipe BarryAI. Todos os direitos reservados.  
*(Ou substitua por MIT, Apache, etc., se for open source)*