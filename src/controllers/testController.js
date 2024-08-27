async function pingRequest(req, res) {
  // console.log("from controller", this.testService);

  const response = await this.testService.pingCheck();
  return res.send({
    data: response,
  });
}

module.exports = { pingRequest };
