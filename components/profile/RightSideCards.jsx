import { Card } from "./Card";

export function RightSideCards({}) {
  return (
    <div className="flex flex-1 flex-col">
      <Card content="Enrolled Courses" />
      <Card content="Internship & Placements" />
      <Card content="Proctor Meet" />
    </div>
  );
}
