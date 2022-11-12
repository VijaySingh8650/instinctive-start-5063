const notFoundURL = async(req,res) => {
    return res.status(500).send({ message: "URL not found" });
}

module.exports = notFoundURL;