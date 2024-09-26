import React from "react";

const names = ["ゆせさん", "よっさん", "おおにしくん"];

// 正しい型定義と関数構文を使ってコンポーネントを定義
const MapComponent: React.FC = () => {
  return (
    <div>
      {names.map((name, index) => (
        <div key={index}>{name}</div> // キーとタグの修正
      ))}
    </div>
  );
};

export default MapComponent;
