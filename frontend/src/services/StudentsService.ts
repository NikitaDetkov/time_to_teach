export default class StudentsService {
    static async getAllStudents() {
        const url = 'http://localhost:5000/api/students/list';

        try {
            const res = await fetch(url);
            const response = res.json();
            return response;
        } catch (err) {
            return err;
        }
    }
}
