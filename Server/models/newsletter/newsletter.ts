import { Schema } from "mongoose";

const mongoose = require("mongoose");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const newsletterSchema = new Schema({
  mail: {
    type: String,
    required: true,
    validate: [validateEmail, "Please fill a valid email address"],
  },
});

const NewsletterModel = mongoose.model("Newsletter", newsletterSchema);

export class Newsletter {
  public static async postOneNewsletterMail(body: { mail: String }) {
    const mailToSave = new NewsletterModel({
      mail: body.mail,
    });
    console.log(mailToSave);
    return await mailToSave.save();
  }
}
