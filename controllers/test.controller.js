class TestController {
    constructor({ testService }) {
        this.someservice = testService;
    }

    async get(req, res) {
        const result = await this.someservice.get();
        res.send(result);
    }
}

export default TestController;