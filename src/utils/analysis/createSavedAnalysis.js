export function createSavedAnalysis(analysis) {
  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),

    analysis: {
      ...analysis,

      city: analysis.location.name,
      country: analysis.location.country,

      climate: {
        code: analysis.classification.climate.code,
        name: analysis.classification.climate.name,
      },
    },
  };
}
