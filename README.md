# Mara Krause — Decoração de Eventos

Landing page em HTML, CSS e JavaScript puro (sem frameworks e sem build) para o
site da Mara Krause Decoração de Eventos. Responsiva para desktop e mobile.

## Estrutura

```
index.html          → estrutura da página (Início, Sobre Mim, Contato)
css/style.css        → estilos (paleta salmão/rosé baseada na logo)
js/script.js         → menu mobile e carrossel de eventos
assets/img/logo.jpg  → logo enviada
assets/img/eventos/  → pasta para as fotos reais dos eventos
```

## Como visualizar

Basta abrir o `index.html` no navegador, ou rodar um servidor local:

```bash
python3 -m http.server 8000
```

e acessar `http://localhost:8000`.

## Personalização

### 1. Fotos do carrossel (seção "Sobre Mim")
Coloque as fotos reais dos eventos em `assets/img/eventos/` com os nomes:
`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`. Enquanto não houver uma foto,
o slide mostra um gradiente elegante no lugar — nada quebra.

Os textos de cada slide (Casamentos, Aniversários, Bodas, Chá de Bebê,
Formaturas) podem ser editados diretamente no `index.html`, dentro da seção
`<!-- ===== SOBRE MIM / EVENTOS ===== -->`.

### 2. WhatsApp
Já configurado com o número da Mara. Para trocar, edite o link no `index.html`:
```html
<a href="https://wa.me/5553981035560" ...>
```
Use o formato `55` + DDD + número, sem espaços ou traços.

### 3. Instagram
Já configurado com `@maravkrause`. Para trocar, edite o link e o texto no `index.html`:
```html
<a href="https://instagram.com/SEU_USUARIO" ...>
```

### 4. Endereço do escritório
Ainda pendente — no cartão "Endereço" (seção Contato), substitua "Em breve" pelo
endereço real assim que for informado.

## Publicação

Como é um site 100% estático, pode ser publicado gratuitamente em serviços como
Vercel, Netlify ou GitHub Pages, bastando apontar para a raiz do repositório.
