const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const year = document.querySelector('[data-year]');
const form = document.querySelector('[data-contact-form]');
const status = document.querySelector('[data-form-status]');
const solutionSelect = form?.querySelector('select[name="solution"]');
const tabLinks = [...document.querySelectorAll('[data-tab]')];
const panels = [...document.querySelectorAll('[data-panel]')];

const tabMap = {
  inicio: 'home',
  comandos: 'home',
  escolhas: 'home',
  problema: 'problema',
  solucoes: 'solucoes',
  servicos: 'solucoes',
  projetos: 'projetos',
  metodo: 'metodo',
  sobre: 'sobre',
  contato: 'contato',
};

if (year) year.textContent = new Date().getFullYear();

function closeMenu() {
  nav?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}

function showTab(tab = 'home', { updateHash = true, smooth = true } = {}) {
  const activeTab = tabMap[tab] || tab;
  const panelName = Object.values(tabMap).includes(activeTab) ? activeTab : 'home';

  document.body.classList.add('tabs-ready');
  panels.forEach((panel) => {
    const active = panel.dataset.panel === panelName;
    panel.classList.toggle('is-active', active);
    panel.setAttribute('aria-hidden', String(!active));
    if (active) panel.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'));
  });

  tabLinks.forEach((link) => {
    if (link.dataset.tab === panelName) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  closeMenu();
  if (updateHash) history.replaceState(null, '', `#${panelName === 'home' ? 'inicio' : panelName}`);
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
}

function tabForTarget(target) {
  return tabMap[target?.replace('#', '')] || 'home';
}

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

tabLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showTab(link.dataset.tab);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  if (link.matches('[data-tab]')) return;
  link.addEventListener('click', (event) => {
    const target = link.getAttribute('href')?.slice(1);
    if (!target || !tabMap[target]) return;
    event.preventDefault();
    showTab(tabForTarget(target));
  });
});

document.querySelectorAll('[data-solution]').forEach((choice) => {
  choice.addEventListener('click', () => {
    const selected = choice.dataset.solution;
    if (solutionSelect && selected) solutionSelect.value = selected;
    showTab('contato');
    window.setTimeout(() => document.querySelector('[name="name"]')?.focus(), 450);
  });
});

document.querySelectorAll('[data-target]').forEach((choice) => {
  choice.addEventListener('click', () => {
    showTab(tabForTarget(choice.dataset.target));
  });
});

const diagnosticResult = document.querySelector('[data-diagnostic-result]');
const diagnosticAction = document.querySelector('[data-diagnostic-action]');
const diagnosticCopy = {
  communication: {
    solution: 'Website',
    text: 'O caminho mais indicado é um Website comercial claro, preparado para explicar o seu valor e gerar contactos.',
  },
  organization: {
    solution: 'Sistema',
    text: 'O caminho mais indicado é um Sistema de Gestão para centralizar dados, processos e decisões.',
  },
  repetition: {
    solution: 'Automação',
    text: 'O caminho mais indicado é uma Automação para reduzir tarefas repetitivas, erros e perda de tempo.',
  },
};
let selectedDiagnostic = 'Website';

document.querySelectorAll('[data-diagnostic-choice]').forEach((choice) => {
  choice.addEventListener('click', () => {
    const item = diagnosticCopy[choice.dataset.diagnosticChoice];
    if (!item) return;
    selectedDiagnostic = item.solution;
    document.querySelectorAll('[data-diagnostic-choice]').forEach((option) => {
      const active = option === choice;
      option.classList.toggle('is-selected', active);
      option.setAttribute('aria-pressed', String(active));
    });
    if (diagnosticResult) diagnosticResult.textContent = item.text;
  });
});

diagnosticAction?.addEventListener('click', () => {
  if (solutionSelect) solutionSelect.value = selectedDiagnostic;
  showTab('contato');
  window.setTimeout(() => document.querySelector('[name="name"]')?.focus(), 450);
});

document.querySelectorAll('.summary-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const detail = toggle.parentElement?.querySelector('.pillar-more');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    detail?.classList.toggle('is-open', !expanded);
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
} else {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'));
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name')?.toString().trim();
  const email = data.get('email')?.toString().trim();
  const solution = data.get('solution')?.toString().trim();
  const message = data.get('message')?.toString().trim();
  if (!name || !status) return;
  const path = solution ? ` para ${solution}` : '';
  const whatsappText = `Olá, sou ${name}.\n\nQuero conversar sobre: ${solution || 'um projeto digital'}.\n\n${message || 'Gostaria de receber orientação.'}\n\nE-mail: ${email || 'não informado'}`;
  const whatsappUrl = `https://wa.me/244926137164?text=${encodeURIComponent(whatsappText)}`;
  status.textContent = `Briefing preparado${path}. O WhatsApp será aberto para concluir a conversa.`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

const initialTab = tabForTarget(window.location.hash || '#inicio');
showTab(initialTab, { updateHash: false, smooth: false });
