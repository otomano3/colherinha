const SUPABASE_URL = "https://bqjfidhduaahdlgspvff.supabase.co";
const SUPABASE_KEY = "sb_publishable_cPPH_yxV1YCexnK-V8j9rA_XtH_RNhJ";

const copy = {
  en: {
    navNational:"National",navInternational:"International",navArticles:"Articles",navAbout:"About",navSubmit:"Submit an article ↗",languageLabel:"Language",
    heroEyebrow:"A little context changes everything",heroTitle:"Big ideas, made easier to explore.",heroLead:"News, perspectives and student articles about politics, geopolitics, economics and the world around us.",exploreArticles:"Explore articles ↗",shareIdeas:"Share your ideas",artMessage:"The world is worth understanding.",artCircle:"Your voice belongs here!",
    tickerStrong:"A SPACE FOR CURIOUS MINDS",tickerText:"Read, question and write. Free to join, with no account required to submit.",
    nationalEyebrow:"Close to home",nationalTitle:"National news",nationalIntro:"Recent reporting about Brazil, from the original publishers. Open a headline to read the full story at its source.",
    internationalEyebrow:"Beyond borders",internationalTitle:"International news",internationalIntro:"Global politics, geopolitics and economics, linked to the journalists and outlets that reported each story.",newsSource:"Headlines from Google News RSS",
    articlesEyebrow:"Student voices",articlesTitle:"Articles",writeYours:"Write yours ↗",articlesIntro:"Ideas from students across languages and subjects. Select an article to read it in full.",articleFilter:"Show articles in",allLanguages:"All languages",
    aboutEyebrow:"Why we are here",aboutTitle:"A place to understand the world together.",aboutText:"Colherinha gives high school students a place to learn, question and publish ideas. You do not need to be an expert. Curiosity is a good place to begin.",aboutButton:"Submit your article ↗",aboutArt:"ideas.",
    submitEyebrow:"Your turn to write",submitTitle:"Have an idea? Share it.",submitIntro:"Write about a topic that matters to you, from your neighborhood to the wider world. Publishing is free.",step1:"Choose a subject and a clear question.",step2:"Use your own words and cite any facts or figures.",step3:"Submit your text. It appears after automatic checks.",
    authorLabel:"Your name or pen name",authorPlaceholder:"How you want to be credited",categoryLabel:"Category",chooseCategory:"Choose one",categoryPolitics:"Politics",categoryGeopolitics:"Geopolitics",categoryEconomy:"Economics",categorySociety:"Society",categoryOpinion:"Opinion",
    titleLabel:"Article title",titlePlaceholder:"A clear title for your idea",bodyLabel:"Your article",bodyPlaceholder:"Explain your idea, give examples and cite your sources.",sourceLabel:"Source, if you used one",sourcePlaceholder:"Source name or URL",
    consentText:"I wrote this text or have permission to publish it. I did not include someone else's personal information.",privacyText:"We do not ask for your email, school or age. Avoid personal information in your article. Links belong only in the source field.",publishButton:"Publish article ↗",closeButton:"Close",
    footerTagline:"Ideas to understand the world.",footerNote:"Free for students. News links open original publishers.",
    loading:"Loading recent stories...",newsError:"News is unavailable right now. Please try again later.",newsEmpty:"No recent stories found for this selection.",openStory:"Read at source ↗",
    articleLoading:"Loading student articles...",articleError:"Articles are unavailable right now.",articleEmpty:"No articles yet. Be the first to publish.",readArticle:"Read full article",by:"By",source:"Source",sending:"Publishing your article...",sent:"Your article is published. Thank you for sharing it!",formError:"Could not publish your article. Please try again.",rateError:"You can publish up to three articles per hour.",invalidError:"Please check the fields. Articles need 150 to 10,000 characters.",linkError:"Put links in the source field only."
  },
  es: {
    navNational:"Nacionales",navInternational:"Internacionales",navArticles:"Artículos",navAbout:"Acerca de",navSubmit:"Enviar un artículo ↗",languageLabel:"Idioma",
    heroEyebrow:"Un poco de contexto lo cambia todo",heroTitle:"Grandes ideas, más fáciles de explorar.",heroLead:"Noticias, perspectivas y artículos de estudiantes sobre política, geopolítica, economía y el mundo que nos rodea.",exploreArticles:"Explorar artículos ↗",shareIdeas:"Comparte tus ideas",artMessage:"Vale la pena comprender el mundo.",artCircle:"¡Tu voz tiene un lugar aquí!",
    tickerStrong:"UN ESPACIO PARA MENTES CURIOSAS",tickerText:"Lee, pregunta y escribe. Participar es gratis y no hace falta una cuenta para enviar artículos.",
    nationalEyebrow:"Cerca de casa",nationalTitle:"Noticias nacionales",nationalIntro:"Noticias recientes sobre Brasil de sus medios originales. Abre un titular para leer la historia completa en su fuente.",
    internationalEyebrow:"Más allá de las fronteras",internationalTitle:"Noticias internacionales",internationalIntro:"Política global, geopolítica y economía, con enlaces a los medios que publicaron cada historia.",newsSource:"Titulares de Google News RSS",
    articlesEyebrow:"Voces estudiantiles",articlesTitle:"Artículos",writeYours:"Escribe el tuyo ↗",articlesIntro:"Ideas de estudiantes en distintos idiomas y sobre varios temas. Selecciona un artículo para leerlo completo.",articleFilter:"Mostrar artículos en",allLanguages:"Todos los idiomas",
    aboutEyebrow:"Nuestra razón de ser",aboutTitle:"Un lugar para entender el mundo juntos.",aboutText:"Colherinha ofrece a estudiantes de secundaria un espacio para aprender, cuestionar y publicar ideas. No necesitas ser especialista. La curiosidad es un buen comienzo.",aboutButton:"Envía tu artículo ↗",aboutArt:"ideas.",
    submitEyebrow:"Te toca escribir",submitTitle:"¿Tienes una idea? Compártela.",submitIntro:"Escribe sobre un tema que te importe, desde tu barrio hasta el mundo. Publicar es gratis.",step1:"Elige un tema y una pregunta clara.",step2:"Usa tus propias palabras y cita los datos que utilices.",step3:"Envía tu texto. Aparecerá después de controles automáticos.",
    authorLabel:"Tu nombre o seudónimo",authorPlaceholder:"Cómo quieres firmar",categoryLabel:"Categoría",chooseCategory:"Elige una",categoryPolitics:"Política",categoryGeopolitics:"Geopolítica",categoryEconomy:"Economía",categorySociety:"Sociedad",categoryOpinion:"Opinión",
    titleLabel:"Título del artículo",titlePlaceholder:"Un título claro para tu idea",bodyLabel:"Tu artículo",bodyPlaceholder:"Explica tu idea, da ejemplos y cita tus fuentes.",sourceLabel:"Fuente, si utilizaste alguna",sourcePlaceholder:"Nombre de la fuente o enlace",
    consentText:"Escribí este texto o tengo permiso para publicarlo. No incluí datos personales de otras personas.",privacyText:"No pedimos correo, escuela ni edad. Evita incluir datos personales. Los enlaces van solo en el campo de fuentes.",publishButton:"Publicar artículo ↗",closeButton:"Cerrar",
    footerTagline:"Ideas para entender el mundo.",footerNote:"Gratis para estudiantes. Las noticias abren sus medios originales.",
    loading:"Cargando noticias recientes...",newsError:"Las noticias no están disponibles ahora. Inténtalo más tarde.",newsEmpty:"No encontramos noticias recientes para esta selección.",openStory:"Leer en la fuente ↗",
    articleLoading:"Cargando artículos...",articleError:"Los artículos no están disponibles ahora.",articleEmpty:"Aún no hay artículos. ¡Publica el primero!",readArticle:"Leer artículo completo",by:"Por",source:"Fuente",sending:"Publicando tu artículo...",sent:"Tu artículo está publicado. ¡Gracias por compartirlo!",formError:"No se pudo publicar. Inténtalo de nuevo.",rateError:"Puedes publicar hasta tres artículos por hora.",invalidError:"Revisa los campos. El artículo necesita entre 150 y 10.000 caracteres.",linkError:"Coloca los enlaces solo en el campo de fuentes."
  },
  pt: {
    navNational:"Nacionais",navInternational:"Internacionais",navArticles:"Artigos",navAbout:"Sobre",navSubmit:"Enviar artigo ↗",languageLabel:"Idioma",
    heroEyebrow:"Um pouco de contexto muda tudo",heroTitle:"Grandes ideias, mais fáceis de explorar.",heroLead:"Notícias, perspectivas e artigos de estudantes sobre política, geopolítica, economia e o mundo ao redor.",exploreArticles:"Explorar artigos ↗",shareIdeas:"Compartilhe suas ideias",artMessage:"Vale a pena entender o mundo.",artCircle:"Sua voz tem lugar aqui!",
    tickerStrong:"UM ESPAÇO PARA MENTES CURIOSAS",tickerText:"Leia, questione e escreva. Participação gratuita e sem cadastro para enviar artigos.",
    nationalEyebrow:"Perto de casa",nationalTitle:"Notícias nacionais",nationalIntro:"Notícias recentes sobre o Brasil, com links para as publicações originais. Abra a manchete para ler a matéria completa na fonte.",
    internationalEyebrow:"Além das fronteiras",internationalTitle:"Notícias internacionais",internationalIntro:"Política global, geopolítica e economia, com links para os veículos que publicaram cada matéria.",newsSource:"Manchetes do Google News RSS",
    articlesEyebrow:"Vozes dos estudantes",articlesTitle:"Artigos",writeYours:"Escreva o seu ↗",articlesIntro:"Ideias de estudantes em diferentes idiomas e sobre vários temas. Selecione um artigo para ler o texto completo.",articleFilter:"Mostrar artigos em",allLanguages:"Todos os idiomas",
    aboutEyebrow:"Por que estamos aqui",aboutTitle:"Um espaço para entender o mundo juntos.",aboutText:"A Colherinha oferece a estudantes do ensino médio um lugar para aprender, questionar e publicar ideias. Você não precisa ser especialista. A curiosidade é um bom começo.",aboutButton:"Envie seu artigo ↗",aboutArt:"ideias.",
    submitEyebrow:"Sua vez de escrever",submitTitle:"Tem uma ideia? Compartilhe.",submitIntro:"Escreva sobre um tema importante para você, do seu bairro ao mundo. Publicar é gratuito.",step1:"Escolha um assunto e uma pergunta clara.",step2:"Use suas palavras e cite os dados que utilizar.",step3:"Envie seu texto. Ele aparece após verificações automáticas.",
    authorLabel:"Seu nome ou pseudônimo",authorPlaceholder:"Como quer assinar",categoryLabel:"Categoria",chooseCategory:"Escolha uma",categoryPolitics:"Política",categoryGeopolitics:"Geopolítica",categoryEconomy:"Economia",categorySociety:"Sociedade",categoryOpinion:"Opinião",
    titleLabel:"Título do artigo",titlePlaceholder:"Um título claro para sua ideia",bodyLabel:"Seu artigo",bodyPlaceholder:"Explique sua ideia, dê exemplos e cite as fontes.",sourceLabel:"Fonte, se utilizou alguma",sourcePlaceholder:"Nome da fonte ou link",
    consentText:"Escrevi este texto ou tenho permissão para publicá-lo. Não incluí dados pessoais de outras pessoas.",privacyText:"Não pedimos e-mail, escola ou idade. Evite dados pessoais no artigo. Links devem ficar somente no campo de fontes.",publishButton:"Publicar artigo ↗",closeButton:"Fechar",
    footerTagline:"Ideias para entender o mundo.",footerNote:"Gratuito para estudantes. Notícias abrem os veículos originais.",
    loading:"Carregando notícias recentes...",newsError:"As notícias estão indisponíveis agora. Tente mais tarde.",newsEmpty:"Nenhuma notícia recente encontrada para esta seleção.",openStory:"Ler na fonte ↗",
    articleLoading:"Carregando artigos...",articleError:"Os artigos estão indisponíveis agora.",articleEmpty:"Ainda não há artigos. Publique o primeiro!",readArticle:"Ler artigo completo",by:"Por",source:"Fonte",sending:"Publicando seu artigo...",sent:"Seu artigo foi publicado. Obrigada por compartilhar!",formError:"Não foi possível publicar. Tente novamente.",rateError:"Você pode publicar até três artigos por hora.",invalidError:"Confira os campos. O artigo precisa ter entre 150 e 10.000 caracteres.",linkError:"Coloque os links somente no campo de fontes."
  }
};

