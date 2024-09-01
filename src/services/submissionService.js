const submissionQueueProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    //inject here
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "pong";
  }

  async addSubmission(submission) {
    const submission = this.submissionRepository.createSubmission(submission);
    if (!submission) {
      throw { message: "Not able to create submission" };
    }
    console.log(submission);
    const response = await submissionQueueProducer(submission);

    return { queueResponse: response, submission };
  }
}

module.exports = SubmissionService;
