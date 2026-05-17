import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // ПРИСУТСТВИЕ БОТА (что пользователи видят под ником бота)
  // =========================
  // `status` опции:
  // - "online"    = зелёная точка
  // - "idle"      = жёлтая луна
  // - "dnd"       = красный "не беспокоить"
  // - "invisible" = невидимка
  presence: {
    // Текущий статус онлайн в Discord.
    status: "online",

    // Строки активности под ником бота.
    // Числовое значение `type` от Discord:
    // 0 = Играет в
    // 1 = Стримит
    // 2 = Слушает
    // 3 = Смотрит
    // 4 = Пользовательский
    // 5 = Соревнуется в
    activities: [
      {
        // Текст, который увидят пользователи (пример: "Играет в /help | Titan Bot").
        name: "Сделано с ❤️",
        // Тип активности (0 = Играет в).
        type: 0, 
      },
    ],
  },

  // =========================
  // ПОВЕДЕНИЕ КОМАНД
  // =========================
  commands: {
    // ID пользователей-владельцев бота (через запятую в переменной окружения OWNER_IDS).
    // Владельцы могут использовать команды уровня администратора.
    owners: process.env.OWNER_IDS?.split(",") || [],

    // Время ожидания между использованиями команд по умолчанию (в секундах).
    defaultCooldown: 3, 

    // Если true, старые команды удаляются перед повторной регистрацией.
    deleteCommands: false,

    // Опциональный ID сервера для быстрого тестирования слеш-команд.
    testGuildId: process.env.TEST_GUILD_ID,
  },

  // =========================
  // СИСТЕМА ЗАЯВОК
  // =========================
  applications: {
    // Стандартные вопросы при заполнении заявки.
    defaultQuestions: [
      { question: "Как вас зовут?", required: true },
      { question: "Сколько вам лет?", required: true },
      { question: "Почему вы хотите присоединиться?", required: true },
    ],

    // Цвета встраиваемых сообщений по статусу заявки.
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    // Как долго пользователи должны ждать перед следующей заявкой (часы).
    applicationCooldown: 24, 

    // Автоудаление отклонённых заявок через указанное количество дней.
    deleteDeniedAfter: 7, 

    // Автоудаление одобренных заявок через указанное количество дней.
    deleteApprovedAfter: 30, 

    // ID ролей, которым разрешено управлять заявками.
    managerRoles: [], // Будут заполнены из окружения или базы данных
  },

  // =========================
  // ЦВЕТА ВСТРАИВАЕМЫХ СООБЩЕНИЙ И БРЕНДИНГ
  // =========================
  // ВАЖНО: Это ЕДИНСТВЕННЫЙ ИСТОЧНИК ПРАВДЫ для всех цветов бота
  embeds: {
    colors: {
      // Основные брендовые цвета.
      primary: "#008000", 
      secondary: "#2F3136", 

      // Стандартные статусные цвета для успеха/ошибки/предупреждения/информации.
      success: "#57F287", 
      error: "#ED4245", 
      warning: "#FEE75C", 
      info: "#3498DB", 

      // Нейтральные служебные цвета.
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      // Короткие цвета в стиле Discord.
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      // Цвета для конкретных функций.
      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },
      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },
      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",

      // Цвета по приоритету тикетов.
      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },
    footer: {
      // Текст нижнего колонтитула по умолчанию.
      text: "Titan Bot",
      // URL иконки нижнего колонтитула (null = нет иконки).
      icon: null,
    },
    // URL миниатюры по умолчанию (null = нет миниатюры).
    thumbnail: null,
    author: {
      // Опциональный блок автора по умолчанию.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // НАСТРОЙКИ ЭКОНОМИКИ
  // =========================
  economy: {
    currency: {
      // Отображаемое название валюты.
      name: "монет",
      // Название во множественном числе.
      namePlural: "монет",
      // Символ валюты в балансах.
      symbol: "$",
    },

    // Начальный баланс для новых пользователей.
    startingBalance: 0,

    // Максимальная вместимость банка до улучшений (если улучшения используются).
    baseBankCapacity: 100000,

    // Ежедневная награда.
    dailyAmount: 100,

    // Диапазон случайных выплат команды work.
    workMin: 10,
    workMax: 100,

    // Диапазон случайных выплат команды beg.
    begMin: 5,
    begMax: 50,

    // Шанс успеха при ограблении (0.4 = 40%).
    robSuccessRate: 0.4,

    // Время тюрьмы после провального ограбления (миллисекунды).
    // 3600000 = 1 час.
    robFailJailTime: 3600000, 
  },

  // =========================
  // НАСТРОЙКИ МАГАЗИНА
  // =========================
  shop: {
    
  },

  // =========================
  // СИСТЕМА ТИКЕТОВ
  // =========================
  tickets: {
    // ID категории, где создаются новые тикеты (null = без принудительной категории).
    defaultCategory: null,

    // ID ролей, которым разрешено управлять/поддерживать тикеты.
    supportRoles: [],

    // Опции приоритета для назначения пользователями/персоналом.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "Нет",
      },
      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "Низкий",
      },
      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "Средний",
      },
      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "Высокий",
      },
      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "Срочный",
      },
    },

    // Приоритет по умолчанию для новых тикетов.
    defaultPriority: "none",

    // ID категории, куда архивируются закрытые тикеты.
    archiveCategory: null,

    // ID канала, куда отправляются логи тикетов.
    logChannel: null,
  },

  // =========================
  // НАСТРОЙКИ РОЗЫГРЫШЕЙ
  // =========================
  giveaways: {
    // Длительность розыгрыша по умолчанию в миллисекундах.
    // 86400000 = 24 часа.
    defaultDuration: 86400000, 

    // Диапазон допустимого количества победителей.
    minimumWinners: 1,
    maximumWinners: 10,

    // Диапазон допустимой длительности розыгрыша в миллисекундах.
    // 300000 = 5 минут.
    minimumDuration: 300000, 
    // 2592000000 = 30 дней.
    maximumDuration: 2592000000, 

    // ID ролей, которым разрешено проводить розыгрыши.
    allowedRoles: [],

    // ID ролей, которые обходят ограничения розыгрышей.
    bypassRoles: [],
  },

  // =========================
  // НАСТРОЙКИ ДНЕЙ РОЖДЕНИЯ
  // =========================
  birthday: {
    // ID роли, выдаваемой пользователям в день рождения.
    defaultRole: null,

    // ID канала, куда публикуются объявления о дне рождения.
    announcementChannel: null,

    // Часовой пояс для расчёта дат рождения.
    timezone: "UTC",
  },

  // =========================
  // НАСТРОЙКИ ВЕРИФИКАЦИИ
  // =========================
  verification: {
    // Сообщение при публикации панели верификации.
    defaultMessage: "Нажмите на кнопку ниже, чтобы верифицироваться и получить доступ к серверу!",

    // Текст на кнопке верификации.
    defaultButtonText: "Верификация",

    // Настройки автоматической верификации.
    autoVerify: {
      // Как автоматическая верификация решает, кто будет автоодобрен:
      // - "none"        = все верифицируются автоматически
      // - "account_age" = аккаунт должен быть старше указанного количества дней
      // - "server_size" = авто-верификация всех только на маленьких серверах
      defaultCriteria: "none",

      // Количество дней, используемое когда `defaultCriteria` = `account_age`.
      defaultAccountAgeDays: 7,

      // Порог количества участников для `defaultCriteria` = `server_size`.
      // Пример: 1000 означает авто-верификацию, если на сервере меньше 1000 участников.
      serverSizeThreshold: 1000,

      // Допустимые лимиты безопасности для требований к возрасту аккаунта.
      // 1 = минимальный день, 365 = максимальное количество дней.
      minAccountAge: 1,      
      maxAccountAge: 365,    

      // Если true, пользователь получает ЛС после верификации.
      sendDMNotification: true,

      // Человеко-читаемые описания для каждого режима критерия.
      criteria: {
        account_age: "Аккаунт должен быть старше указанного количества дней",
        server_size: "Все пользователи, если на сервере меньше 1000 участников",
        none: "Все пользователи немедленно"
      }
    },

    // Минимальное время между попытками верификации (миллисекунды).
    // 5000 = 5 секунд.
    verificationCooldown: 5000,  

    // Максимальное количество неудачных попыток за временное окно ниже.
    maxVerificationAttempts: 3,   

    // Временное окно для подсчёта попыток (миллисекунды).
    // 60000 = 1 минута.
    attemptWindow: 60000,          

    // Лимиты безопасности в памяти (помогает избежать неограниченного роста памяти).
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    // Частота очистки карт кулдауна/попыток (миллисекунды).
    // 300000 = 5 минут.
    cooldownCleanupInterval: 300000, 
    // Максимальный размер метаданных для записей аудита (байты).
    maxAuditMetadataBytes: 4096,
    // Максимальное количество записей аудита в памяти.
    maxInMemoryAuditEntries: 1000,
    // Если true, логирует каждое действие верификации.
    logAllVerifications: true,
    // Если true, сохраняет историю аудита верификации.
    keepAuditTrail: true,
  },

  // =========================
  // ПРИВЕТСТВЕННЫЕ / ПРОЩАЛЬНЫЕ СООБЩЕНИЯ
  // =========================
  welcome: {
    // Шаблон приветствия при входе пользователя.
    // Плейсхолдеры: {user}, {server}, {memberCount}
    defaultWelcomeMessage:
      "Добро пожаловать {user} на {server}! Теперь нас {memberCount} участников!",
    // Шаблон прощания при уходе пользователя.
    // Плейсхолдеры: {user}, {memberCount}
    defaultGoodbyeMessage:
      "{user} покинул сервер. Теперь нас {memberCount} участников.",
    // ID канала для приветственных сообщений.
    defaultWelcomeChannel: null,
    // ID канала для прощальных сообщений.
    defaultGoodbyeChannel: null,
  },

  // =========================
  // КАНАЛЫ-СЧЁТЧИКИ
  // =========================
  counters: {
    defaults: {
      // Шаблоны названий/описаний по умолчанию.
      name: "Счётчик {name}",
      description: "Счётчик {name} сервера",
      // Тип канала для счётчиков (обычно "voice").
      type: "voice",
      // Формат названия канала. `{count}` заменяется автоматически.
      channelName: "{name}-{count}",
    },
    permissions: {
      // Запрещённые права по умолчанию.
      deny: ["VIEW_CHANNEL"],
      // Разрешённые права по умолчанию.
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      // Стандартные ответные сообщения для действий со счётчиками.
      created: "✅ Создан счётчик **{name}**",
      deleted: "🗑️ Удалён счётчик **{name}**",
      updated: "🔄 Обновлён счётчик **{name}**",
    },
    types: {
      // Встроенные типы счётчиков и как каждый считается.
      members: {
        name: "👥 Участников",
        description: "Всего участников на сервере",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 Ботов",
        description: "Всего ботов на сервере",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 Людей",
        description: "Всего людей (не ботов)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // СТАНДАРТНЫЕ СООБЩЕНИЯ БОТА
  // =========================
  messages: {
    noPermission: "У вас нет прав для использования этой команды.",
    cooldownActive: "Пожалуйста, подождите {time} перед повторным использованием этой команды.",
    errorOccurred: "Произошла ошибка при выполнении этой команды.",
    missingPermissions:
      "У меня нет необходимых прав для выполнения этого действия.",
    commandDisabled: "Эта команда отключена.",
    maintenanceMode: "Бот сейчас находится в режиме обслуживания.",
  },

  // =========================
  // ВКЛЮЧЕНИЕ/ОТКЛЮЧЕНИЕ ФУНКЦИЙ
  // =========================
  // Установите `false` для любой функции, чтобы отключить её глобально.
  features: {
    // Основные системы.
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,

    // Системы вовлечения сообщества.
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,

    // Системы безопасности и самообслуживания.
    verification: true,
    reactionRoles: true,
    joinToCreate: true,

    // Модули полезности/качества жизни.
    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
  },
};

export function validateConfig(config) {
  const errors = [];

  
  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Проверка переменных окружения:');
    logger.debug('DISCORD_TOKEN существует:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN существует:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID существует:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID существует:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST существует:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Токен бота обязателен (переменная окружения DISCORD_TOKEN или TOKEN)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("ID клиента обязателен (переменная окружения CLIENT_ID)");
  }

  
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.POSTGRES_HOST) {
      errors.push("Хост PostgreSQL обязателен в продакшене (переменная окружения POSTGRES_HOST)");
    }
    if (!process.env.POSTGRES_USER) {
      errors.push("Пользователь PostgreSQL обязателен в продакшене (переменная окружения POSTGRES_USER)");
    }
    if (!process.env.POSTGRES_PASSWORD) {
      errors.push("Пароль PostgreSQL обязателен в продакшене (переменная окружения POSTGRES_PASSWORD)");
    }
  }

  return errors;
}

// Валидация конфигурации
const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Ошибки конфигурации бота:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  // Поддержка числовых значений цветов
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    // Преобразование HEX строки в число
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );
  
  // Преобразование результата в число, если это HEX строка
  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;
