const getRandomElement = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export function generateNickname() {
  const adjectives = [
    "Brave",
    "Clever",
    "Eager",
    "Fancy",
    "Jolly",
    "Lively",
    "Mighty",
    "Noble",
    "Quick",
    "Witty",
    "Agile",
    "Bold",
    "Calm",
    "Daring",
    "Elegant",
    "Fierce",
    "Gentle",
    "Happy",
    "Inventive",
    "Joyful",
    "Kind",
    "Loyal",
    "Merry",
    "Neat",
    "Optimistic",
    "Proud",
    "Quiet",
    "Radiant",
    "Strong",
    "Tough",
    "Unique",
    "Vivid",
    "Wise",
    "Youthful",
    "Zealous",
    "Courageous",
    "Diligent",
    "Energetic",
    "Friendly",
    "Generous",
  ];

  const animals = [
    "Lion",
    "Tiger",
    "Eagle",
    "Falcon",
    "Shark",
    "Panther",
    "Wolf",
    "Fox",
    "Bear",
    "Hawk",
    "Elephant",
    "Giraffe",
    "Zebra",
    "Cheetah",
    "Panda",
    "Koala",
    "Kangaroo",
    "Alligator",
    "Crocodile",
    "Turtle",
    "Rabbit",
    "Deer",
    "Otter",
    "Beaver",
    "Badger",
    "Hedgehog",
    "Squirrel",
    "Raccoon",
    "Mongoose",
    "Lynx",
    "Dolphin",
    "Whale",
    "Penguin",
    "Seal",
    "Octopus",
    "Jellyfish",
    "Stingray",
    "Seahorse",
    "Lobster",
    "Crab",
  ];

  const suffixes = [
    "Master",
    "Hero",
    "Champ",
    "Wizard",
    "Pro",
    "Ninja",
    "Warrior",
    "Guru",
    "Expert",
    "Virtuoso",
    "Ace",
    "Maverick",
    "Legend",
    "Phenom",
    "Whiz",
    "Ace",
    "Crusader",
    "Sage",
    "Savvy",
    "Vanguard",
    "Conqueror",
    "Strategist",
    "Innovator",
    "Savior",
    "Trailblazer",
    "Voyager",
    "Pioneer",
    "Guardian",
    "Defender",
    "Protector",
  ];

  const adjective = getRandomElement(adjectives);
  const animal = getRandomElement(animals);
  const suffix = getRandomElement(suffixes);
  const number = Math.floor(Math.random() * 100);

  const nickname = `${adjective}${animal}${suffix}${number}`;

  return nickname;
}
