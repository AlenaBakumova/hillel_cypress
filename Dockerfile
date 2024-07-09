# Используем последнюю версию cypress/included
FROM cypress/included:latest

# Устанавливаем Chrome
RUN apt-get update && \
    apt-get install -y chromium

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код приложения
COPY . .

# Проверяем установку Cypress и Chrome
RUN npx cypress verify

# Команда для запуска тестов в браузере Chrome
CMD ["npx", "cypress", "run", "--browser", "chrome"]