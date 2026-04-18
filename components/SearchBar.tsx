"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (c: string) => void }) {
  const [cidade, setCidade] = useState("");
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <input 
        type="text" 
        placeholder="Digite a cidade..." 
        value={cidade} 
        onChange={(e) => setCidade(e.target.value)} 
      />
      <button onClick={() => onSearch(cidade)}>Buscar</button>
    </div>
  );
}