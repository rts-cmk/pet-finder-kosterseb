// src/utils/petAPI.js
// Utility functions for integrating with The Dog API and The Cat API

const DOG_API_KEY = 'YOUR_DOG_API_KEY_HERE'; // Get from https://thedogapi.com/
const CAT_API_KEY = 'YOUR_CAT_API_KEY_HERE'; // Get from https://thecatapi.com/

const DOG_API_BASE = 'https://api.thedogapi.com/v1';
const CAT_API_BASE = 'https://api.thecatapi.com/v1';

/**
 * Fetch random dog images from The Dog API
 * @param {number} limit - Number of images to fetch
 * @returns {Promise<Array>} Array of dog image objects
 */
export const fetchDogImages = async (limit = 10) => {
  try {
    const response = await fetch(
      `${DOG_API_BASE}/images/search?limit=${limit}`,
      {
        headers: {
          'x-api-key': DOG_API_KEY
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch dog images');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching dog images:', error);
    return [];
  }
};

/**
 * Fetch random cat images from The Cat API
 * @param {number} limit - Number of images to fetch
 * @returns {Promise<Array>} Array of cat image objects
 */
export const fetchCatImages = async (limit = 10) => {
  try {
    const response = await fetch(
      `${CAT_API_BASE}/images/search?limit=${limit}`,
      {
        headers: {
          'x-api-key': CAT_API_KEY
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch cat images');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching cat images:', error);
    return [];
  }
};

/**
 * Fetch dog breeds from The Dog API
 * @returns {Promise<Array>} Array of dog breed objects
 */
export const fetchDogBreeds = async () => {
  try {
    const response = await fetch(`${DOG_API_BASE}/breeds`, {
      headers: {
        'x-api-key': DOG_API_KEY
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch dog breeds');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
    return [];
  }
};

/**
 * Fetch cat breeds from The Cat API
 * @returns {Promise<Array>} Array of cat breed objects
 */
export const fetchCatBreeds = async () => {
  try {
    const response = await fetch(`${CAT_API_BASE}/breeds`, {
      headers: {
        'x-api-key': CAT_API_KEY
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch cat breeds');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching cat breeds:', error);
    return [];
  }
};

/**
 * Fetch images of a specific dog breed
 * @param {string} breedId - The breed ID from The Dog API
 * @param {number} limit - Number of images to fetch
 * @returns {Promise<Array>} Array of dog image objects
 */
export const fetchDogImagesByBreed = async (breedId, limit = 10) => {
  try {
    const response = await fetch(
      `${DOG_API_BASE}/images/search?breed_id=${breedId}&limit=${limit}`,
      {
        headers: {
          'x-api-key': DOG_API_KEY
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch dog images by breed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching dog images by breed:', error);
    return [];
  }
};

/**
 * Fetch images of a specific cat breed
 * @param {string} breedId - The breed ID from The Cat API
 * @param {number} limit - Number of images to fetch
 * @returns {Promise<Array>} Array of cat image objects
 */
export const fetchCatImagesByBreed = async (breedId, limit = 10) => {
  try {
    const response = await fetch(
      `${CAT_API_BASE}/images/search?breed_id=${breedId}&limit=${limit}`,
      {
        headers: {
          'x-api-key': CAT_API_KEY
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch cat images by breed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching cat images by breed:', error);
    return [];
  }
};

/**
 * Example: Transform API response to match your database structure
 * @param {Array} apiDogs - Dogs from The Dog API
 * @param {string} location - Location to assign
 * @returns {Array} Transformed dog objects
 */
export const transformDogData = (apiDogs, location = 'New York City') => {
  return apiDogs.map((dog, index) => ({
    id: index + 1,
    image: dog.url,
    breed: dog.breeds?.[0]?.name || 'Mixed Breed',
    gender: Math.random() > 0.5 ? 'male' : 'female',
    location: location,
    age: `${Math.floor(Math.random() * 5) + 1} years`,
    weight: `${Math.floor(Math.random() * 50) + 20} lbs`,
    short_description: 'Looking for a loving home and family to call my own',
    long_description: dog.breeds?.[0]?.temperament 
      ? `A wonderful ${dog.breeds[0].name} with a ${dog.breeds[0].temperament.toLowerCase()} personality. ${dog.breeds[0].bred_for || ''}`
      : 'A wonderful companion looking for their forever home.'
  }));
};

/**
 * Example: Transform Cat API response to match your database structure
 * @param {Array} apiCats - Cats from The Cat API
 * @param {string} location - Location to assign
 * @returns {Array} Transformed cat objects
 */
export const transformCatData = (apiCats, location = 'New York City') => {
  return apiCats.map((cat, index) => ({
    id: index + 1,
    image: cat.url,
    breed: cat.breeds?.[0]?.name || 'Mixed Breed',
    gender: Math.random() > 0.5 ? 'male' : 'female',
    location: location,
    age: `${Math.floor(Math.random() * 5) + 1} years`,
    weight: `${Math.floor(Math.random() * 10) + 5} lbs`,
    short_description: 'Looking for a loving home and family to call my own',
    long_description: cat.breeds?.[0]?.temperament 
      ? `A wonderful ${cat.breeds[0].name} with a ${cat.breeds[0].temperament.toLowerCase()} personality. ${cat.breeds[0].description || ''}`
      : 'A wonderful companion looking for their forever home.'
  }));
};

// Usage Example:
// Import in your component:
// import { fetchDogImages, transformDogData } from '../utils/petAPI';
//
// In your useEffect:
// const dogs = await fetchDogImages(10);
// const transformedDogs = transformDogData(dogs);
// setAnimals(transformedDogs);