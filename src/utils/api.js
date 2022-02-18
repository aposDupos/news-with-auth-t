export const isEmpty = arr => Array.isArray(arr) && arr.length === 0

export const getById = (id, news) => news.filter(item => (item.id === id))[0]

export const searchFilter = (arr, query) => {
    return arr.filter(item => query === '' || item.title.toLowerCase().includes(query.toLowerCase()))
}
