export function mountFormatSelect(select, name='Export format') {
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'format-trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-label', name);
  const label = document.createElement('span');
  trigger.append(label);
  trigger.insertAdjacentHTML('beforeend', '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m3 4.5 3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  const menu = document.createElement('div');
  menu.id = select.id+'-options';
  menu.className = 'format-options';
  menu.setAttribute('role', 'listbox');
  menu.setAttribute('aria-label', name);
  menu.hidden = true;
  trigger.setAttribute('aria-controls', menu.id);
  select.hidden = true;
  select.after(trigger);
  document.body.append(menu);

  function sync() {
    label.textContent = select.selectedOptions[0]?.textContent || '';
    trigger.disabled = select.disabled;
    if (trigger.disabled) close(false);
    menu.replaceChildren(...Array.from(select.options).filter(option => !option.hidden).map(option => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('role', 'option');
      button.setAttribute('aria-selected', String(option.selected));
      button.tabIndex = -1;
      button.disabled = option.disabled;
      button.dataset.value = option.value;
      button.textContent = option.textContent;
      return button;
    }));
  }

  function close(restoreFocus = true) {
    if (menu.hidden) return;
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) trigger.focus();
  }

  function open(last = false) {
    sync();
    if (trigger.disabled) return;
    menu.hidden = false;
    const rect = trigger.getBoundingClientRect();
    menu.style.width = `${rect.width}px`;
    menu.style.maxHeight = `${Math.max(80, innerHeight - 16)}px`;
    menu.style.left = `${Math.max(8, Math.min(rect.left, innerWidth - rect.width - 8))}px`;
    const height = menu.getBoundingClientRect().height;
    menu.style.top = `${Math.max(8, rect.bottom + height + 12 > innerHeight ? rect.top - height - 4 : rect.bottom + 4)}px`;
    trigger.setAttribute('aria-expanded', 'true');
    const choices = [...menu.querySelectorAll('button:not(:disabled)')];
    (menu.querySelector('[aria-selected=true]:not(:disabled)') || choices[last ? choices.length - 1 : 0])?.focus();
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      menu.animate([{opacity: 0, transform: 'translateY(-3px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 150, easing: 'cubic-bezier(.2,.8,.2,1)'});
    }
  }

  trigger.addEventListener('click', () => menu.hidden ? open() : close());
  trigger.addEventListener('keydown', event => {
    if (['ArrowDown', 'ArrowUp', ' ', 'Enter'].includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
      open(event.key === 'ArrowUp');
    }
  });
  menu.addEventListener('click', event => {
    const option = event.target.closest('[role=option]');
    if (!option || option.disabled) return;
    select.value = option.dataset.value;
    select.dispatchEvent(new Event('change', {bubbles: true}));
    close();
  });
  menu.addEventListener('keydown', event => {
    event.stopPropagation();
    const choices = [...menu.querySelectorAll('button:not(:disabled)')];
    const index = choices.indexOf(document.activeElement);
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? choices.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + choices.length) % choices.length;
      choices[next]?.focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      close();
    } else if (event.key === 'Tab') {
      close();
    } else if (event.key.length === 1 && event.key !== ' ') {
      choices.find(option => option.textContent.toLowerCase().startsWith(event.key.toLowerCase()))?.focus();
    }
  });
  document.addEventListener('pointerdown', event => {
    if (!menu.contains(event.target) && !trigger.contains(event.target)) close(false);
  });
  document.addEventListener('focusin', event => {
    if (!menu.contains(event.target) && event.target !== trigger) close(false);
  });
  window.addEventListener('resize', () => close());
  document.addEventListener('scroll', event => {
    if (!menu.contains(event.target)) close(false);
  }, true);
  select.addEventListener('change', sync);
  new MutationObserver(sync).observe(select, {attributes: true, childList: true, subtree: true, characterData: true});
  sync();
}
