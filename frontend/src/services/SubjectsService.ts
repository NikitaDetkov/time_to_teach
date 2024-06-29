export default class SubjectsService {
    static async getAllSubjects() {
        const url = 'http://localhost:5000/api/subjects/list';

        try {
            const res = await fetch(url);
            const response = res.json();
            return response;
        } catch (err) {
            return err;
        }
    }
}
