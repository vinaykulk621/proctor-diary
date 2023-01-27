export { default } from "next-auth/middleware";
export const config = {
    matcher: [
        "/profile", "/activity-points", "/course-registration", "/faculty/profile", "/handling", "/exams", "/extra-curricular", "/internship",
        "/proctor-meet", "/scholarship"
    ]
}