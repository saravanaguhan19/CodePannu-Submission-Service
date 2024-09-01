async function pingRequest(req, res) {
  // console.log("from controller", this.testService);

  const response = await this.testService.pingCheck();
  return res.send({
    data: response,
  });
}

async function createSubmission(req, res) {
  const response = await this.submissionService.addSubmission(req.body);
}

module.exports = {
  pingRequest,
  createSubmission,
};
