import { cacheTag } from "next/cache";
import { Suspense } from "react";

async function fetchCharacterName() {
  "use cache";
  cacheTag("futurama");

  const characterResponse = await fetch(
    "https://api.sampleapis.com/futurama/characters/1"
  );
  const character = await characterResponse.json();
  const name = character.name.first;
  return name;
}

const CharacterName = async () => {
  const name = await fetchCharacterName();
  return (
    <div>
      <h1>Name: {name}</h1>
      <span>{new Date().toISOString()}</span>
    </div>
  );
};

export default async function Home() {
    'use cache'
  return (
    <Suspense>
      <CharacterName />
    </Suspense>
  );
}
