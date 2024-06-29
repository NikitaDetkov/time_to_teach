export default class LessonsService {
    static async getAllLessons() {
        const url = 'http://localhost:5000/api/lessons/list';

        try {
            const res = await fetch(url);
            const response = res.json();
            return response;
        } catch (err) {
            return err;
        }
    };
}
