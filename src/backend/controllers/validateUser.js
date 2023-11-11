const jobSeekerModel = require( "../model/jobSeekers");
const recruiterModel = require( "../model/recruiters");

const validateUser = async (req, res) => {
    const { loginEmail, loginPassword } = req.body;
    try {
        const jobSeeker = await jobSeekerModel.findOne({email : loginEmail, password : loginPassword});
        const recruiter = await recruiterModel.findOne({email : loginEmail, password : loginPassword});
        
        if(jobSeeker){
            res.status(200).json({ ...jobSeeker._doc, designation : 'jobSeeker'});
        } else if(recruiter){
             // Sending the user back as a response
             res.status(200).json({ ...recruiter._doc, designation : 'recruiter'});
        } else {
            // alert(new Error("User Not Found"));
            console.log("error: User Not Found");
            res.status(404).json({ error: "User Not Found" });
        }
    } catch(error) {
        // alert(new Error("Something went wrong!"));
        console.log("Something went wrong!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

module.exports = validateUser;