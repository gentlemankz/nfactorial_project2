export async function fetchNews() {
    try {
      const response = await fetch('http://localhost:3000/api/article-info');
      if (!response.ok) {
        throw new Error('Ошибка при получении новостей');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка:", error);
      return [];
    }
  }