const languageSelect = document.querySelector("#language");
const articleFilter = document.querySelector("#article-language");
const nav = document.querySelector("#nav");
const menuButton = document.querySelector("#menu-button");
const form = document.querySelector("#article-form");
const formStatus = document.querySelector("#form-status");
const dialog = document.querySelector("#article-dialog");
const detail = document.querySelector("#article-detail");
let lang = ["en", "es", "pt"].includes(localStorage.getItem("colherinha-language")) ? localStorage.getItem("colherinha-language") : "en";
let articles = [];

function t(key) { return copy[lang][key] || key; }
function applyLanguage() {
  document.documentElement.lang = lang;
  document.title = "Colherinha | " + copy[lang].footerTagline;
  languageSelect.value = lang;
  for (const element of document.querySelectorAll("[data-i18n]")) element.textContent = t(element.dataset.i18n);
  for (const element of document.querySelectorAll("[data-placeholder]")) element.placeholder = t(element.dataset.placeholder);
  menuButton.setAttribute("aria-label", lang === "pt" ? "Abrir menu" : lang === "es" ? "Abrir menú" : "Open menu");
  articleFilter.setAttribute("aria-label", t("articleFilter"));
}
function empty(message) {
  const element = document.createElement("div");
  element.className = "empty";
  element.textContent = message;
  return element;
}
function dateLabel(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : new Intl.DateTimeFormat({en:"en-US",es:"es-ES",pt:"pt-BR"}[lang], {day:"numeric",month:"short",year:"numeric"}).format(date);
}
function cardElement(tag = "article") {
  const card = document.createElement(tag);
  card.className = tag === "article" ? "news-card" : "article-card";
  return card;
}
async function loadNews(scope) {
  const grid = document.querySelector("#" + scope + "-grid");
  const requestedLang = lang;
  grid.replaceChildren(empty(t("loading")));
  try {
    const response = await fetch("/api/news?scope=" + scope + "&lang=" + requestedLang);
    if (!response.ok) throw new Error("feed");
    const { items } = await response.json();
    if (requestedLang !== lang) return;
    grid.replaceChildren();
    if (!items.length) return grid.append(empty(t("newsEmpty")));
    for (const item of items) {
      const card = cardElement();
      const kicker = document.createElement("span");
      kicker.className = "card-kicker";
      kicker.textContent = scope === "national" ? t("nationalTitle") : t("internationalTitle");
      const heading = document.createElement("h3");
      const link = document.createElement("a");
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = item.title;
      link.setAttribute("aria-label", item.title + ". " + t("openStory"));
      heading.append(link);
      const footer = document.createElement("footer");
      footer.textContent = item.source;
      const date = document.createElement("span");
      date.textContent = dateLabel(item.publishedAt);
      footer.append(date);
      card.append(kicker, heading, footer);
      grid.append(card);
    }
  } catch { if (requestedLang === lang) grid.replaceChildren(empty(t("newsError"))); }
}
async function loadArticles() {
  const grid = document.querySelector("#articles-grid");
  grid.replaceChildren(empty(t("articleLoading")));
  try {
    const response = await fetch(SUPABASE_URL + "/rest/v1/articles?select=id,title,author,category,body,source,language,created_at&order=created_at.desc&limit=60", {
      headers: { apikey: SUPABASE_KEY },
    });
    if (!response.ok) throw new Error("articles");
    articles = await response.json();
    renderArticles();
  } catch { grid.replaceChildren(empty(t("articleError"))); }
}
function renderArticles() {
  const grid = document.querySelector("#articles-grid");
  grid.replaceChildren();
  const filter = articleFilter.value;
  const visible = articles.filter((article) => filter === "all" || article.language === filter);
  if (!visible.length) return grid.append(empty(t("articleEmpty")));
  for (const article of visible) {
    const card = cardElement("div");
    const kicker = document.createElement("span");
    kicker.className = "card-kicker";
    kicker.textContent = t("category" + article.category[0].toUpperCase() + article.category.slice(1)) + " • " + article.language.toUpperCase();
    const heading = document.createElement("h3");
    heading.textContent = article.title;
    const excerpt = document.createElement("p");
    excerpt.textContent = article.body.slice(0, 240) + (article.body.length > 240 ? "…" : "");
    const footer = document.createElement("footer");
    footer.textContent = t("by") + " " + article.author + " • " + dateLabel(article.created_at);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button read-button";
    button.textContent = t("readArticle");
    button.addEventListener("click", () => showArticle(article));
    card.append(kicker, heading, excerpt, footer, button);
    grid.append(card);
  }
}
function showArticle(article) {
  detail.replaceChildren();
  const kicker = document.createElement("p");
  kicker.className = "eyebrow";
  kicker.textContent = t("category" + article.category[0].toUpperCase() + article.category.slice(1));
  const title = document.createElement("h2");
  title.className = "article-detail-title";
  title.textContent = article.title;
  const byline = document.createElement("p");
  byline.className = "source-note";
  byline.textContent = t("by") + " " + article.author + " • " + dateLabel(article.created_at);
  const body = document.createElement("div");
  body.className = "article-detail-body";
  body.textContent = article.body;
  detail.append(kicker, title, byline, body);
  if (article.source) {
    const source = document.createElement("p");
    source.className = "article-detail-source";
    source.textContent = t("source") + ": " + article.source;
    detail.append(source);
  }
  dialog.showModal();
}
document.querySelector("#close-article").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
languageSelect.addEventListener("change", () => {
  lang = languageSelect.value;
  localStorage.setItem("colherinha-language", lang);
  applyLanguage();
  loadNews("national");
  loadNews("international");
  renderArticles();
});
articleFilter.addEventListener("change", renderArticles);
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.textContent = t("sending");
  formStatus.className = "form-status";
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  const data = Object.fromEntries(new FormData(form));
  data.language = lang;
  data.consent = Boolean(data.consent);
  try {
    const response = await fetch(SUPABASE_URL + "/functions/v1/submit-article", {
      method: "POST", headers: { "content-type": "application/json", apikey: SUPABASE_KEY },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "unknown");
    formStatus.textContent = t("sent");
    formStatus.className = "form-status success";
    form.reset();
    await loadArticles();
  } catch (error) {
    formStatus.textContent = error.message === "Rate limit exceeded" ? t("rateError") :
      error.message === "Invalid article fields" ? t("invalidError") :
      error.message === "Links are allowed only in the source field" ? t("linkError") : t("formError");
    formStatus.className = "form-status error";
  } finally { button.disabled = false; }
});

applyLanguage();
loadNews("national");
loadNews("international");
loadArticles();
