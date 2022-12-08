import { Newsletter } from "../../models/newsletter/newsletter";

export class NewsletterController {
  public static async postMail(req, res) {
    await Newsletter.postOneNewsletterMail(req.body);
    res.status(201);
    res.send();
  }
}
