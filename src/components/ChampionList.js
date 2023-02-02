import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleChampion from "./SingleChampion";
import SearchBar from "./SearchBar";

const ChampionList = () => {
  const [value, setValue] = useState([]);
  const fetchChampions = async () => {
    const response = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json"
    );
    const data = response.data.data;
    setValue(Object.values(data));
  };
  useEffect(() => {
    fetchChampions();
  }, []);
  return (
    <div className="champion-list">
    <ul>
      {value.map((champion,idx) => (
        <li><SingleChampion champion={champion} key={idx}/></li>
      ))}
    </ul>
      <SearchBar />
    </div>
  );
};

export default ChampionList;
