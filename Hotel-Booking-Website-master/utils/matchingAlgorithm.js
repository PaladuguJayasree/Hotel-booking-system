const stringSimilarity = require("string-similarity");

// Calculate similarity between two strings using Levenshtein distance
const calculateStringSimilarity = (str1, str2) => {
  const similarity = stringSimilarity.compareTwoStrings(
    str1.toLowerCase().trim(),
    str2.toLowerCase().trim()
  );
  return Math.round(similarity * 100);
};

// Calculate date proximity score (same date = 100, ±1 day = 80, ±2 days = 60, etc.)
const calculateDateSimilarity = (date1, date2) => {
  const d1 = new Date(date1).getTime();
  const d2 = new Date(date2).getTime();
  
  const diffTime = Math.abs(d1 - d2);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 100;
  if (diffDays === 1) return 80;
  if (diffDays === 2) return 60;
  if (diffDays <= 7) return 40;
  if (diffDays <= 14) return 20;
  return 0;
};

// Basic image similarity using pixel comparison
const calculateImageSimilarity = async (imagePath1, imagePath2) => {
  // This is a simplified version. In production, use more sophisticated image matching
  // For now, return 0 if images don't exist, or use a placeholder mechanism
  try {
    if (!imagePath1 || !imagePath2) return 0;
    
    // Placeholder: In real implementation, use image hashing or deep learning models
    // For now, return a moderate score for demonstration
    return 50;
  } catch (error) {
    console.error("Image similarity calculation error:", error);
    return 0;
  }
};

// Calculate overall match score
const calculateMatchScore = (nameScore, dateScore, imageScore) => {
  // Weighted average: name (50%), date (30%), image (20%)
  const score = (nameScore * 0.5 + dateScore * 0.3 + imageScore * 0.2);
  return Math.round(score);
};

module.exports = {
  calculateStringSimilarity,
  calculateDateSimilarity,
  calculateImageSimilarity,
  calculateMatchScore
};
