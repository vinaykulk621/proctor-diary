import { Card } from "./Card";

export function LeftSideCards({}) {
  return (
    <div className="flex flex-1 flex-col">
      <Card content="Exams" />
      <Card content="Scholership" />
      <Card content="Health Records" />
    </div>
  );
}
