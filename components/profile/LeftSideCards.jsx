import { Card } from "./Card";

export function LeftSideCards({}) {
  return (
    <div className="flex flex-1 flex-col p-4">
      <Card content="Exams" />
      <Card content="Scholarship" />
      <Card content="Health Records" />
    </div>
  );
}
