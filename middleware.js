export { default } from "next-auth/middleware";
export const config = {
    matcher: [
        "/profile", "/activity-points", "/course-registration", "/faculty/profile", "/enrolled", "/exams", "/health", "/internship",
        "/proctormeet", "/scholarship"
    ]
}