"""Подписи интерфейса, заданные в mkdocs.yml по-русски, на страницах переводов заменяются переведёнными."""

LABELS = {
    "en": {
        "Тема как в системе": "System theme",
        "Светлая тема": "Light theme",
        "Тёмная тема": "Dark theme",
        "Исходники книги на GitHub": "Book source on GitHub",
        "Поддержать автора через PayPal": "Support the author via PayPal",
        "Ссылка на этот раздел": "Link to this section",
    },
    "es": {
        "Тема как в системе": "Tema del sistema",
        "Светлая тема": "Tema claro",
        "Тёмная тема": "Tema oscuro",
        "Исходники книги на GitHub": "Código fuente del libro en GitHub",
        "Поддержать автора через PayPal": "Apoya al autor por PayPal",
        "Ссылка на этот раздел": "Enlace a esta sección",
    },
    "de": {
        "Тема как в системе": "Systemdesign",
        "Светлая тема": "Helles Design",
        "Тёмная тема": "Dunkles Design",
        "Исходники книги на GitHub": "Quelltext des Buchs auf GitHub",
        "Поддержать автора через PayPal": "Den Autor über PayPal unterstützen",
        "Ссылка на этот раздел": "Link zu diesem Abschnitt",
    },
}


def on_post_page(output, page, config):
    for ru, translated in LABELS.get(config.theme.get("language"), {}).items():
        output = output.replace(ru, translated)
    return output
