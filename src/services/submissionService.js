const SubmissionCreationError = require("../errors/submissionCreationError");
const submissionQueueProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    //inject here
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "pong";
  }

  async addSubmission(submissionPayload) {
    const submission = await this.submissionRepository.createSubmission(
      submissionPayload
    );
    if (!submission) {
      // throw { message: "Not able to create submission" };
      throw new SubmissionCreationError(
        "Failed to create a submission in the repository"
      );
    }
    console.log(submission);
    const response = await submissionQueueProducer(submission);

    return { queueResponse: response, submission };
  }
}

module.exports = SubmissionService;
