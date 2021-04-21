export enum Locale {
    Ua = "uk-UA",
    Ru = "ru-RU"
}

export function filterPageLocale(page: any, locale: Locale) {
    return {
        ...page,
        content: filterNodesLocale(page.content, locale),
    }
}

function filterNodesLocale(nodes: any[], locale: Locale) {
    return nodes
    .filter(node => node.node_locale === locale )
    .reduce((nodes, node) => {
        const filteredNode = { ...node }

        if (filteredNode.content) {
            filteredNode.content = filterNodesLocale(filteredNode.content, locale)
        }

        nodes.push(node)

        return nodes
    }, [])
}

