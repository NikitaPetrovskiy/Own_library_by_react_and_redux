export const FieldType = {
    ID: "ID",
    TEXT: "text",
    NUMBER: "number",
    SELECT: "select"
};

export const BookMeta = {
    id: { type: FieldType.ID, label: "ID" },
    title: { type: FieldType.TEXT, label: "Название" },
    author: { type: FieldType.TEXT, label: "Автор" },
    rating: { type: FieldType.NUMBER, label: "Рейтинг" },
    status: {
        type: FieldType.SELECT,
        label: "Статус",
        options: [
            ["", ""],
            ["to_read", "Хочу прочитать"],
            ["reading", "Читаю"],
            ["read", "Прочитал"]
        ]
    }
};
