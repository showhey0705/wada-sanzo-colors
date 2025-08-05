import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navigation: {
        inspiration: 'Inspiration',
        collection: 'Collection',
        colors: 'Colors',
        combinations: 'Combinations',
        favorites: 'Favorites',
        about: 'About',
        profile: 'Profile'
      },
      pages: {
        title: 'A Dictionary of Color Combinations',
        description: 'Interactive adaptation of Wada Sanzo\'s famous color collection with 159 colors and 348 color combinations.',
        noFavoriteColors: 'No favorite colors.',
        noFavoriteCombinations: 'No favorite combinations.',
        loading: 'Loading...',
        pickAColor: 'Pick a Color',
        findFromCollection: 'Find from collection',
        mostSimilarColor: 'The most similar color from the collection:',
        randomColor: 'Random Color',
        randomCombination: 'Random Combination',
        colorPicker: 'Color Picker',
        backgroundCombination: 'Background Combination'
      },
      actions: {
        donate: 'Donate',
        copyHex: 'copy HEX',
        copyRgb: 'copy RGB',
        copyCmyk: 'copy CMYK',
        copyLab: 'copy LAB',
        savedToFavorites: 'Saved to Favorites',
        removedFromFavorites: 'Removed from Favorites'
      }
    }
  },
  ja: {
    translation: {
      navigation: {
        inspiration: 'インスピレーション',
        collection: 'コレクション',
        colors: '色',
        combinations: '組み合わせ',
        favorites: 'お気に入り',
        about: 'について',
        profile: 'プロフィール'
      },
      pages: {
        title: '色彩組み合わせ辞典',
        description: '和田三造の有名な色彩コレクションのインタラクティブ版。159色と348の色彩組み合わせ。',
        noFavoriteColors: 'お気に入りの色がありません。',
        noFavoriteCombinations: 'お気に入りの組み合わせがありません。',
        loading: '読み込み中...',
        pickAColor: '色を選択',
        findFromCollection: 'コレクションから検索',
        mostSimilarColor: 'コレクションから最も似ている色：',
        randomColor: 'ランダムな色',
        randomCombination: 'ランダムな組み合わせ',
        colorPicker: 'カラーピッカー',
        backgroundCombination: '背景の組み合わせ'
      },
      actions: {
        donate: '寄付',
        copyHex: 'HEXをコピー',
        copyRgb: 'RGBをコピー',
        copyCmyk: 'CMYKをコピー',
        copyLab: 'LABをコピー',
        savedToFavorites: 'お気に入りに保存しました',
        removedFromFavorites: 'お気に入りから削除しました'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;