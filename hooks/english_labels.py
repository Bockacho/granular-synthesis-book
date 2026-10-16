"""Подписи интерфейса, заданные в mkdocs.yml по-русски, на английских страницах заменяются английскими."""

LABELS = {
    "Тема как в системе": "System theme",
    "Светлая тема": "Light theme",
    "Тёмная тема": "Dark theme",
    "Исходники книги на GitHub": "Book source on GitHub",
    "Поддержать автора через PayPal": "Support the author via PayPal",
    "Ссылка на этот раздел": "Link to this section",
}


def on_post_page(output, page, config):
    if config.theme.get("language") != "en":
        return output
    for ru, en in LABELS.items():
        output = output.replace(ru, en)
    return output
