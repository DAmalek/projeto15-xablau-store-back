import db from "../Config/database.js";

export async function home(req, res) {

  try {
    const resp = await db.collection("products").find().toArray();

    res.status(200).send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
