const icons = {
  "0": {
    dayIcon: require("@/assets/images/weather-icons/clear.svg"),
    nightIcon: require("@/assets/images/weather-icons/clear-moon.svg"),
    status: {
      uk: "чисте небо",
      ru: "чистое небо",
      en: "clear sky",
    },
  },

  "1": {
    dayIcon: require("@/assets/images/weather-icons/few-clouds.svg"),
    nightIcon: require("@/assets/images/weather-icons/few-clouds-moon.svg"),
    status: {
      uk: "легка хмарність",
      ru: "легкая облачность",
      en: "mainly clear",
    },
  },

  "2": {
    dayIcon: require("@/assets/images/weather-icons/many-clouds.svg"),
    nightIcon: require("@/assets/images/weather-icons/many-clouds-moon.svg"),
    status: {
      uk: "мінлива хмарність",
      ru: "переменная облачность",
      en: "partly cloudy",
    },
  },

  "45": {
    dayIcon: require("@/assets/images/weather-icons/cloudy.svg"),
    nightIcon: require("@/assets/images/weather-icons/cloudy.svg"),
    status: {
      uk: "туман",
      ru: "туман",
      en: "foggy",
    },
  },

  "48": {
    dayIcon: require("@/assets/images/weather-icons/cloudy.svg"),
    nightIcon: require("@/assets/images/weather-icons/cloudy.svg"),
    status: "depositing rime fog",
  },

  "3": {
    dayIcon: require("@/assets/images/weather-icons/cloudy.svg"),
    nightIcon: require("@/assets/images/weather-icons/cloudy.svg"),
    status: {
      uk: "похмуро",
      ru: "пасмурно",
      en: "overcast",
    },
  },

  "51": {
    dayIcon: require("@/assets/images/weather-icons/rain-light.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-light.svg"),
    status: {
      uk: "легка мряка",
      ru: "легкая морось",
      en: "light drizzle",
    },
  },

  "53": {
    dayIcon: require("@/assets/images/weather-icons/rain-moderate.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-moderate.svg"),
    status: {
      uk: "помірна мряка",
      ru: "умеренная морось",
      en: "moderate drizzle",
    },
  },

  "55": {
    dayIcon: require("@/assets/images/weather-icons/rain-heavy.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-heavy.svg"),
    status: {
      uk: "інтенсивна мряка",
      ru: "интенсивная морось",
      en: "intensity drizzle",
    },
  },
  "61": {
    dayIcon: require("@/assets/images/weather-icons/rain-light.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-light.svg"),
    status: {
      uk: "слабкий дощ",
      ru: "слабый дождь",
      en: "slight rain",
    },
  },
  "63": {
    dayIcon: require("@/assets/images/weather-icons/rain-moderate.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-moderate.svg"),
    status: {
      uk: "помірний дощ",
      ru: "умеренный дождь",
      en: "moderate rain",
    },
  },
  "65": {
    dayIcon: require("@/assets/images/weather-icons/rain-heavy.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-heavy.svg"),
    status: {
      uk: "сильний дощ",
      ru: "сильный дождь",
      en: "intensity rain",
    },
  },

  "56": {
    dayIcon: require("@/assets/images/weather-icons/snow-light.svg"),
    nightIcon: require("@/assets/images/weather-icons/snow-light.svg"),
    status: {
      uk: "легка крижана мряка",
      ru: "легкая ледяная морось",
      en: "light freezing drizzle",
    },
  },
  "57": {
    dayIcon: require("@/assets/images/weather-icons/snow-heavy.svg"),
    nightIcon: require("@/assets/images/weather-icons/snow-heavy.svg"),
    status: {
      uk: "сильна крижана мряка",
      ru: "сильная ледяная морось",
      en: "intensity freezing drizzle",
    },
  },
  "66": {
    dayIcon: require("@/assets/images/weather-icons/snow-light.svg"),
    nightIcon: require("@/assets/images/weather-icons/snow-light.svg"),
    status: {
      uk: "дрібний крижаний дощ",
      ru: "легкий ледяной дождь",
      en: "light freezing rain",
    },
  },
  "67": {
    dayIcon: require("@/assets/images/weather-icons/snow-heavy.svg"),
    nightIcon: require("@/assets/images/weather-icons/snow-heavy.svg"),
    status: {
      uk: "сильный крижаний дощ",
      ru: "сильний ледяной дождь",
      en: "intensity freezing rain",
    },
  },
  "71": {
    dayIcon: require("@/assets/images/weather-icons/snow-light.svg"),
    nightIcon: require("@/assets/images/weather-icons/snow-light.svg"),
    status: {
      uk: "легкий снігопад",
      ru: "легкий снегопад",
      en: "slight snowfall",
    },
  },
  "73": {
    dayIcon: require("@/assets/images/weather-icons/snow-moderate.svg"),
    nightIcon: require("@/assets/images/weather-icons/snow-moderate.svg"),
    status: {
      uk: "помірний снігопад",
      ru: "умеренный снегопад",
      en: "moderate snowfall",
    },
  },
  "75": {
    dayIcon: require("@/assets/images/weather-icons/snow-heavy.svg"),
    nightIcon: require("@/assets/images/weather-icons/snow-heavy.svg"),
    status: {
      uk: "сильний снігопад",
      ru: "сильный снегопад",
      en: "heavy snowfall",
    },
  },
  "77": {
    dayIcon: require("@/assets/images/weather-icons/snow-grains.svg"),
    nightIcon: require("@/assets/images/weather-icons/snow-grains.svg"),
    status: {
      uk: "сніжна крупа",
      ru: "снежная крупа",
      en: "snow grains",
    },
  },
  "80": {
    dayIcon: require("@/assets/images/weather-icons/rain-light.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-light.svg"),
    status: {
      uk: "слабка злива",
      ru: "слабый ливень",
      en: "slight shower",
    },
  },
  "81": {
    dayIcon: require("@/assets/images/weather-icons/rain-moderate.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-moderate.svg"),
    status: {
      uk: "помірна злива",
      ru: "умеренный ливень",
      en: "moderate shower",
    },
  },
  "82": {
    dayIcon: require("@/assets/images/weather-icons/rain-heavy.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-heavy.svg"),
    status: {
      uk: "сильна злива",
      ru: "сильный ливень",
      en: "violent shower",
    },
  },
  "85": {
    dayIcon: require("@/assets/images/weather-icons/snow-light.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-heavy.svg"),
    status: {
      uk: "слабкий сніжна злива",
      ru: "слабый снежный ливень",
      en: "slight snow shower",
    },
  },
  "86": {
    dayIcon: require("@/assets/images/weather-icons/snow-heavy.svg"),
    nightIcon: require("@/assets/images/weather-icons/rain-heavy.svg"),
    status: {
      uk: "сильна сніжна злива",
      ru: "сильный снежный ливень",
      en: "heavy snow shower",
    },
  },

  "95": {
    dayIcon: require("@/assets/images/weather-icons/thunder.svg"),
    nightIcon: require("@/assets/images/weather-icons/thunder.svg"),
    status: {
      uk: "гроза",
      ru: "гроза",
      en: "thunderstorm",
    },
  },
  "96": {
    dayIcon: require("@/assets/images/weather-icons/thunder-hail-light.svg"),
    nightIcon: require("@/assets/images/weather-icons/thunder-hail-light.svg"),
    status: {
      uk: "гроза з легким градом",
      ru: "гроза со слабым градом ",
      en: "thunderstorm with heavy hail",
    },
  },
  "99": {
    dayIcon: require("@/assets/images/weather-icons/thunder-hail-heavy.svg"),
    nightIcon: require("@/assets/images/weather-icons/thunder-hail-heavy.svg"),
    status: {
      uk: "гроза з сильним градом",
      ru: "гроза с сильным градом",
      en: "thunderstorm with heavy hail",
    },
  },
};

export default icons;
