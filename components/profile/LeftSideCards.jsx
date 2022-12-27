import { Card } from "./Card";

export function LeftSideCards({}) {
  return (
    <div className="flex flex-1 flex-col">
      <Card content="Exams" />
      <Card content="Scholarship" />
      <Card content="Health Records" />
    </div>
  );
}
